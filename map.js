'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV5cHJpZ292IiwiYSI6ImNqc280aHdoajBqMzY0NG41ODRwOG0wZnAifQ.9UHLZRigw6UorfQZwQe4uw'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/andreyprigov/cjundmg6paf071fqdrbsjg9aw',
    center: [-66.216,18.173],
    zoom: 7.9
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