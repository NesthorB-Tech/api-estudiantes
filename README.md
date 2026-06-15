# API REST — Administración de Estudiantes

API REST construida con Node.js y Express.js para gestionar una lista de 20 estudiantes.

## Cómo ejecutar

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Iniciar servidor: `node index.js`
4. Acceder en: `http://localhost:3000`

## Endpoints

| Método | Endpoint                 | Descripción           | Código  |
|--------|--------------------------|-----------------------|---------|
| GET    | /api/estudiantes         | Lista todos           | 200     |
| GET    | /api/estudiantes/:id     | Busca por ID          | 200/404 |
| POST   | /api/estudiantes         | Crea nuevo estudiante | 201/400 |
| PUT    | /api/estudiantes/:id     | Actualiza estudiante  | 200/404 |
| DELETE | /api/estudiantes/:id     | Elimina estudiante    | 200/404 |
