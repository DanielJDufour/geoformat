const test = require("flug");
const GeoFormat = require("./geoformat.js");

test("jpg", ({ eq }) => {
  eq(GeoFormat("application/jpeg"), GeoFormat.enums.jpg);
  eq(GeoFormat("application/jpg"), GeoFormat.enums.jpg);
  eq(GeoFormat("JPEG"), GeoFormat.enums.jpg);
});

test("ASCII Grid", ({ eq }) => {
  eq(GeoFormat("asc"), GeoFormat.enums.asc);
});

test("PNG", ({ eq }) => {
  eq(GeoFormat("png"), GeoFormat.enums.png);
  eq(GeoFormat("PNG"), GeoFormat.enums.png);
  eq(GeoFormat("image/png"), GeoFormat.enums.png);
});

test("GeoTIFF", ({ eq }) => {
  eq(GeoFormat("image/tiff"), GeoFormat.enums.geotiff);
  eq(GeoFormat("image/tif"), GeoFormat.enums.geotiff);
  eq(GeoFormat(".tiff"), GeoFormat.enums.geotiff);
});
