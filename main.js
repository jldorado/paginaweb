
var toggleButton = document.getElementById("toggle"); //Conseguimos la referencia del objeto que queremos al html usando el id
var gatitoBoton = document.getElementById("gatitoBoton");
var imagenDeGatito = document.getElementById("gatito");
var gatitoBotonon = document.getElementById("gatitoBotonon");

//Declaramos nuestras funciones
function changeBackgroundColor() {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function PrintMessage()
{
    console.log("Boton apretado");
}
////

gatitoBoton.addEventListener("click",
()=>{
    PrintMessage();
    imagenDeGatito.style.display = "none";
}
)

gatitoBotonon.addEventListener("click",
()=>{
    PrintMessage();
    imagenDeGatito.style.display = "block";
}
)

//Suscribimos nuestras funciones al evento del boton click
toggleButton.addEventListener("click",
()=>{ //Funciones virtuales
    changeBackgroundColor(); //LLamamos nuestra logica cuando el click sucede
});