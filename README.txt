SOLO PARA SER USADO CON POSTMAN 

Funciones que debo agregar en un futuro : 

24/04/22
1) poder editar de producto.txt un producto buscandolo por su id;
2) poder sumar a un carrito encontrado por id, un producto segun id;
3) verificar que tipo de usario entro (ADMIN/USER) para saber si tiene Acceso;
4)verificar que el id de un item producto no se repita;
5) verificar que el item tenga suficiente stock para poder agregarlo al carrito 
6) agregar el frontend y realizar el del carrito ? 


FORMATO PARA ENVIAR UN PRODUCTO MEDIANTE POSTMAN 

{"id":""*" , "timestamp" : "*", "nombre":"nombre","descripcion": "descripcion","codigo":"codigo","foto":"foto","precio":"precio","stock":"stock")

(*se asignara automaticamente en futuras actualizaciones)

FORMATO PARA CREAR UN CARRITO MEDIANTE POSTMAN 

{"id": "*", "timestamp": "*", "productos":[{producto}]}