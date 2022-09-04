
class VehiclesService {

	constructor() { }

	url = "https://swapi.dev/api/vehicles/";

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

	getVehicleIdFromUrl(url) {
		return url.match(/\d+/).join("");
	}

	getVehicleUrlFromId(id) {
		return this.url + id + "/";
	}

	async getVehicleById(id) {
		const url = this.getVehicleUrlFromId(id);
		return await this.getVehicleWithReturnedUrl(url);
	}
}

export default VehiclesService;