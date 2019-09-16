$( document).ready( function() {
  var countriesVisited = [ 'AT', 'BE', 'CZ', 'CH', 'FR', 'DE', 'HU', 'IT', 'LI', 'LU', 'NL', 'SK', 'SI', 'GB', 'ES', 'IN', 'IS', 'NO'];
  console.log( "doc is ready...");
  $( ".back-to-top").hide();

  // Funktion für das Scroll-Verhalten
  $( function () {
    $( window).scroll(function () {
      if ( $(this).scrollTop() > 100) { // Wenn 100 Pixel gescrolled wurde
        $( '.back-to-top').fadeIn();
      } else {
        $( '.back-to-top').fadeOut();
      }
    });

    $( '.back-to-top').click(function ( event) { // Klick auf den Button
      event.preventDefault();
      $( 'body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

  var map = AmCharts.makeChart( "mapdiv",{
    type: "map",
    theme: "dark",
    projection: "mercator",
    panEventsEnabled : true,
    backgroundColor : "#535364",
    backgroundAlpha : 1,
    zoomControl: {
      zoomControlEnabled : true
    },
    dataProvider : {
    map : "worldHigh",
    getAreasFromMap : true,
    areas :
    [
      {
        "id": "AT",
        "showAsSelected": true
      },
      {
        "id": "BE",
        "showAsSelected": true
      },
      {
        "id": "CZ",
        "showAsSelected": true
      },
      {
        "id": "FR",
        "showAsSelected": true
      },
      {
        "id": "DE",
        "showAsSelected": true
      },
      {
        "id": "HU",
        "showAsSelected": true
      },
      {
        "id": "IT",
        "showAsSelected": true
      },
      {
        "id": "LI",
        "showAsSelected": true
      },
      {
        "id": "LU",
        "showAsSelected": true
      },
      {
        "id": "NL",
        "showAsSelected": true
      },
      {
        "id": "SK",
        "showAsSelected": true
      },
      {
        "id": "SI",
        "showAsSelected": true
      },
      {
        "id": "ES",
        "showAsSelected": true
      },
      {
        "id": "GB",
        "showAsSelected": true
      },
      {
        "id": "IN",
        "showAsSelected": true
      },
      {
        "id": "NO",
        "showAsSelected": true
      },
      {
        "id": "IS",
        "showAsSelected": true
      },
      {
        "id": "CH",
        "showAsSelected": true
      }
    ]
    },
    areasSettings : {
      autoZoom : true,
      color : "#B4B4B7",
      colorSolid : "#84ADE9",
      selectedColor : "#84ADE9",
      outlineColor : "#666666",
      rollOverColor : "#9EC2F7",
      rollOverOutlineColor : "#000000"
    },
    listeners: [{
       event: "clickMapObject",
       method: function(e) {

         // Ignore any click not on area
         if (e.mapObject.objectType !== "MapArea")
           return;

         var area = e.mapObject;
         if( countriesVisited.indexOf( area.id) > -1) {
           var nm = area.title.toLowerCase();
           document.location.href = '/travel/' + nm + '.html';
         }
       }
     }]
  });

  console.log( "map is...", map);


});
