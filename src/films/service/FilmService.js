
class FilmService {

	constructor() { }


	url = "https://swapi.dev/api/films/";

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

	getFilmIdFromUrl(url) {
		return url.match(/\d+/).join("");
		//return url.split("https://swapi.dev/api/films/")[1].split("/")[0];
	}

	getFilmUrlFromId(id) {
		return "https://swapi.dev/api/films/" + id + "/";
	}
}

export default FilmService;