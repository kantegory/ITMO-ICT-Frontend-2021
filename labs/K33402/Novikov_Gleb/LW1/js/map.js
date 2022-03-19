mapboxgl.accessToken = '';

const map = new mapboxgl.Map({
    container: 'map',
    zoom: 13.1,
    center: [30.200033, 59.693088],
    pitch: 60,
    bearing: 90,
    style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
});

map.on('load', () => {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });

    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });

    map.addSource('maine', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                    [
                        [
                            30.195364952087402,
                            59.69608749406739
                        ],
                        [
                            30.195579528808594,
                            59.690294412466386
                        ],
                        [
                            30.200493335723877,
                            59.68884327808766
                        ],
                        [
                            30.204076766967773,
                            59.68873498195637
                        ],
                        [
                            30.210835933685303,
                            59.69244933930508
                        ],
                        [
                            30.201523303985592,
                            59.695979221358364
                        ],
                        [
                            30.19856214523315,
                            59.69626072967372
                        ],
                        [
                            30.195364952087402,
                            59.69608749406739
                        ]
                    ]
                ]
            }
        }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#25d907',
            'fill-opacity': 0.5
        }
    });
    // Add a black outline around the polygon.
    map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'maine',
        'layout': {},
        'paint': {
            'line-color': '#FFFFFF',
            'line-width': 3
        }
    });
});