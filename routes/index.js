let { Router } = require ('express');
let Contenedor = require ('../Contenedor.js');
const productos = new Contenedor('./saveData/productos.txt')
const carrito = new Contenedor('./saveData/carrito.txt')
const router = Router();

router.get('/productos', (req, res)=> { 
     (async () => {
     const meta = await productos.getAll();
     return res.send(`${meta}`); // 
 })();


})

router.post('/productos', (req, res)=> { 
     let obj = req.body
     const data =  productos.save(obj)
     console.log(data)
     res.send (data.id)

})

router.put('/productos/:id', (req, res)=> { 
     let NuevoProducto =req.body
     let id = req.params.id;
     (async () => {
          const meta = await productos.getById(id);
          return res.send(`${meta}`); // 
      })();
     

})

router.delete('/productos/:id', (req, res)=> { 
     
     let id = req.params.id;

     (async () => {
          const meta = await productos.deleteById(id);
          return res.send(`${meta}`); // 
      })();
     

})







// ROUTES DE CARRITO //

router.get('/carrito', (req, res)=> { 
     (async () => {
     const meta = await carrito.getAll();
     return res.send(`${meta}`); // 
 })();


})


router.delete('/carrito/:id', (req, res)=> { 
     
     let id = req.params.id;

     (async () => {
          const meta = await carrito.deleteById(id);
          return res.send(`${meta}`); // 
      })();
     

})


router.post('/carrito', (req, res)=> { 
     let nuevo = req.body
     const meta =  carrito.save(nuevo)
     console.log(meta)
     res.send ('llego')

})

router.put('/carrito/:id', (req, res)=> { 
     let NuevoProducto =req.body
     let id = req.params.id;
     (async () => {
          const meta = await productos.getById(id);
          return res.send(`${meta}`); // 
      })();
     

})

router.delete('/carrito/:id', (req, res)=> { 
     
     let id = req.params.id;

     (async () => {
          const meta = await productos.deleteById(id);
          return res.send(`${meta}`); // 
      })();
     

})



module.exports = router;

