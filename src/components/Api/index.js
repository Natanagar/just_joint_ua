import axios from 'axios';
import store from '../../store/index';
import { Apikey } from './keydata';


class Api {
	constructor(endpoint, clientId) {
		this.clientId = clientId;
		this.endpoint = endpoint;
	}
	//fetch tracks from Spotify
	fetchTracksFromSpotify = async (endpoint) => {
		const tokenSpotify = store.getState().appReducer.token;
		const headers = {
			Authorization: `Bearer ${tokenSpotify}`
		};

		console.log(endpoint, headers);
		return await axios.get(
			'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=20&include_groups=album,single,compilation,appears_on',
			{ headers }
		);
	};
}

export default Api;

