var size = 0;
var placement = 'point';
function categorias_canales_troncales_style(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {
                    case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,255,1.0)', lineDash: [15, 10],lineDashOffset: 0, lineCap: 'butt', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var canales_troncales_style = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("N Jer");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categorias_canales_troncales_style(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
