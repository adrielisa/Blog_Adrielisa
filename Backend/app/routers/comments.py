from fastapi import APIRouter

router = APIRouter()

@router.get("/comments")
def get_comments():
    return {"message": "Lista de comentarios (aún no implementados)"}
