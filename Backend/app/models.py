
from sqlalchemy import Column, Integer, String, Text, ForeignKey, TIMESTAMP
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base

#Modelo para la tabla users
class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=False, unique=True)
    email = Column(String(100), nullable=False, unique= True)
    password = Column(String(255), nullable=False)
    role = Column(String(20), default='user')
    profile_picture = Column(String(255), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())

    #Relación con la tabla de posts
    posts = relationship("Post", back_populates="owner")
    opinions = relationship("Opinion", back_populates="user")
    
#Modelo para la tabla posts
class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False )
    content = Column(Text, nullable=False)
    category = Column(String(50), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"))
    
    #Relación con el modelo user
    owner = relationship("User", back_populates="posts")
    opinions = relationship("Opinion", back_populates="posts")
    
#Modelo para la tabla opinions
class Opinion(Base):
    __tablename__ = "opinions"
    
    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"))
    post_id = Column(Integer, ForeignKey("posts.id", ondelete="CASCADE"))
    created_at = Column(TIMESTAMP, server_default=func.now())
    
    #Relación con los modelos User y Post
    user = relationship("User", back_populates="opinions")
    post = relationship("Post", back_populates="opinions")
    