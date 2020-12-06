import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import { viewport } from './mapContentData';
import '../../css/map/mapContent.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const jakarta = [-6.3011549485829645, 106.89535325127905]
const surabaya = [-7.278832462667254, 112.80388122435733]
const padang = [-0.9605767588034071, 100.68352896597337]
const balikpapan = [-1.1912886979262949, 116.59079170048953]
const lombok = [-8.64464138148961, 116.30856533440384]
const makasaar = [-5.098902613381584, 119.46578643564058]
const ambon = [-3.655686424169043, 128.19098150762585]
const timika = [-4.533412745036643, 136.88350551078696]

export const MapContent = () => (
    <Row noGutters>
        <Col>
            <div className="map-content">
                <Map viewport={viewport} className="map-container">
                    <LayersControl position="topright">
                        <LayersControl.BaseLayer checked name="OpenStreetMap">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="OpenStreetMap Black and White">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.Overlay name="Marker with popup">
                        </LayersControl.Overlay>
                    </LayersControl>
                    <Marker position={jakarta}>
                        <Popup>
                            A safe zone. <br /> Includes medication kits.
                        </Popup>
                    </Marker>
                    <Marker position={surabaya}>
                        <Popup>
                            A safe zone. <br /> Includes weapons.
                        </Popup>
                    </Marker>
                    <Marker position={padang}>
                        <Popup>
                            A safe zone. <br /> Includes medication kits.
                        </Popup>
                    </Marker>
                    <Marker position={balikpapan}>
                        <Popup>
                            A safe zone. <br /> Does not have any utilities.
                        </Popup>
                    </Marker>
                    <Marker position={lombok}>
                        <Popup>
                            A safe zone. <br /> Includes medication kits and food.
                        </Popup>
                    </Marker>
                    <Marker position={makasaar}>
                        <Popup>
                            A safe zone. <br /> Includes medication kits and food.
                        </Popup>
                    </Marker>
                    <Marker position={ambon}>
                        <Popup>
                            A safe zone. <br /> Includes medication kits and food.
                        </Popup>
                    </Marker>
                    <Marker position={timika}>
                        <Popup>
                            A safe zone. <br /> Includes medication kits and food.
                        </Popup>
                    </Marker>
                </Map>
            </div>
        </Col>
    </Row>
);
