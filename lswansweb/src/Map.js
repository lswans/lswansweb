import React, {useRef, useEffect} from 'react';
import {loadModules} from 'esri-loader';

function Map(){
    const MapEl=useRef(null);

    useEffect(
        ()=>{
            let view;
        
        loadModules(["esri/views/MapView", "esri/WebMap"], {
            css:true
        }).then(([MapView, WebMap])=>{
            //esriConfig.apiKey = "AAPK79517c74492d4a349df1cb26bb2a3b59Yoh6_6lViG5J9WRb7vEGwqjl6LYb95mt6pKfrpNs7WXlIkDEcrJW55J7y_o5fBoG";
            const webmap = new WebMap({
                basemap:'topo-vector'
            })
            view= new MapView({
                map:webmap,
                center:[-118.805, 34.027],
                zoom:0,
                //use the ref as a container
                container:MapEl.current
            })
        })  
        return()=>{
            if(!!view){
                view.destroy();
                view=null;
            }
        }
    })
    return(
            <div>
                <h1 style={{alignSelf:"center"}}>My Map</h1>
                <div style={{height:400, width:600, paddingInline: 300}} ref={MapEl}>
                    <div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Map;