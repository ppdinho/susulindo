document.getElementById('onoff').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = 'black'; // Cor para quando o botão está ligado
        document.body.style.color = '#black'; // Cor do texto
    } else {
        document.body.style.backgroundColor = '#000000'; // Cor para quando o botão está desligado
        document.body.style.color = '#white'; // Cor do texto
    }
});
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Define o tempo de carregamento em milissegundos (5 segundos)
    const loadingTime = 5000;

    // Exibe o loader por 5 segundos
    setTimeout(() => {
        loader.style.display = 'none'; // Oculta o loader
        content.style.display = 'block'; // Exibe o conteúdo
    }, loadingTime);
});
function black2(){
    var black3=document.body
    black3.classList.toggle("Toogle")
}
 


