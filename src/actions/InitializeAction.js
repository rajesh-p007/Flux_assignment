import Dispatcher from '../dispatcher/Dispatcher';
import SongsApi from '../data/SongsApi';
import Songs from "../data/Songs.json";
import * as ActionTypes from '../constants/ActionTypes';

export default class InitializeActions {
    static initSongs() {
        const initialSongs = SongsApi.getAllSongs();
        console.log(initialSongs)
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            songs: initialSongs
        });
    }
}
