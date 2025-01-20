from fastapi import FastAPI
from app.database import engine, Base
from app.routers import users, posts, comments, auth


Base.metadata.create_all(bind=engine)

app = FastAPI(debug=True)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia esto para especificar orígenes permitidos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Routes included
app.include_router(users.router)
app.include_router(posts.router)
app.include_router(comments.router)
app.include_router(auth.router)

@app.get("/")
def read_root():
    return {"message": "¡Welcome to Adrielisa's blog backend!"}