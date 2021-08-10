const cambioModo = document.getElementById("mode-light");
const colorCuerpo = document.getElementById("cuerpo");
 const alLado = document.getElementById("panel")
const modoClaroOscuro = () => {
    colorCuerpo.classList.toggle("oscura");
    alLado.classList.toggle("oscura");
}

/* cambio de imagen mediante una funcion */ 
// declaro las variables con los elementos llamados por su Id desde HTML
const CambioUrl = document.getElementById("inputurl");
const imagenResul = document.getElementById ("imagenbuscar");
// declaro una funcion la cual iguale la variable de imagen. lo que quiero modificar = al nuevo valor.value;
CambioUrl.oninput = ()=>{
    imagenResul.src = CambioUrl.value;
}
/* ---------- Todos los filtros de inputs [type=Range]--------------*/
const brillos = document.getElementById("idbrillo");
const opacidades = document.getElementById("idopacidad");
const contrastes = document.getElementById("idcontraste");
const desenfoque = document.getElementById("id-desenfoque");
const enGris = document.getElementById("id-greyscale")
const sepiaScale = document.getElementById("id-sepia");
const difuminar = document.getElementById ("id-hue")
const saturacion = document.getElementById ("id-saturacion");
const negativos = document.getElementById("id-negativo");

// hasta la linea 29 se llaman a todos los id contenedores de los input[type:range]
const filtrosDeImagen= ()=>{
    imagenResul.style.filter= `brightness(${ brillos.value })
        opacity(${opacidades.value})
        contrast(${contrastes.value}%)
        blur(${desenfoque.value}px)
        grayScale(${enGris.value}%)
        sepia(${sepiaScale.value}%)
        saturate(${saturacion.value}%)
        invert(${negativos.value})
        hue-rotate(${difuminar.value})
        `; 
        
}
//declaro una funcion la cual solo la primer linea llame al elemento a modificar con los filtros mediante el uso de backticks ej:
// img.style.filter = [hasta aca solo llame al elemento a modificar ]
//lo ponemos igualado a los estilos entre parentesis ()-- el signo de concatenar $--- y entre las llaves el nombre de la variable.value
// si el nombre del filtro lleva porcentajes o grados se deben declarar cuando se cierra la llave y antes de cerrar el parentesis -- es decir en medio "}%)"
// una vez llamados todos los filtros a utilizar se coloca al final de todo el backticks para cerrar los elementos 
brillos.addEventListener("change",filtrosDeImagen);
opacidades.addEventListener("change",filtrosDeImagen);
contrastes.addEventListener("change",filtrosDeImagen);
desenfoque.addEventListener("change",filtrosDeImagen);
enGris.addEventListener("change",filtrosDeImagen);
sepiaScale.addEventListener("change",filtrosDeImagen);
difuminar.addEventListener("change",filtrosDeImagen);
saturacion.addEventListener("change",filtrosDeImagen);
negativos.addEventListener("change",filtrosDeImagen);

//luego de eso, llamamos uno por uno a los inputs con el nombre de su variable correspondiente
//ej = "variable.addEventListener("evento",funcion);"


/*----------- cambio de selectores ------------




/*------------------- cambio de secciones -------------------*/
const imagenEncabezado = document.getElementById("imagenencabezado");
imagenEncabezado.addEventListener("click",clickBotonImagen);

const textoEncabezado = document.getElementById("textoencabezado")
const seccionImagen = document.getElementById("section-panel-img")

function clickBotonImagen (){
    const seccionImagen = document.getElementById("section-panel-img")
    seccionImagen.classList.toggle("esta-oculto");

}
const clickBotonTexto =()=>{
    const sectionText = document.getElementById("section-panel-text")
    if (sectionText.classList.contains("esta-oculto")) {
       sectionText.classList.remove("esta-oculto");
    }else{
        sectionText.classList.add("esta-oculto");
        estaOculto (
    }
}
textoEncabezado.addEventListener("click",clickBotonTexto);

