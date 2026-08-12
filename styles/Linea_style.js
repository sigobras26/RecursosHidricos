var size = 0;
var placement = 'point';
function categories_linea_style_estado(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {
                    
                    case 'En Ejecucion':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Finalizado':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'No Corresponde':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,80,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sin Ejecutar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;


default:
    console.warn('Estado desconocido:', feature.get('Estado'));
    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255,0,255,1.0)',  // Magenta llamativo
            width: 5,  // Línea gruesa para que resalte
            lineDash: [10, 5]  // Línea punteada para identificar errores
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
            })];
  }  // ← Cierra el switch correctamente
}

var linea_style_estado = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Estado");
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
    
    var style = categories_linea_style_estado(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

function categories_linea_style_tipo(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {
                    
                    case 'Clandestino':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(181,0,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;

default:
    console.warn('Estado desconocido:', feature.get('Estado'));
    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255,0,255,1.0)',  // Magenta llamativo
            width: 5,  // Línea gruesa para que resalte
            lineDash: [10, 5]  // Línea punteada para identificar errores
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
            })];
  }  // ← Cierra el switch correctamente
}

var linea_style_tipo = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Tipo");
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
    
    var style = categories_linea_style_tipo(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};