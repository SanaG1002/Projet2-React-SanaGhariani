class FilmService {

	constructor() { }

	url = "https://swapi.dev/api/films/";

	
	//Décomposition de l'URL
	getFilmIdFromUrl(url) {
		return url.match(/\d+/).join("");
	}
	
	//Recomposition de l'URL
	getFilmUrlFromId(id) {
		return this.url + id + "/";
	}

	async getFilms() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return (await response.json()).results;
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getFilmWithReturnedUrl(url) {
		try {
			console.log(url);
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}

	async getFilmById(id) {
		const url = this.getFilmUrlFromId(id);
		return await this.getFilmWithReturnedUrl(url);
	}
	
}

export default FilmService;