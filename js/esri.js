//ArcGIS module via Esri
var map;

var dojoConfig = { parseOnLoad:true };
require(["esri/map", "esri/arcgis/utils", "dojo/domReady!"], function(Map, arcgisUtils) {

  //using map ID from crime map + emphasis on Chicago below from ArcGIS.com.

  arcgisUtils.createMap("7fd2ad9ec0254e9a86226086c3893094", "mapDiv").then(function (response) {
      map = response.map;
  });
  // map = new Map("mapDiv", {
  //   center: [-56.049, 38.485],
  //   zoom: 3,
  //   basemap: "streets"
  // });
});
