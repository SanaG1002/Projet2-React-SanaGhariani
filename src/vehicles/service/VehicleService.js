class VehiclesService {

	constructor() { }

	url = "https://swapi.dev/api/vehicles/";
	
	//Décomposition de l'URL
	getVehicleIdFromUrl(url) {
		return url.match(/\d+/).join("");
	}
	//Recomposition de l'URL
	getVehicleUrlFromId(id) {
		return this.url + id + "/";
	}
	
	async getVehicles() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return (await response.json()).results;
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getVehicleWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}

	async getVehicleById(id) {
		const url = this.getVehicleUrlFromId(id);
		return await this.getVehicleWithReturnedUrl(url);
	}
}

export default VehiclesService;