class StarshipService {

    constructor() { }

	url = "https://swapi.dev/api/starships/";

	//Décomposition de l'URL
	getStarshipIdFromUrl(url) {
		return url.match(/\d+/).join("");
	}

	//Recomposition de l'URL
	getStarshipUrlFromId(id) {
		return this.url + id + "/";
	}
	
	async getStarships() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return (await response.json()).results;
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getStarshipWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}

	async getStarshipById(id) {
		const url = this.getStarshipUrlFromId(id);
		return await this.getStarshipWithReturnedUrl(url);
	}
}

export default StarshipService;