// Obtener el elemento del menú
var menu = document.getElementById("menu");

// Obtener todos los elementos <a> del menú
var menuItems = menu.getElementsByTagName("a");

// Iterar sobre los elementos del menú
for (var i = 0; i < menuItems.length; i++) {
  // Agregar un event listener para cada elemento
  menuItems[i].addEventListener("click", function() {
    // Remover la clase 'active' de todos los elementos del menú
    for (var j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove("active");
    }
    
    // Agregar la clase 'active' al elemento actualmente seleccionado
    this.classList.add("active");
  });
}
