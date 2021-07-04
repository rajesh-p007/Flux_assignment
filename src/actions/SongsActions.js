import Dispatcher from '../dispatcher/Dispatcher';
import SongsApi from '../data/SongsApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class SongActions {
    static addSong(song) {
        let newSong = SongsApi.saveSong(song);
        console.log("Dispatching Add Song ...");
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_SONG,
            songs: newSong
        });
    }
}