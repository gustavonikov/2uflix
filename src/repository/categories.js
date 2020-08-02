import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
        .then(async (serverResponse) => {
            if (serverResponse.ok) {
                const response = await serverResponse.json();
                return response;
            }

            throw new Error('Não foi possível obter os dados :(');
        });
}

// dar um jeito de criar um arquivo para essa função que fetch e tudo depois dela p fatorar+
function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (serverResponse) => {
            if (serverResponse.ok) {
                const response = await serverResponse.json();
                return response;
            }

            throw new Error('Não foi possível obter os dados :(');
        });
}

export default {
    getAllWithVideos,
    getAll,
};
