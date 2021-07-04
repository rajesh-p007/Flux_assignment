import Songs from './Songs.json';
import _ from 'lodash';

let currentID = 5;
let _song

export default class SongsApi {

	static getAllSongs() {
        _song = Songs.data
		return _song;
	}

	static saveSong(song) {
		currentID = currentID + 1;
    song.id = currentID;
    Songs.data.push(song);
    _song = song
		return _song;
	}
}
