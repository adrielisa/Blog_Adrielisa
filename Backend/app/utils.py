from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
from app.config import settings

#Crear un contexto de hash para las contraseñas
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

#Función que genera un hash de una contraseña
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

#Función que verifica las contraseñas
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

#Función que crea un token JWT
def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

#Función para verificar un token JWT
def verify_access_token(token:str) -> dict:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return payload
    except JWTError:
        return None