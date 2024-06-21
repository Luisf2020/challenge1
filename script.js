function encrypt() {
    // Para obtener el texto de la entrada
    let inputText = document.getElementById('inputText').value;
    
    // Convertir a minúsculas y eliminar caracteres especiales
    inputText = inputText.replace(/[^a-z\s]/g, '');
    //Para Separar las palabras
    let words = inputText.split(' ');
   // Para encriptar cada palabra 
  let encryptedWords = words.map(word => {
    return word.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
});
// Unir las palabras encriptadas en un solo texto y mostrarlo en el área de salida
document.getElementById('outputText').value = encryptedWords.join(' ');
}

function decrypt() {
    let inputText = document.getElementById('inputText').value;
    
    // Convertir a minúsculas y eliminar caracteres especiales
    inputText = inputText.replace(/[^a-z\s]/g, '');
    // Para desencriptar el texto que ya esta encriptado 
    let outputText = inputText.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
      // Mostrar el texto desencriptado en el área de salida                        
    document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
    // Para Seleccionar el texto en el área de salida
    let outputText = document.getElementById('outputText');
    outputText.select();
    // Establecer el rango de selección para dispositivos móviles
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
   // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
    // Mostrar una alerta indicando que el texto se ha copiado
    alert("Texto copiado al portapapeles");
}
