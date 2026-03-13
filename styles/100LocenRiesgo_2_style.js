var size = 0;
var placement = 'point';

var style_100LocenRiesgo_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };

    // Mostrar etiquetas desde zoom 10 o mayor
    var zoomThresholdResolution = 0.005;

    var labelText = "";
    var labelFont = "bold 22px sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 2;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 0;
    var placement = 'point';

    if (resolution <= 100) {
        var localidad = feature.get("Localidad");
        if (localidad !== null && localidad !== undefined) {
            labelText = String(localidad);
        }
    }

    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(251,9,238,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
