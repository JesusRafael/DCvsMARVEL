import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./scss/Api.scss";
class Api extends Component {
 render() {
    const style = {
        left: '50vh',
        right: 'unset',
        bottom: '57px',
        top: 'unset',
        width: '700px',
        height: '325px'
        }
 return (
 
    <div className="api">
        <Map id="div"
          google={this.props.google}
          zoom={11}
          style={style}
          initialCenter={{ lat: 10.9664462, lng: -74.8111543}}>
            <Marker position={{ lat: 11.0131457, lng: -74.8298599}} />
          </Map>
    </div>
 
 );
 }
}
export default GoogleApiWrapper({
 apiKey: 'AIzaSyBgszijQkJmennWDoeElK-ypQQBLfNqaF8'
})(Api);