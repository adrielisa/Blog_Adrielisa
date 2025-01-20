from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import User
from app.schemas import Token, Login
from app.utils import verify_password, create_access_token
from app.database import get_db

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/login", response_model=Token)
def login(user_credentials: Login, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == user_credentials.email).first()
    
    if not user or not verify_password(user_credentials.password, user.password):
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    
    token = create_access_token({"sub": user.email, "username": user.username})
    return {"access_token": token, "token_type": "bearer"}