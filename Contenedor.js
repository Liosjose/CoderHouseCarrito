const fs = require('fs')
class Contenedor{
     constructor(filename){
          this.filename = filename;
     }
async write(texto){ 
     try {
          const escribir = await fs.promises.writeFile(this.filename, texto )
          return escribir;
     } catch (error) {
          console.log(error, "algo Salio Mal en la escritura")
     }
}

async deleteAll(){
     try {
     await fs.promises.writeFile(this.filename,"[]")
          console.log("Contenido Borrado")
     } catch (error) {
          console.log(error)
     }
}

async getAll (){ 
     try {
          const contenido = await fs.promises.readFile(this.filename, 'utf-8')
          const contenidoParse = JSON.parse(contenido)
          let contenidoJSON = JSON.stringify(contenidoParse)
                return  contenidoJSON         
          
              
     } catch (error) {
          console.log(error)
     }
}

async getById (id){ 

     console.log(id)
     // Sirve, tiene un error, no devuelve NULL, Solo un array vacion en caso de que no exista 
     try{
const contenido = await fs.promises.readFile(this.filename, 'utf-8')
     const contenidoParse = JSON.parse(contenido)
     
          let filter = contenidoParse.filter(x => x.id == id)
         return  JSON.stringify(filter)

}catch(error){
     console.log('No existe ')

}



}


async getLength (){ 
     // Sirve, tiene un error, no devuelve NULL, Solo un array vacion en caso de que no exista 
     try{
const contenido = await fs.promises.readFile(this.filename, 'utf-8')
     const contenidoParse = JSON.parse(contenido)
     
         return contenidoParse.length

}catch(error){
     console.log('No existe ')
}
}

async deleteById (id){ 

     console.log(`entra con el id ${id}`)
     try{
const contenido = await fs.promises.readFile(this.filename, 'utf-8')
     const contenidoParse = JSON.parse(contenido)
          let filter = contenidoParse.filter(x => x.id != id)
               let nuevo = await this.write(JSON.stringify(filter))
               console.log(nuevo)

return nuevo

}catch(error){
     console.log('No ')
}



}


async save (obj){ 

     let nuevoObj = obj
    
     try{
     const contenido = await fs.promises.readFile(this.filename, 'utf-8')
           const contenidoParse = JSON.parse(contenido)
     
      //Asigna el ID Basandose en la Cantidad de Items en el Array Object
      
          contenidoParse.push(nuevoObj)
                let nuevo = await this.write(JSON.stringify(contenidoParse))
          console.log(`El iD Asignado al producto "${nuevoObj.name}" fue ${nuevoObj.id}`)
                 
   
}catch(error){
     console.log('No se pudo modificar')
}
}

     
}






module.exports= Contenedor ;