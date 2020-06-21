


// las funciones onFuilled y onRejected
const inventario={
    gafasDeSol:1900,
    pantalones:1088,
    bolsas:1344
};
const comprobarInventario=(orden) =>{
    return new Promise((resolver,rechazar) =>{
        setTimeout(() =>{
            let enStock=orden.cada(item =>inventario[item[0]] >=item[1]);
            if(inStok){
              resolver("gracias. Su pedido fue exitoso")
            }else{
                rechazar ("Lo sentimos. Su pedido no se pudo completar por que algunos"+
                "estan agotados");
            }
        },1000)
    })

};
module.exports={comprobarInventario};
//PROMESAS O PROMISE
// el operador AWAIT.. solo se puede usar dentro dentro de una funcion async
//await es un operador que devuelve una promesa resuleta
