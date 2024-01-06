let imenu = document.getElementById('IconMenu')
let section = document.querySelector('section')

imenu.onclick = function(){
    let widthA = 0
    let widthS = '46vw'
    let aside2 = document.getElementById('Aside-2')
    if(aside2.clientWidth == '0'){
        widthA=aside2.scrollWidth;
    }
    else{
        widthS='71vw'
    }
    aside2.style.width = widthA+'px';
    section.style.width = widthS;
}

let mensajescabeza = document.getElementById('Aside-3-Mensajes-Cabeza')

mensajescabeza.onclick = function(){
    let heightMC = 0
    let mensajescuerpo = document.getElementById('Aside-3-Mensajes-Cuerpo')
    let heightA = 0
    let anuncios = document.getElementById('Aside-3-Anuncios')

    if(mensajescuerpo.clientHeight == '0'){
        heightMC=mensajescuerpo.scrollHeight
    }
    if(anuncios.clientHeight == '0'){
        heightA = '48vh'
    }
    anuncios.style.height = heightA;
    mensajescuerpo.style.height = heightMC+'px';
}