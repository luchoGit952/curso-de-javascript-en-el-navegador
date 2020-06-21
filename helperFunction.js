
// formatea la respuesta para parecer presentable en la pagina web
const renderResponse = (res) => {
    // maneja si res es falso
    if(!res){
      console.log(res.status)
    }
    // en caso de que regrese como una matriz en blanco
    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
      return
    }
  
    // crear una matriz para contener las cadenas HTML
    let wordList = []
    // recorriendo la respuesta y maximizandola a 10
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // creando una lista de palabras
      wordList.push(`<li>${res[i].word}</li>`)
    }
    // une la matriz de cadenas HTML en una cadena
    wordList = wordList.join("")
  
    // manipula responseField para representar la respuesta modificada
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`
    return
  }
  
  // representa la respuesta antes de que se modifique
  const renderRawResponse = (res) => {
    // tomando las primeras 10 palabras de res
    let trimmedResponse = res.slice(0, 10)
    //manipula responseField para representar la rreespuesta sin formato
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
  }
  
  // representa el JSON que se devolvio cuando se resuelve promise from fetch.
  const renderJsonResponse = (res) => {
    // creando un objeto vacio para almacenar el JSON en pares clave-valor
    let rawJson = {}
    for(let key in response){
      rawJson[key] = response[key]
    }
    // convierte json en una cadena y agruega saltos de linea  para que sea mas facil leer
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
    // manipula responseFiled para mostrar el JSON  devuelto.
    responseField.innerHTML = `<pre>${rawJson}</pre>`
  }
   //SOLICITUDES GET ASINCRONAS II..Aquí hay algunos puntos clave a tener en cuenta al recorrer el código:

//Usar una asyncfunción que devolverá una promesa.
//awaitsolo se puede usar en una asyncfunción. awaitpermite que un programa se 
//ejecute mientras espera que se resuelva una promesa.
//En una try...catchdeclaración, tryse ejecutará el código del bloque y, 
//en caso de una excepción / error, catchse ejecutará el código de la declaración.
const getData= async =>{

}