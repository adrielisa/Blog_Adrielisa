from fastapi import APIRouter

router = APIRouter()

@router.get("/posts")
def get_posts():
    return {"message": "Lista de posts"}
