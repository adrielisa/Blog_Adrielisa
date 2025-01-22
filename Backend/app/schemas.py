from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class PostBase(BaseModel):
    tittle: str
    content: str
    category: Optional[str] = None
    
class PostCreate(PostBase):
    pass

class PostResponse(PostBase):
    id: int
    created_at: datetime
    user_id: int
    
    class Config:
        from_attributes = True


class PostList(BaseModel):
    posts: List[PostResponse]
    class Config:
        from_attributes = True


class UserBase(BaseModel):
    username: str
    email: str
    
class UserCreate(UserBase):
    password: str
    
class UserResponse(UserBase):
    id: int
    role: str
    profile_picture: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True


#El esquema base, todo esquema que le sigue, toda opinión debe tener como base un content que será string 
class OpinionBase(BaseModel):
    content: str
    
class OpinionCreate(OpinionBase):
    post_id: int
    user_id: int

class OpinionResponse(OpinionBase):
    id: int
    created_at: datetime
    post_id: int
    user_id: int
    
    class Config:
        orm_mode: True

from pydantic import BaseModel

class Login(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

    
class RefreshToken(BaseModel):
    refresh_token: str