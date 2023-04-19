import { useEffect, useState } from "react"
import { Circle, FeatureGroup, LayerGroup, LayersControl, MapContainer, Marker, Polygon, Polyline, Popup, TileLayer } from "react-leaflet"
import style from "./MapView.module.css";
import './react-leaflet.css';
import 'leaflet/dist/leaflet.css';
import { useDispatch, useSelector } from "react-redux";
import { getAffecteds, getAffectedsByEvents } from "../../redux/Actions/actions";
import { MarkerIcon } from "./Markert-Icon";
import { FaBuilding, FaFilter, FaFireAlt, FaInfoCircle, FaRoad, FaHouseDamage } from "react-icons/fa";
import {CiStreamOn} from "react-icons/ci";

export const MapView = () => {
    const dispatch = useDispatch();
    const affecteds = useSelector((state)=>state.affecteds);
    const groups = useSelector((state)=>state.affectedsGroups);
    const affectedsData = Object.values(affecteds);
    let polyline = affectedsData.map((obj)=>obj.location.split(",")).sort((a,b)=> a[0]-b[0]);
    const triangle = polyline.slice(0,3);
    const triagleBig = polyline.splice(0,polyline.length);
    let latitudMedia = affectedsData.length>0 && (affectedsData.map((obj)=>Number(obj.location.split(",")[0])).reduce((a,b)=>a+b))/affectedsData.length;
    let longitudMedia =affectedsData.length>0 && (affectedsData.map((obj)=>Number(obj.location.split(",")[1])).reduce((a,b)=>a+b))/affectedsData.length;
    console.log(latitudMedia, longitudMedia);
    let zoneA = groups.A.map((group)=>group.location.split(",")).sort((a,b)=> b[1]-a[1]);
    let zoneB = groups.B.map((groups)=>groups.location.split(",")).sort((a,b)=> b[1]-a[1]);
    let zoneC = groups.C.map((groups)=>groups.location.split(",")).sort((a,b)=> b[1]-a[1]);
    let zoneD = groups.D.map((groups)=>groups.location.split(",")).sort((a,b)=> b[1]-a[1]);
    let zoneE = groups.E.map((groups)=>groups.location.split(",")).sort((a,b)=> b[1]-a[1]);
    const [state, setState]=useState({
        currentLocation:[[ "3.4293462", "-76.4692499" ]],
        zoom:12,
    });


    const funcionInit = () => {
        const onUbicacionConcedida = ubicacion => {
            console.log("Tengo la ubicación: ", ubicacion.coords);
            setState({
                ...state,
                currentLocation:[
                    [
                        ubicacion.coords.latitude.toString(),
                        ubicacion.coords.longitude.toString()
                    ]]})

        }

        navigator.geolocation.getCurrentPosition(onUbicacionConcedida);
        handleClick();
    }
    useEffect(()=>{ 
        dispatch(getAffecteds()); 
        dispatch(getAffectedsByEvents());
    },[dispatch]);

    const handleClick=()=>{
        //dispatch(getAffectedsByEvents);
        //zoneA = groups.A.map((group)=>group.location.split(",")).slice(0,5);
        console.log(zoneA,"HOLAAAAAAAAAA");
    }

    return(
        <div className={style.mapContainer} onClick={funcionInit}>
            <MapContainer center={state.currentLocation[0]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution={`© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors`}
                />
                <LayersControl position="topright">
                    <LayersControl.Overlay name="Mi ubicación   ">
                        <Marker position={state.currentLocation[0]} icon={MarkerIcon}>
                            <Popup className={style.pre}>
                                <pre>
                                    Lat: {state.currentLocation[0][0].substring(0,7)}, 
                                    Long: {state.currentLocation[0][1].substring(0,7)},
                                    name:{"Your ubication"}
                                </pre>
                            </Popup>
                        </Marker>
                    </LayersControl.Overlay>
                  
                    <LayersControl.Overlay name="radio de 2km">
                        <Circle center={state.currentLocation[0]} pathOptions={{color:"blue"}} radius={2000}/>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Afectados">
                        <LayerGroup>
                        {affectedsData.map((currentLocation,index)=>(
                            // console.log(currentLocation.location, index)
                            <div key={index}>
                                <Marker position={currentLocation.location.split(",")} icon={MarkerIcon}>
                                    <Popup className={style.pre}>
                                        <pre>
                                            Latitude: {currentLocation.location.split(",")[0]}, 
                                            Longitude: {currentLocation.location.split(",")[1]},
                                            name: {currentLocation.name}
                                        </pre> 
                                    </Popup>
                                </Marker>
                            </div>
                        ))}
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Zona afectada">
                        <Polygon pathOptions={{color:"red"}} positions={triagleBig}/>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="A - Zona afectada por incendio">
                        <FeatureGroup pathOptions={{color:"orangered"}}>
                            <Popup> <FaFireAlt/> {`${zoneD.length} personas afectadas por incendio`}</Popup>
                            <Polygon positions={zoneA}></Polygon>
                        </FeatureGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="B - Zona afectada por daños estructurales">
                        <FeatureGroup pathOptions={{color:"gray"}}>
                            <Popup><FaBuilding/> {`${zoneB.length} personas afectadas por daños estructurales`}</Popup>  
                            <Polygon positions={zoneB}></Polygon>
                        </FeatureGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="C - Zona afectada por interrupcion de servicios">
                        <FeatureGroup pathOptions={{color:"blue"}}>
                            <Popup><FaInfoCircle/> {`${zoneC.length} personas afectadas por interrupcion de servicios`}</Popup>
                            <Polygon positions={zoneC}></Polygon>
                        </FeatureGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="D - Zona afectada por derrumbe en la via">
                        <FeatureGroup pathOptions={{color:"darkred"}}>
                            <Popup><FaRoad/> {`${zoneD.length} personas afectadas por derrumbe vial`}</Popup>
                            <Polygon positions={zoneD}></Polygon>
                        </FeatureGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="E - Zona afectada por replicas sismicas">
                        <FeatureGroup pathOptions={{color:"darkgoldenrod"}}>
                            <Popup><FaHouseDamage/> {`${zoneE.length} personas afectadas por replicas sismicas`}</Popup>
                            <Polygon positions={zoneE}></Polygon>
                        </FeatureGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Area radial afectada - 10km">
                        <Circle center={[latitudMedia,longitudMedia]} pathOptions={{color:"green"}} radius={10000}/>
                    </LayersControl.Overlay>
                </LayersControl>
                
                <Polyline pathOptions={{color:"green"}} positions={polyline}/>
                <Polygon pathOptions={{color:"yellow"}} positions={triangle}/>
                

            </MapContainer>
        </div>
    )
}
