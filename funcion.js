// Formatea la respuesta para parcer presentable en la pagina ewb 
const renderResponse = (res) => {
    // maneja si res es falso
    if(!res){
      console.log(res.status);
    }
    // en caso de que res regrese como una matriz en blanco
    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
      return;
    }
  
    // crea una matriz vacia para contener las cadenas html
    let wordList = [];
    // recorre la respuesta y termina en 10
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // creando una lista de palabras
      wordList.push(`<li>${res[i].word}</li>`);
    }
    // une la matriz de cadenas HTML en cadena
    wordList = wordList.join("");
  
    // Manipula responseField para presentar la respuesta modificada
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
    return
  }
  
  // representa la respuesta antes de que se modifique
  const renderRawResponse = (res) => {
    // toma las primeras 10 palabras de res
    let trimmedResponse = res.slice(0, 10);
    // Manipula resposeField para presentar la respuesta sin formato
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
  }
  
  // Representa el Json que se devolvio cuando se resuelve promise from fetch.
  const renderJsonResponse = (res) => {
    // Crea un objeto vacio para almacenar el jsonen pares clave-valor
    let rawJson = {};
    for(let key in res){
      rawJson[key] = res[key];
    }
    // Convierte a json en una cadena y agruega un salto de linea paa ser mas facil leer
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
    // manipula responseField para mostrar el json devuelto .
    responseField.innerHTML = `<pre>${rawJson}</pre>`;
  }
