/*'use strict';

class Gmap extends HTMLIFrameElement{
    constructor(latitude,longitude,zoom,height,width){
        super();
        this.lat = latitude.toString();
        this.lon = longitude.toString();
        this.zoomv = zoom;
        this.API_KEY = "**API_KEY**"; //PUT YOUR API KEY HERE
        this.setAttribute("src",this.getSrc());
        this.setAttribute("width",width);
        this.setAttribute("height",height);
    }
    getSrc(){
        return "https://www.google.com/maps/embed/v1/view?key=" + this.API_KEY + "&center=" + this.lat + "," + this.lon + "&zoom=" + this.zoomv;
    }

}

customElements.define( 'g-map', Gmap, { extends: 'iframe' } );*/

//DEFAULT VALUES TO MAKE THE MAP WORK AT THE beginning
var latitude = 4.624335;
var longitude = -74.063644;

class Gmap{
  constructor(lat, lon){
    console.log("si funciona");
    console.log("lat is: " + lat);
    console.log("lon is: " + lon);
    latitude = lat;
    longitude = lon;
    initMap();
  }
}

function initMap(){

  console.log("lat in initMap() is: " + latitude);
  //.log("lon is : " + longitude );

  //creating options wanted for the map
  var location = {lat: latitude, lng: longitude};
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom:15,
      center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
