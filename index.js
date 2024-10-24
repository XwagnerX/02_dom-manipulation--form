document.addEventListener("DOMContentLoaded", function() {
    const $form = document.querySelector("form");
  
    $form.addEventListener("submit", function (event) {
      event.preventDefault(); // Previene el envío tradicional del formulario
  
      // Llamamos a la función que recoge los datos del formulario
      handleFormSubmit(event);
    });
  });
  
  // Función que maneja los datos del formulario
  function handleFormSubmit(event) {
    // Obtenemos los valores usando event.target
    const $title = event.target.title.value;
    const $content = event.target.content.value;
  
    // Mostramos los valores en la consola
    console.log("title:", $title);
    console.log("content:", $content);
  }
  