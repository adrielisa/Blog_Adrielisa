from fastapi import FastAPI
from app.database import engine, Base
from app.routers import users, posts, comments

Base.metadata.create_all(bind=engine)

app = FastAPI(debug=True)

#Routes included
app.include_router(users.router)
app.include_router(posts.router)
app.include_router(comments.router)

@app.get("/")
def read_root():
    return {"message": "¡Welcome to Adrielisa's blog backend!"}