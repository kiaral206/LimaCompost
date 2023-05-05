function bienvenida() {
    var nombre=localStorage.getItem("name");
    document.getElementById("titulo").innerHTML+= ` ${nombre}`
  }
  bienvenida();