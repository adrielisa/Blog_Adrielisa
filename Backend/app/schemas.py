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

class PostList(BaseModel):
    posts: List[PostResponse]

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

#El esquema base, todo esquema que le sigue, toda opinión debe tener como base un content que será string 
class OpinionBase(BaseModel):
    content: str
    
class OpinionCreate(OpinionBase):
    post_id: int
    user_id: int

class OpinionResponse(OpinionBase):
    id: int
    created_at: str
    post_id: int
    user_id: int
    
    class Config:
        orm_mode: True

    
