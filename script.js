let lista = ["ARBOL","ANGEL","MARCO","CARRO","BARRO"];
//let palabra = "ARBOL";

let palabra = lista[Math.floor(Math.random()*lista.length)];
alert(palabra);
let intentos = 6;

const BOTON = document.getElementById("guess-button");
BOTON.addEventListener('click', intentar)

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO == palabra){
        terminar("<h1>ganaste! :)</h1>")
        return
    }
    const GRID = document.getElementById('grid');
    //contenedor.innerHTML = mensaje; 
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (palabra[i]==INTENTO[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "green";
        }else if (palabra.includes(INTENTO[i])){
            SPAN.innerHTML = INTENTO[i];//Amarillo -> yellow
            SPAN.style.backgroundColor = "yellow";
        }else{
            SPAN.innerHTML = INTENTO[i];//Gris ->gray
            SPAN.style.backgroundColor = "gray";
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if (intentos==0){
        terminar("<h1>perdiste :(</h1>")
        return
    }
}

function leerIntento(){
    let intento = document.getElementById
    ("guess-input").value;
    intento = intento.
    toUpperCase()
    return intento 
}

function terminar(mensaje){
    BOTON.disabled = true; 
    let contenedor = document.
    getElementById('guesses');
    contenedor.innerHTML = mensaje; 
}





