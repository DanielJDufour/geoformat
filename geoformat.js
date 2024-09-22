const enums = {
  asc: {
    abbr: "asc",
    name: "ASCII Grid",
    long: "ARC/INFO ASCII GRID",
    extensions: [".asc"]
  },
  aux: {
    abbr: "aux",
    name: "Auxiliary file",
    extensions: [".aux.xml"]
  },
  esri_prj: {
    abbr: "esri_prj",
    name: "Esri Proj file",
    extensions: [".prj"]
  },
  geojson: {
    abbr: "geojson",
    name: "GeoJSON",
    extensions: [".geojson", ".geo.json"]
  },
  jpg: {
    abbr: "jpg",
    name: "JPEG",
    long: "Joint Photographic Experts Group",
    extensions: [".jpg"]
  },
  gif: {
    abbr: "gif",
    name: "GIF",
    long: "Graphics Interchange Format",
    extensions: [".gif"]
  },
  geotiff: {
    abbr: "geotiff",
    name: "GeoTIFF",
    extensions: [".tif", ".tiff"]
  },
  mrf: {
    abbr: "mrf",
    name: "MRF",
    long: "Meta Raster Format",
    extensions: [".mrf", ".idx"]
  },
  pam: {
    abbr: "pam",
    name: "PAM",
    long: "Persistent Auxiliary Metadata",
    extensions: [".aux.xml"]
  },
  png: {
    abbr: "png",
    name: "PNG",
    long: "Portable Network Graphics",
    extensions: [".png"]
  },
  prj: {
    abbr: "prj",
    name: "Proj File",
    extensions: [".prj"]
  },
  ovr: {
    abbr: "ovr",
    name: "Overview File",
    extensions: [".ovr", ".tif.ovr", ".tiff.ovr"]
  },
  wld: {
    abbr: "wld",
    name: "World File",
    extensions: [".gfw", ".jgw", ".pgw", ".tfw", ".tiffw", ".tifw", ".wld"]
  }
};

function GeoFormat(format) {
  format = format.trim().toLowerCase().split(";")[0].replace(/^\./, "");

  if (["asc", "ascii grid", "ascii-grid", "arc/info ascii grid", "esri ascii grid"].includes(format)) {
    return enums.asc;
  } else if (["aux", "aux.xml"].includes(format)) {
    return enums.aux;
  } else if (["application/geotiff", "application/geotif", "application/tiff", "application/tif", "image/tiff", "image/tif", "geotiff", "geotif", "geo-tiff", "tiff", "tif"].includes(format)) {
    return enums.geotiff;
  } else if (["application/png", "image/png", "png"].includes(format)) {
    return enums.png;
  } else if (["application/jpg", "application/jpeg", "image/jpeg", "image/jpg", "jpg", "jpeg"].includes(format)) {
    return enums.jpg;
  } else if (["gif", "image/gif", "giff", "image/giff"].includes(format)) {
    return enums.gif;
  } else if (["prj", ".prj", "ogc prj", "ogc .prj", "ogc.prj"].includes(format)) {
    return enums.prj;
  } else if (["esri prj", "esri .prj", "esri.prj"].includes(format)) {
    return enums.esri_prj;
  } else if (["gfw", "jgw", "pgw", "tfw", "tiffw", "tifw", "wld"]) {
    return enums.wld;
  } else {
    return format;
  }
}

GeoFormat.enums = enums;

if (typeof define === "function" && define.amd) {
  define(function () {
    return GeoFormat;
  });
}

if (typeof module === "object") {
  module.exports = GeoFormat;
  module.exports.default = GeoFormat;
  module.exports.GeoFormat = GeoFormat;
}

if (typeof window === "object") {
  window.GeoFormat = GeoFormat;
}

if (typeof self === "object") {
  self.GeoFormat = GeoFormat;
}
