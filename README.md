# mean

angular - list users
http://127.0.0.1:3000/#/

angular - edit users
http://127.0.0.1:3000/#/

angular - new user
http://127.0.0.1:3000/#/new

================================================

api - list user
GET http://127.0.0.1:3000/api/users

api - find user
GET http://127.0.0.1:3000/api/users/5623fc153d80fd5b3c9b7a04

api - edit user
PUT http://127.0.0.1:3000/api/users/5623fc153d80fd5b3c9b7a04
BODY {"email":"david@email.com.br", "password":93145}

api - delete user
DELETE http://127.0.0.1:3000/api/users/562300a59b1e2289487a04c0

api - add user
POST http://127.0.0.1:3000/api/users/
BODY {"name":"david petro", "email":"david@email.com", "password":9314}
