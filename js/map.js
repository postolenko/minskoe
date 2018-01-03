ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){   
    myMap = new ymaps.Map("map", {
        center: [57.689833, 41.023741],
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([57.689833, 41.023741], { 
        hintContent: 'Минское', 
        balloonContent: 'Минское'
    }
    // , {
    //     iconLayout: 'default#image',
    //     iconImageHref: 'img/map_marker.png',
    //     iconImageSize: [40, 40],
    //     iconImageOffset: [0, 0]
    // }
    );

    myMap.behaviors
    .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('zoomControl');
    myMap.behaviors.disable(['scrollZoom']);

}