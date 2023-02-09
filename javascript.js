const logoSpotify = document.querySelector('header#cabecalho #div-interna-cabecalho img');
const logoSpotify2 = document.querySelector('#cabecalho-oculto-interno img');
const cabecalhoOculto = document.querySelector('header#cabecalho .cabecalho-oculto');
const botaoMenuEscondido = document.querySelector('#cabecalho-oculto-interno #botao-menu-escondido');
const tracos = document.querySelectorAll('#cabecalho-oculto-interno #botao-menu-escondido span');

const [t1, t2, t3] = tracos;

document.addEventListener('click', e => {
    const el = e.target;

    if(el === logoSpotify || el === logoSpotify2){
        scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    if(el === botaoMenuEscondido || el === t1 || el === t2 || el === t3){
        t1.classList.toggle('traco1X');
        t2.classList.toggle('traco2X');
        t3.classList.toggle('traco3X');
        cabecalhoOculto.classList.toggle('menu-desocultado');
    }
})