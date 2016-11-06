        ymaps.ready(init);
        var myMap, 
            myPlacemark;
        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [60.17, 24.93],
                zoom: 7
            }); 
            
            myPlacemark = new ymaps.Placemark([60.17, 24.93], {
                hintContent: '{Helsinki!',
                balloonContent: 'Столица Финляндии'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }
  