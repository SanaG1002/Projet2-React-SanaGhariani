

class PeopleService {

    constructor() { }

	url = "https://swapi.dev/api/people/";

	async getPeoples() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return (await response.json()).results;
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getPeopleWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}

	getPeopleIdFromUrl(url) {
		return url.match(/\d+/).join("");
	}

	getPeopleUrlFromId(id) {
		return this.url + id + "/";
	}

	async getPeopleById(id) {
		const url = this.getPeopleUrlFromId(id);
		return await this.getPeopleWithReturnedUrl(url);
	}
}

export default PeopleService;