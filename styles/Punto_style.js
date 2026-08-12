var size = 0;
var placement = 'point';
function categories_puntos_style_estado (feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {
    
                    case 'En Ejecucion':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Finalizado':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(0,255,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'No Corresponde':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(254,80,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(0,0,128,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sin Ejecutar':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
    console.warn('Estado desconocido:', feature.get('estado'));
    return [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 6 + size,
            fill: new ol.style.Fill({color: 'rgba(255,0,255,0.7)'})  // Solo relleno sólido
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)                
                
                })];
  }  // ← Cierra el switch correctamente
}
var puntos_style_estado = function(feature, resolution){
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
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_puntos_style_estado(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};


function categories_puntos_style_tipo (feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {
    
                    case 'Clandestino':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgb(8, 8, 8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,0,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;

default:
    console.warn('Estado desconocido:', feature.get('estado'));
    return [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 6 + size,
            fill: new ol.style.Fill({color: 'rgba(255,0,255,0.7)'})  // Solo relleno sólido
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)                
                
                })];
  }  // ← Cierra el switch correctamente
}
var puntos_style_tipo = function(feature, resolution){
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
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_puntos_style_tipo(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};