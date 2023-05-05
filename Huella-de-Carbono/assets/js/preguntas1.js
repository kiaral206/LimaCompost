function Saludar() {
    var nombre = document.getElementById("nombre").value;
     var Saludo = `Hola ${nombre}!
    Bienvenid@:)`;
    alert(Saludo);
    console.log(nombre);
    localStorage.setItem("name",nombre);
  }
  