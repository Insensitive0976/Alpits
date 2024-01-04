let imenu = document.getElementById('iMenu')
let section = document.querySelector('section')

imenu.onclick = function(){
    let widthA = 0
    let widthS = '46vw'
    let aside3 = document.getElementById('aside3')
    if(aside3.clientWidth == '0'){
        widthA=aside3.scrollWidth;
    }
    else{
        widthS='71vw'
    }
    aside3.style.width = widthA+'px';
    section.style.width = widthS;
}