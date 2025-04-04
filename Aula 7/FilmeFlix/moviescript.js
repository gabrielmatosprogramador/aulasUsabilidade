// TMDB Movie API
const API_KEY = "api_key=ec332d19e6fed067df0160ce34067cc4"; // API Key
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE_PARAM = "&language=pt-BR"; // Parâmetro para idioma
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const MOVIE_URL = `${BASE_URL}/movie/`; // URL para buscar detalhes do filme

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const movieDetailsDiv = document.getElementById("movieDetails");

fetch(`${MOVIE_URL}${movieId}?${API_KEY}${LANGUAGE_PARAM}`)
    .then((res) => res.json())
    .then((data) => {
        if (data) {
            const releaseYear = data.release_date ? data.release_date.split('-')[0] : 'N/A';
            const creditsUrl = `${MOVIE_URL}${movieId}/credits?${API_KEY}${LANGUAGE_PARAM}`;
            fetch(creditsUrl)
                .then((res) => res.json())
                .then((creditsData) => {
                    const director = creditsData.crew.find((crew) => crew.job === "Director");
                    movieDetailsDiv.innerHTML = `
                    <div class="detalhes">
                        <h1>${data.title} - Ano: ${releaseYear}</h1>
                        <img src="${IMAGE_URL}${data.poster_path}" alt="Poster do filme">
                        <p>Sinopse: ${data.overview}</p>
                        <p>Nota no TMDB: ${data.vote_average}/10</p>
                        <p>Diretor: ${director ? director.name : "Não encontrado"}</p>
                    </div>
                    `;
                })
                .catch((error) => console.error("Erro ao buscar créditos do filme:", error));
        } else {
            movieDetailsDiv.innerHTML = "Filme não encontrado.";
        }
    })
    .catch((error) => console.error("Erro ao buscar detalhes do filme:", error));
