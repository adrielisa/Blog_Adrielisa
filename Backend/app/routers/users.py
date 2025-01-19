from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas import UserCreate, UserResponse
from app.database import get_db
from app.crud import create_user
from app.models import User


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.post("/", response_model=UserResponse)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    """ 
    Endpoint para registrar un nuevo usuario
    """
    #Verificar si el correo o el username ya existen
    existing_user = db.query(User).filter((User.email == user.email) | (User.username == user.username)).first()
    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="El correo o el username ya están registrados."
        )

    # Crear el usuario si no existe
    new_user = create_user(db, user)
    return new_user