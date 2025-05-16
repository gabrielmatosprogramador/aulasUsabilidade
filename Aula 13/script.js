const form = document.getElementById('formMusicas');
const inputMusica = document.getElementById('musica');
const listaMusicas = document.getElementById('listaMusicas');
const bntTocar = document.getElementById('tocarMusica');
const tocandoDiv = document.getElementById('tocando');
const musicas = [];

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário.

    const musicaDigitada = inputMusica.ariaValueMax.trim();
    if (musicaDigitada === '') {
        alert('Digite o nome da música!');
        return;
    }

    musicas.push(musicaDigitada);
    atualizarLista();
    inputMusica.value = '';
    inputMusica.focus();
});

function atualizarLista() {
    listaMusicas.innerHTML = '';
    musicas.forEach(function(musica) {
        const li = documento.createElement('li');
        li.textContent = musica;
        listaMusicas.appendChild(li);
    })
}