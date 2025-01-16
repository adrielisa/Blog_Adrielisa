from pydantic import BaseModel
from typing import Optional, List

class PostBase(BaseModel):
    tittle: str
    content: str
    category: Optional[str] = None
    
class PostCreate(PostBase):
    pass

class PostResponse(PostBase):
    id: int
    created_at: str
    user_id: int
    
    class Config:
        orm_mode = True

class UserBase(BaseModel):
    username: str
    email: str
    
class UserCreate(UserBase):
    password: str
    
class UserResponse(UserBase):
    id: int
    role: str
    profile_picture: Optional[str]
    created_at: str

    class Config:
        orm_mode = True


    
