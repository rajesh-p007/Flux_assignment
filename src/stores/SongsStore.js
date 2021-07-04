import Dispatcher from '../dispatcher/Dispatcher';
import * as ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';
import _ from 'lodash';

let _songs = [];

class SongsStoreClass extends EventEmitter {
    addChangeListener(cb) {
      this.on('change', cb);
    }

    removeChangeListener(cb) {
      this.removeListener('change', cb);
    }

    emitChange() {
      this.emit('change');
    }

    getAllSongs() {
     console.log(_songs)
      return _songs;
    }
}

let SongsStore = new SongsStoreClass();
export default SongsStore;

Dispatcher.register(action => {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _songs = action.songs;
            SongsStore.emitChange();
          break;
        case ActionTypes.ADD_SONG:
            _songs.push(action.songs);
            SongsStore.emitChange();
            break;
        default:
    }
});
