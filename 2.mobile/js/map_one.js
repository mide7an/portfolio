window.onload = function () {
    var container = document.getElementById('map');
    var options = {
        center: new daum.maps.LatLng(37.43800919778249, 127.00579670885342), /* 위도 경도 */
        level: 2  /* 지도확대 */
    };

    var map = new daum.maps.Map(container, options);

    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

    var markerPosition = new daum.maps.LatLng(37.43800919778249, 127.00579670885342);
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()
    });
}