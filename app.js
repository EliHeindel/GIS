require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
  ], function(Map, MapView, Graphic, GraphicsLayer) {
    var map = new Map({
      basemap: "streets-navigation-vector"
    });
  
    var view = new MapView({
      container: "viewDiv", // Reference to the scene div created in step 1
      map: map,
      center: [-111.7896876, 43.8260227], // Longitude, latitude
      zoom: 13
    });
  
    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
  
    // Array of restaurant data (longitude, latitude, and details)
    var restaurants = [
      {
        longitude: -111.781062,
        latitude: 43.824677,
        name: "Millhollow",
        cuisine: "Sandwich and Ice Cream"
      },
      {
        longitude: -111.788493,
        latitude: 43.825210,
        name: "Red Rabbit",
        cuisine: "American"
      },    
      {
        longitude: -111.811768,
        latitude: 43.803954,
        name: "Applebees",
        cuisine: "American Sit Down"
      },
      {
        longitude: -111.778893,
        latitude: 43.838110,
        name: "Dennys",
        cuisine: "Diner"
      },
      {
        longitude: -111.779687,
        latitude: 43.835773,
        name: "Red 8",
        cuisine: "Chinese"
      },
      {
        longitude: -111.777452,
        latitude: 43.836167,
        name: "Arbys",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.784571,
        latitude: 43.826234,
        name: "Taco Bell",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.777600,
        latitude: 43.837938,
        name: "Dell Taco",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.777266,
        latitude: 43.856918,
        name: "Panda Express",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.776599,
        latitude: 43.854428,
        name: "Wendys 2",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.774526,
        latitude: 43.856457,
        name: "Subway 1",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.778742,
        latitude: 43.836557,
        name: "Costa Vida",
        cuisine: "Mexican"
      },
      {
        longitude: -111.778752,
        latitude: 43.836337,
        name: "The Hickory",
        cuisine: "BBQ"
      },
      {
        longitude: -111.778579,
        latitude: 43.836710,
        name: "Curry Pizza",
        cuisine: "Indian"
      },
      {
        longitude: -111.778814,
        latitude: 43.836217,
        name: "Adams Mongolian",
        cuisine: "Mongolian"
      },
      {
        longitude: -111.778799,
        latitude: 43.836482,
        name: "Flat Rock Pizza",
        cuisine: "Pizza"
      },
      {
        longitude: -111.778782,
        latitude: 43.836118,
        name: "Coldstone",
        cuisine: "Ice Cream"
      },
      {
        longitude: -111.778505,
        latitude: 43.833688,
        name: "Mcdonalds 1",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.778507,
        latitude: 43.841066,
        name: "El Rancho Taqueria",
        cuisine: "Mexican"
      },
      {
        longitude: -111.778478,
        latitude: 43.832742,
        name: "Subway 2",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.777707,
        latitude: 43.826957,
        name: "Freddy's",
        cuisine: "Fast Food"
      },
      {
        longitude: -111.777763,
        latitude: 43.831381,
        name: "Pizza Pie Cafe",
        cuisine: "Pizza"
      },
    ];
  
    restaurants.forEach(function(restaurant) {
      var point = {
        type: "point",
        longitude: restaurant.longitude,
        latitude: restaurant.latitude
      };
  
      var simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40], // Orange
        outline: {
          color: [255, 255, 255], // White
          width: 1
        }
      };
  
      var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
        popupTemplate: {
          title: "{name}",
          content: "Cuisine: {cuisine}"
        },
        attributes: restaurant
      });
  
      graphicsLayer.add(pointGraphic);
    });
  });
  