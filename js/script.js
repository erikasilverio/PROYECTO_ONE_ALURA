const textoEntrada = document.getElementById('textoEntrada');
const textoResultado = document.getElementById('textoResultado');
const cifrarBtn = document.getElementById('cifrarBtn');
const descifrarBtn = document.getElementById('descifrarBtn');
const copiarBtn = document.getElementById('copiarBtn');

function encriptar() {
    let texto = textoEntrada.value;
    let textoCifrado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char.match(/[a-z]/)) {
            let codigoChar = char.charCodeAt(0);
            let nuevoCodigo = ((codigoChar - 97 + 3) % 26) + 97;
            textoCifrado += String.fromCharCode(nuevoCodigo);
        } else {
            textoCifrado += char;
        }
    }

    textoResultado.value = textoCifrado;
}

function desencriptar() {
    let texto = textoEntrada.value;
    let textoDescifrado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char.match(/[a-z]/)) {
            let codigoChar = char.charCodeAt(0);
            let nuevoCodigo = ((codigoChar - 97 - 3 + 26) % 26) + 97;
            textoDescifrado += String.fromCharCode(nuevoCodigo);
        } else {
            textoDescifrado += char;
        }
    }

    textoResultado.value = textoDescifrado;
}

function validarTexto(texto) {
    return /^[a-z\s]*$/.test(texto);
}

cifrarBtn.addEventListener('click', () => {
    if (validarTexto(textoEntrada.value)) {
        encriptar();
    } else {
        alert("El texto contiene mayúsculas o caracteres especiales no permitidos.");
    }
});

descifrarBtn.addEventListener('click', () => {
    if (validarTexto(textoEntrada.value)) {
        desencriptar();
    } else {
        alert("El texto contiene mayúsculas o caracteres especiales no permitidos.");
    }
});

copiarBtn.addEventListener('click', () => {
    textoResultado.select();
    document.execCommand('copy');
});
