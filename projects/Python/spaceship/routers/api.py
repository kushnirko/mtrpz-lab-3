from fastapi import APIRouter
import numpy as np

router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrices')
def multiply_matrices(size: int = 10) -> dict:
    matrix_a = np.random.rand(size, size)
    matrix_b = np.random.rand(size, size)

    product = np.matmul(matrix_a, matrix_b)

    return {
        'matrix_a': matrix_a.tolist(),
        'matrix_b': matrix_b.tolist(),
        'product': product.tolist(),
    }
