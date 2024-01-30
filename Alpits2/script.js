document.querySelector('.buttonIngreso-Espalda-Ingresar').addEventListener('click', Ingresar);
document.querySelector('.buttonIngreso-Espalda-Registrarse').addEventListener('click', Registrarse);
window.addEventListener('resize', ModAncho);


let divEspIng = document.querySelector('.divIngreso-Espalda-Ingresar');
let divEspReg = document.querySelector('.divIngreso-Espalda-Registrarse');
let IngFre = document.querySelector('.divIngreso-Frente');
let formIng = document.querySelector('.divIngreso-Frente-Ingresar');
let formReg = document.querySelector('.divIngreso-Frente-Registrarse');

function ModAncho(){
    if(window.innerWidth > 850){
        divEspIng.style.display = 'block';
        divEspReg.style.display = 'block';
    }else{
        divEspReg.style.display = 'block';
        divEspReg.style.opacity = '1';
        divEspIng.style.display = 'none';
        formIng.style.display = 'block';
        formReg.style.display = 'none';
        IngFre.style.left = '0'
    }
}

function Ingresar(){
    if(window.innerWidth > 850){
        formReg.style.display = 'none';
        IngFre.style.left = '10px';
        formIng.style.display = 'block';
        divEspReg.style.opacity = '1';
        divEspIng.style.opacity = '0';
    }else{
        formReg.style.display = 'none';
        IngFre.style.left = '0';
        formIng.style.display = 'block';
        divEspReg.style.display = 'block';
        divEspIng.style.display = 'none';
    }
}

function Registrarse(){
    if(window.innerWidth > 850){
        formReg.style.display = 'block';
        IngFre.style.left = '410px';
        formIng.style.display = 'none';
        divEspReg.style.opacity = '0';
        divEspIng.style.opacity = '1';
    }else{
        formReg.style.display = 'block';
        IngFre.style.left = '0';
        formIng.style.display = 'none';
        divEspReg.style.display = 'none';
        divEspIng.style.display = 'block';
        divEspIng.style.opacity = '1';
    }
}