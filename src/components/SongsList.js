import React from "react";
import { Link } from "react-router-dom";
import SongsApi from "../data/SongsApi";
import Songs from "../data/Songs.json";
import SongsStore from "../stores/SongsStore"
import InitializeActions from '../actions/InitializeAction';

export default class AllSongs extends React.Component{

    constructor(props){
        super(props)

        this._onChange = this._onChange.bind(this);

        this.state = {
            data: SongsStore.getAllSongs()
        }
    }

    componentDidMount() {
        SongsStore.addChangeListener(this._onChange);
        InitializeActions.initSongs(); 
    }

    _onChange() {
        this.setState({ data: SongsStore.getAllSongs() });
    }

      render(){
          return(
                <div>
                <h3>All Songs element</h3>
                <table>
                    <tbody>
                    <tr>
                        <th>Movie</th>
                        <th>Title</th>
                        <th>Song Length</th>
                        <th>Singer</th>
                    </tr>
                    </tbody>
                {
                    this.state.data.map(data => {
                        let path=`/songinfo/${data.id}`
                        return(
                        <tbody key={data.id}>
                        <tr>
                        <td>{data.Movie}</td>
                        <td><Link to={path}>{data.Title}</Link></td>
                        <td>{data.Title}</td>
                        <td>{data.SongLength}</td>
                        <td>{data.Singer}</td>
                        </tr>
                        </tbody>
                        )}
                    )
                }
                </table>
                <div style={{paddingTop:"30px"}}>
                <button ><Link to="/addsong">AddSong</Link></button>
                </div>
                </div>
                
          )
            }

}