from sqlalchemy.orm import Session
from app.models import User
from app.schemas import UserCreate
from app.utils import hash_password

#Crear un usuario
def create_user(db: Session, user: UserCreate):
    """ 
    Función para crear un nuevo usuario en la base de datos
    """
    hashed_password = hash_password(user.password)
    db_user = User(
        username=user.username,
        email=user.email,
        password=hashed_password,
        role="user",
        profile_picture=None
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user