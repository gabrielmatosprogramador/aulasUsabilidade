const form = document.getElementById('formMusicas');
const inputMusica = document.getElementById('musica');
const listaMusicas = document.getElementById('listaMusicas');
const bntTocar = document.getElementById('tocarMusica');
const tocandoDiv = document.getElementById('tocando');
const musicas = [];

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário.

    const musicaDigitada = inputMusica.value.trim();
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
        const li = document.createElement('li');
        li.textContent = musica;
        listaMusicas.appendChild(li);
    })
}

bntTocar.addEventListener('click', function() {
    if (musicas.length === 0) {
        tocandoDiv.style.display = 'none';
        alert('Adicione músicas à lista antes de tocar!');
        return;
    }

    const musicaTocando = musicas.shift();
    atualizarLista();
    tocandoDiv.innerHTML = `Tocando a música:<br>${musicaTocando}`;
    tocandoDiv.style.display = 'block';
    
});