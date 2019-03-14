'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV5cHJpZ292IiwiYSI6ImNqc280aHdoajBqMzY0NG41ODRwOG0wZnAifQ.9UHLZRigw6UorfQZwQe4uw'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/andreyprigov/cjt7w5w5t1uc81fmgnqud2yil',
    center: [-73.921156,40.615152],
    zoom: 9.5
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})