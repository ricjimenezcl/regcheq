Prueba tecnica REGCHECK

descargar repositorio

agregar dependencias ejecutando
  npm i


ejecutar proyeyecto ejecutando 
  npm run start

levantar postman

en metodo POST ejecutar url http://localhost:3000/auth/register

y crear usuario
con body

{"username": "admin", "email": "admin@regcheq.com", "password": "123456", "role": "admin"}


ejecutar login en metodo POST http://localhost:3000/auth/login
con body

{"email": "admin@regcheq.com", "password": "123456"}

El cual entregara token de conexion

agregar catalogo en metodo POST http://localhost:3000/catalogs
con body

{"name": "Electronicos", "description": "Productos electronicos"}

mostrar todos los catalogos metodo GET http://localhost:3000/catalogs

mostrar todos los catalogos por id metodo GET http://localhost:3000/catalogs
con body

{"id": "xxxx"}


update catalogos por id metodo PUT http://localhost:3000/catalogs
con body

{"id":"xxx", "name": "xxx", "description": "xxx"}


eliminar catalogos por id metodo DELETE http://localhost:3000/catalogs
con body

{"id":"xxx"}




