// Selección de elementos del DOM 

const texto_escrito = document.getElementById("texto-introducido");
const espacio_texto = document.querySelector(".contenedor-muestra");
const espacio_texto_responsivo = document.querySelector(".contenedor-muestra-responsivo");
const boton_encriptar = document.getElementById("boton-encriptar");
const boton_desencriptar = document.getElementById("boton-desencriptar");

// Función para encriptar el texto 

function encriptar_texto() {
    const texto_original = texto_escrito.value;
    let texto_encriptado = "";

    for (let i = 0; i < texto_original.length; i++) {
        const letra = texto_original[i];
        let letra_encriptada = letra;

        if (letra.toLowerCase() === 'a') {
            letra_encriptada = 'ai';
        } else if (letra.toLowerCase() === 'e') {
            letra_encriptada = 'enter';
        } else if (letra.toLowerCase() === 'i') {
            letra_encriptada = 'imes';
        } else if (letra.toLowerCase() === 'o') {
            letra_encriptada = 'ober';
        } else if (letra.toLowerCase() === 'u') {
            letra_encriptada = 'ufat';
        }

        texto_encriptado += letra_encriptada;
    }

    texto_escrito.value = texto_encriptado;
}

// Función para desencriptar texto 

function desencriptar_texto() {
    const texto_original = texto_escrito.value;
    let texto_desencriptado = "";

    for (let i = 0; i < texto_original.length; i++) {
        const letra = texto_original[i].toLowerCase();

        if (letra === 'a' && texto_original[i + 1] === 'i') {
            texto_desencriptado += 'a';
            i++;  
        } else if (letra === 'e' && texto_original[i + 1] === 'n' && texto_original[i + 2] === 't' && texto_original[i + 3] === 'e' && texto_original[i + 4] === 'r') {
            texto_desencriptado += 'e';
            i += 4;  
        } else if (letra === 'i' && texto_original[i + 1] === 'm' && texto_original[i + 2] === 'e' && texto_original[i + 3] === 's') {
            texto_desencriptado += 'i';
            i += 3;  
        } else if (letra === 'o' && texto_original[i + 1] === 'b' && texto_original[i + 2] === 'e' && texto_original[i + 3] === 'r') {
            texto_desencriptado += 'o';
            i += 3;  
        } else if (letra === 'u' && texto_original[i + 1] === 'f' && texto_original[i + 2] === 'a' && texto_original[i + 3] === 't') {
            texto_desencriptado += 'u';
            i += 3;  
        } else {
            texto_desencriptado += letra;
        }
    }

    texto_escrito.value = texto_desencriptado;
}

// Función para agregar el texto encriptado al contenedor

function agregar_texto() {

    // Estilos para el contenedor no responsivo 
    
    if (innerWidth > 1024) {
        espacio_texto.style.display = "block";
        espacio_texto.style.textAlign = "left";
        espacio_texto.style.fontSize = "20px";
        espacio_texto.style.color = "#0A3871";
        espacio_texto.textContent = texto_escrito.value;
    }

    // Estilos para el contenedor responsivo

    else {
        espacio_texto_responsivo.style.display = "block";
        espacio_texto_responsivo.style.textAlign = "left";
        espacio_texto_responsivo.style.fontSize = "20px";
        espacio_texto_responsivo.style.color = "#0A3871";
        espacio_texto_responsivo.textContent = texto_escrito.value;
    }

    texto_escrito.value = "";
}

// Agregando eventos 

boton_encriptar.addEventListener("click", function() {
    encriptar_texto();
    agregar_texto();
});

boton_desencriptar.addEventListener("click", function() {
    desencriptar_texto();
    agregar_texto();
})
