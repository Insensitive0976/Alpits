// Menu izquierdo expandible

let IconMenu = document.getElementById('IconMenu');

IconMenu.onclick = function(){
    
    let Aside2 = document.getElementById('Aside-2');
    let Section = document.querySelector('section');
    let SeccionesTamModificable = document.querySelectorAll('.SeccionTamañoModificable');
    let widthAside2 = 0;
    let widthSection = '46vw';
    let fontsize = '0.37vw';

    if(Aside2.clientWidth == '0'){
        widthAside2=Aside2.scrollWidth;
    }

    else{
        widthSection='71vw';
        fontsize='0.47vw';
    }

    Aside2.style.width = widthAside2+'px';
    Section.style.width = widthSection;
    SeccionesTamModificable.forEach(SeccionTamModificable => {
        SeccionTamModificable.style.fontSize = fontsize;
    })
}


// Menu de perfil en menu izquierdo expandible

let A2PerMenEleTitulo = document.querySelectorAll('.Aside-2-Perfil-Menu-Elemento-Titulo');

A2PerMenEleTitulo.forEach(Titulo => {
    Titulo.addEventListener('click', ()=>{
        
        let ElementoClicado = event.currentTarget;
        let ElementosNoClicados = Array.from(A2PerMenEleTitulo).filter(ElementoNoClicado => ElementoNoClicado !== ElementoClicado);
        
        ElementosNoClicados.forEach(ElementoNoClicado => {

            let Espacio = ElementoNoClicado.nextElementSibling;
            let Contenedor = Espacio.firstElementChild;

            Espacio.style.height = '0';
            Contenedor.style.height = '0';
            Contenedor.style.width = '0';
            ElementoNoClicado.style.backgroundColor = '';
            ElementoNoClicado.style.color = '';
            ElementoNoClicado.style.borderRadius = '0'
            ElementoNoClicado.classList.remove('rotacion');

        })
        
        let Espacio = Titulo.nextElementSibling;
        let Contenedor = Espacio.firstElementChild;
        let Contenido = Contenedor.firstElementChild;
        let height = 0;
        let width = 0;
        let color = '';
        let bcolor = '';
        let borderradius = 0;
        
        if(Espacio.clientHeight == '0'){
            height=Contenido.scrollHeight;
            width=Contenido.scrollWidth;
            color = '#ffffff';
            bcolor = '#000000';
            borderradius = '10px 10px 0 0'
            Titulo.classList.add('rotacion');
        }
        else{
            Titulo.classList.remove('rotacion');
        }

        Espacio.style.height = height+'px';
        Contenedor.style.height = height+'px';
        Contenedor.style.width = width+'px';
        Titulo.style.color = color;
        Titulo.style.backgroundColor = bcolor;
        Titulo.style.borderRadius = borderradius;
        
    })
})


// Recientes, links

let SelecInicio = document.querySelectorAll('.SelecInicio')
let SelecPublico = document.querySelectorAll('.SelecPublico')

SelecPublico.forEach(seleccionador => {
    seleccionador.addEventListener('click', function() {
        
        document.getElementById('SelecPublico').click();
        
    })
})

let SelecTodo = document.querySelectorAll('.SelecTodo')

SelecTodo.forEach(seleccionador => {
    seleccionador.addEventListener('click', function() {
        
        document.getElementById('SelecTodo').click();
        
    })
})

let SelecPopular = document.querySelectorAll('.SelecPopular')

SelecPopular.forEach(seleccionador => {
    seleccionador.addEventListener('click', function() {
        
        document.getElementById('SelecPopular').click();
        
    })
})

let SelecArte = document.querySelectorAll('.SelecArte')

SelecArte.forEach(seleccionador => {
    seleccionador.addEventListener('click', function() {
        
        document.getElementById('SelecArte').click();
        
    })
})

let SelecEspecial = document.querySelectorAll('.SelecEspecial')

SelecEspecial.forEach(seleccionador => {
    seleccionador.addEventListener('click', function() {
        
        document.getElementById('SelecEspecial').click();
        
    })
})

let SelecNovedades = document.querySelectorAll('.SelecNovedades')

SelecNovedades.forEach(seleccionador => {
    seleccionador.addEventListener('click', function() {
        
        document.getElementById('SelecNovedades').click();
        
    })
})

let SelecOtros = document.querySelectorAll('.SelecOtros')

SelecOtros.forEach(seleccionador => {
    seleccionador.addEventListener('click', function() {
        
        document.getElementById('SelecOtros').click();
        
    })
})

// Aviso de seccion

let Xs = document.querySelectorAll('.Section-Seccion-Aviso-X');

Xs.forEach(x => {
    x.addEventListener('click', ()=>{

        let Avisos = document.querySelectorAll('.Section-Seccion-Aviso');
        let Informacion = document.querySelectorAll('.Section-Seccion-Aviso-Aviso');

        Informacion.forEach(info => {
            info.style.display = 'none';
        })
        Xs.forEach(x => {
            x.style.display = 'none';
        })
        Avisos.forEach(aviso => {
            aviso.style.display = 'none';
        })
        
    })
})


// Menu de secciones

const MenuSeccion = document.querySelectorAll('[data-target]')
const MenuContenido = document.querySelectorAll('[data-content]')

MenuSeccion.forEach(seleccionado => {

    seleccionado.addEventListener('click', () => {

        MenuSeccion.forEach(seleccionador => {
            seleccionador.classList.remove('SelectorActivo');
        })
        MenuContenido.forEach(contenido => {
            contenido.classList.remove('SeccionActiva');
        })

        seleccionado.classList.add('SelectorActivo');
        const t = document.querySelector(seleccionado.dataset.target);
        t.classList.add('SeccionActiva');

    })

})


// Menu de mensajes expandible

let A3MenCabeza = document.getElementById('Aside-3-Mensajes-Cabeza');

A3MenCabeza.onclick = function(){

    let heightCuerpo = 0;
    let Cuerpo = document.getElementById('Aside-3-Mensajes-Cuerpo');
    let heightAnuncio = 0;
    let Anuncio = document.getElementById('Aside-3-ContenedorAnuncios');

    if(Cuerpo.clientHeight == '0'){
        heightCuerpo=Cuerpo.scrollHeight;
    }

    if(Anuncio.clientHeight == '0'){
        heightAnuncio = '48vh';
    }

    Anuncio.style.height = heightAnuncio;
    Cuerpo.style.height = heightCuerpo+'px';
}