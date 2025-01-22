from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import User
from app.schemas import Token, Login, RefreshToken
from app.utils import verify_password, create_access_token, verify_refresh_token
from app.database import get_db
from fastapi.security import OAuth2PasswordBearer

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/login", response_model=Token)
def login(user_credentials: Login, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == user_credentials.email).first()
    
    if not user or not verify_password(user_credentials.password, user.password):
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    
    access_token = create_access_token({"sub": user.email, "username": user.username})
    refresh_roken = create_access_token({"sub": user.email})
    return {
        "access_token": access_token,
        "refresh_token": refresh_roken,
        "token_type": "bearer"
        }
    
@router.post("/refresh", response_model=dict)
def refresh_token(refresh_data: RefreshToken, db: Session = Depends(get_db)):
    """ 
    Endpoint para renovar el Access Token usando el Refresh Token
    """
    try:
        #Verifica y decodifica el Refresh Token
        payload = verify_refresh_token()
        email = payload.get("sub")
        
        #Buscar al usuario en la bd
        user = db.query(User).filter(User.email == email).first()
        if not user:
            raise HTTPException(status_code=401, detail="usuario no encontrado")
        
        #Crear un nuevo Access Token
        access_token = create_access_token({"sub": user.email, "username": user.username})
        return {"access_token": access_token, "token_type": "bearer"}
        
    except Exception as e:
        raise HTTPException(status_code=401, detail="Token inválido o expirado")


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
