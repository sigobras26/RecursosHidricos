ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-66.188499, -35.996432, -49.712219, -24.681557]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentosSTAFE_1 = new ol.format.GeoJSON();
var features_DepartamentosSTAFE_1 = format_DepartamentosSTAFE_1.readFeatures(json_DepartamentosSTAFE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DepartamentosSTAFE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosSTAFE_1.addFeatures(features_DepartamentosSTAFE_1);
var lyr_DepartamentosSTAFE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentosSTAFE_1, 
                style: style_DepartamentosSTAFE_1,
                popuplayertitle: 'DepartamentosSTAFE',
                interactive: false,
                title: '<img src="styles/legend/DepartamentosSTAFE_1.png" /> DepartamentosSTAFE'
            });
var format_100LocenRiesgo_2 = new ol.format.GeoJSON();
var features_100LocenRiesgo_2 = format_100LocenRiesgo_2.readFeatures(json_100LocenRiesgo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_100LocenRiesgo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100LocenRiesgo_2.addFeatures(features_100LocenRiesgo_2);
var lyr_100LocenRiesgo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100LocenRiesgo_2, 
                style: style_100LocenRiesgo_2,
                popuplayertitle: '100 Loc en Riesgo',
                interactive: true,
                title: '<img src="styles/legend/100LocenRiesgo_2.png" /> 100 Loc en Riesgo'
            });
var format_CapaBaseTroncalesysecudnarios_3 = new ol.format.GeoJSON();
var features_CapaBaseTroncalesysecudnarios_3 = format_CapaBaseTroncalesysecudnarios_3.readFeatures(json_CapaBaseTroncalesysecudnarios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CapaBaseTroncalesysecudnarios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapaBaseTroncalesysecudnarios_3.addFeatures(features_CapaBaseTroncalesysecudnarios_3);
var lyr_CapaBaseTroncalesysecudnarios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapaBaseTroncalesysecudnarios_3, 
                style: style_CapaBaseTroncalesysecudnarios_3,
                popuplayertitle: 'Capa Base: Troncales y secudnarios',
                interactive: true,
    title: 'Capa Base: Troncales y secudnarios<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_3_0.png" /> 1_Cauce Natural<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_3_1.png" /> 2_Cauce Natural Intervenido<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_3_2.png" /> 3_Canal Principal<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_3_3.png" /> 4_Canal Secundario<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_3_4.png" /> 5_Canal Terciario<br />' });
var format_Zonas_4 = new ol.format.GeoJSON();
var features_Zonas_4 = format_Zonas_4.readFeatures(json_Zonas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Zonas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonas_4.addFeatures(features_Zonas_4);
var lyr_Zonas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonas_4, 
                style: style_Zonas_4,
                popuplayertitle: 'Zonas',
                interactive: false,
                title: '<img src="styles/legend/Zonas_4.png" /> Zonas'
            });
var format_Canales_5 = new ol.format.GeoJSON();
var features_Canales_5 = format_Canales_5.readFeatures(json_Canales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Canales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canales_5.addFeatures(features_Canales_5);
var lyr_Canales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canales_5, 
                style: style_Canales_5,
                popuplayertitle: 'Canales',
                interactive: true,
                title: '<img src="styles/legend/Canales_5.png" /> Canales'
            });
var format_Lugares_6 = new ol.format.GeoJSON();
var features_Lugares_6 = format_Lugares_6.readFeatures(json_Lugares_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lugares_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lugares_6.addFeatures(features_Lugares_6);
var lyr_Lugares_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lugares_6, 
                style: style_Lugares_6,
                popuplayertitle: 'Lugares',
                interactive: true,
                title: '<img src="styles/legend/Lugares_6.png" /> Lugares'
            });
var format_CanalesMaqVolantes_7 = new ol.format.GeoJSON();
var features_CanalesMaqVolantes_7 = format_CanalesMaqVolantes_7.readFeatures(json_CanalesMaqVolantes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanalesMaqVolantes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalesMaqVolantes_7.addFeatures(features_CanalesMaqVolantes_7);
var lyr_CanalesMaqVolantes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalesMaqVolantes_7, 
                style: style_CanalesMaqVolantes_7,
                popuplayertitle: 'Canales Maq Volantes',
                interactive: true,
    title: 'Canales Maq Volantes<br />\
    <img src="styles/legend/CanalesMaqVolantes_7_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/CanalesMaqVolantes_7_1.png" /> Finalizado<br />\
    <img src="styles/legend/CanalesMaqVolantes_7_2.png" /> <br />' });
var format_UbicacionMaqVolantes_8 = new ol.format.GeoJSON();
var features_UbicacionMaqVolantes_8 = format_UbicacionMaqVolantes_8.readFeatures(json_UbicacionMaqVolantes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UbicacionMaqVolantes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UbicacionMaqVolantes_8.addFeatures(features_UbicacionMaqVolantes_8);
var lyr_UbicacionMaqVolantes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UbicacionMaqVolantes_8, 
                style: style_UbicacionMaqVolantes_8,
                popuplayertitle: 'Ubicacion Maq Volantes',
                interactive: true,
    title: 'Ubicacion Maq Volantes<br />\
    <img src="styles/legend/UbicacionMaqVolantes_8_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/UbicacionMaqVolantes_8_1.png" /> Finalizado<br />\
    <img src="styles/legend/UbicacionMaqVolantes_8_2.png" /> <br />' });
var format_CanalesATN_9 = new ol.format.GeoJSON();
var features_CanalesATN_9 = format_CanalesATN_9.readFeatures(json_CanalesATN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanalesATN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalesATN_9.addFeatures(features_CanalesATN_9);
var lyr_CanalesATN_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalesATN_9, 
                style: style_CanalesATN_9,
                popuplayertitle: 'Canales ATN',
                interactive: true,
    title: 'Canales ATN<br />\
    <img src="styles/legend/CanalesATN_9_0.png" /> Sin Ejecutar<br />' });
var format_PuntosATN_10 = new ol.format.GeoJSON();
var features_PuntosATN_10 = format_PuntosATN_10.readFeatures(json_PuntosATN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PuntosATN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosATN_10.addFeatures(features_PuntosATN_10);
var lyr_PuntosATN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosATN_10, 
                style: style_PuntosATN_10,
                popuplayertitle: 'Puntos ATN',
                interactive: true,
    title: 'Puntos ATN<br />\
    <img src="styles/legend/PuntosATN_10_0.png" /> Sin Ejecutar<br />\
    <img src="styles/legend/PuntosATN_10_1.png" /> Sin Informacion<br />' });
var format_ConveniosLimpiezas_11 = new ol.format.GeoJSON();
var features_ConveniosLimpiezas_11 = format_ConveniosLimpiezas_11.readFeatures(json_ConveniosLimpiezas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ConveniosLimpiezas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConveniosLimpiezas_11.addFeatures(features_ConveniosLimpiezas_11);
var lyr_ConveniosLimpiezas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConveniosLimpiezas_11, 
                style: style_ConveniosLimpiezas_11,
                popuplayertitle: 'Convenios (Limpiezas)',
                interactive: true,
    title: 'Convenios (Limpiezas)<br />\
    <img src="styles/legend/ConveniosLimpiezas_11_0.png" /> EJECUTADO<br />\
    <img src="styles/legend/ConveniosLimpiezas_11_1.png" /> EN EJECUCIÓN<br />\
    <img src="styles/legend/ConveniosLimpiezas_11_2.png" /> Sin Informacion<br />' });
var format_ConveniosAlcantarillas_12 = new ol.format.GeoJSON();
var features_ConveniosAlcantarillas_12 = format_ConveniosAlcantarillas_12.readFeatures(json_ConveniosAlcantarillas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ConveniosAlcantarillas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConveniosAlcantarillas_12.addFeatures(features_ConveniosAlcantarillas_12);
var lyr_ConveniosAlcantarillas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConveniosAlcantarillas_12, 
                style: style_ConveniosAlcantarillas_12,
                popuplayertitle: 'Convenios Alcantarillas',
                interactive: true,
    title: 'Convenios Alcantarillas<br />\
    <img src="styles/legend/ConveniosAlcantarillas_12_0.png" /> EJECUTADO<br />\
    <img src="styles/legend/ConveniosAlcantarillas_12_1.png" /> EN EJECUCIÓN<br />\
    <img src="styles/legend/ConveniosAlcantarillas_12_2.png" /> <br />' });
var format_Areas_13 = new ol.format.GeoJSON();
var features_Areas_13 = format_Areas_13.readFeatures(json_Areas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Areas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_13.addFeatures(features_Areas_13);
var lyr_Areas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_13, 
                style: style_Areas_13,
                popuplayertitle: 'Areas',
                interactive: true,
    title: 'Areas<br />\
    <img src="styles/legend/Areas_13_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/Areas_13_1.png" /> Finalizado<br />\
    <img src="styles/legend/Areas_13_2.png" /> Sin Ejecutar<br />' });
var format_Lineas_14 = new ol.format.GeoJSON();
var features_Lineas_14 = format_Lineas_14.readFeatures(json_Lineas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lineas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineas_14.addFeatures(features_Lineas_14);
var lyr_Lineas_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineas_14, 
                style: style_Lineas_14,
                popuplayertitle: 'Lineas',
                interactive: true,
    title: 'Lineas<br />\
    <img src="styles/legend/Lineas_14_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/Lineas_14_1.png" /> Finalizado<br />\
    <img src="styles/legend/Lineas_14_2.png" /> No Corresponde<br />\
    <img src="styles/legend/Lineas_14_3.png" /> Sin Ejecutar<br />' });
var format_Puntos_15 = new ol.format.GeoJSON();
var features_Puntos_15 = format_Puntos_15.readFeatures(json_Puntos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Puntos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_15.addFeatures(features_Puntos_15);
var lyr_Puntos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_15, 
                style: style_Puntos_15,
                popuplayertitle: 'Puntos',
                interactive: true,
    title: 'Puntos<br />\
    <img src="styles/legend/Puntos_15_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/Puntos_15_1.png" /> Finalizado<br />\
    <img src="styles/legend/Puntos_15_2.png" /> No Corresponde<br />\
    <img src="styles/legend/Puntos_15_3.png" /> Sin Ejecutar<br />' });
var group_ObrasporTerceros = new ol.layer.Group({
                                layers: [lyr_Areas_13,lyr_Lineas_14,lyr_Puntos_15,],
                                fold: 'close',
                                title: 'Obras por Terceros'});
var group_ConveniosdeAdmDelegada = new ol.layer.Group({
                                layers: [lyr_ConveniosLimpiezas_11,lyr_ConveniosAlcantarillas_12,],
                                fold: 'close',
                                title: 'Convenios de Adm Delegada'});
var group_ATNs = new ol.layer.Group({
                                layers: [lyr_CanalesATN_9,lyr_PuntosATN_10,],
                                fold: 'close',
                                title: 'ATNs'});
var group_MaquinasVolantes = new ol.layer.Group({
                                layers: [lyr_CanalesMaqVolantes_7,lyr_UbicacionMaqVolantes_8,],
                                fold: 'close',
                                title: 'Maquinas Volantes'});
var group_LicitaciondeTroncalesZonaNorteCentroSur = new ol.layer.Group({
                                layers: [lyr_Zonas_4,lyr_Canales_5,lyr_Lugares_6,],
                                fold: 'close',
                                title: 'Licitacion de Troncales Zona Norte - Centro - Sur'});
var group_TroncalesySecundarios = new ol.layer.Group({
                                layers: [lyr_CapaBaseTroncalesysecudnarios_3,],
                                fold: 'close',
                                title: 'Troncales y Secundarios'});
var group_LocalidadesenRiesgo = new ol.layer.Group({
                                layers: [lyr_100LocenRiesgo_2,],
                                fold: 'close',
                                title: 'Localidades en Riesgo'});
var group_MapaBase = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_DepartamentosSTAFE_1,],
                                fold: 'open',
                                title: 'Mapa Base'});

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentosSTAFE_1.setVisible(true);lyr_100LocenRiesgo_2.setVisible(true);lyr_CapaBaseTroncalesysecudnarios_3.setVisible(true);lyr_Zonas_4.setVisible(false);lyr_Canales_5.setVisible(false);lyr_Lugares_6.setVisible(false);lyr_CanalesMaqVolantes_7.setVisible(false);lyr_UbicacionMaqVolantes_8.setVisible(false);lyr_CanalesATN_9.setVisible(false);lyr_PuntosATN_10.setVisible(false);lyr_ConveniosLimpiezas_11.setVisible(false);lyr_ConveniosAlcantarillas_12.setVisible(false);lyr_Areas_13.setVisible(false);lyr_Lineas_14.setVisible(false);lyr_Puntos_15.setVisible(false);
var layersList = [group_MapaBase,group_LocalidadesenRiesgo,group_TroncalesySecundarios,group_LicitaciondeTroncalesZonaNorteCentroSur,group_MaquinasVolantes,group_ATNs,group_ConveniosdeAdmDelegada,group_ObrasporTerceros];
lyr_DepartamentosSTAFE_1.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_100LocenRiesgo_2.set('fieldAliases', {'Localidad': 'Localidad', 'Datos': 'Datos', });
lyr_CapaBaseTroncalesysecudnarios_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'id': 'id', 'JERARQUIA': 'JERARQUIA', 'CAR': 'CAR', 'GES': 'GES', 'ACT': 'ACT', 'OBS': 'OBS', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'FUN': 'FUN', 'FDC': 'FDC', 'SAG': 'SAG', 'DPDS': 'DPDS', 'COD_DFDD': 'COD_DFDD', 'COD_IGN': 'COD_IGN', 'COD_IDERA': 'COD_IDERA', 'JRQ': 'JRQ', });
lyr_Zonas_4.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'fid': 'fid', 'id': 'id', 'Sector': 'Sector', });
lyr_Canales_5.set('fieldAliases', {'Nombre': 'Nombre', 'Long_km_': 'Long_km_', 'Observ_': 'Observ_', 'PRIOR': 'PRIOR', 'FUENTE': 'FUENTE', 'TIPO': 'TIPO', 'BASE': 'BASE', 'TALUD': 'TALUD', 'PENDIENTE': 'PENDIENTE', 'NIVEL': 'NIVEL', 'OBSERVACIO': 'OBSERVACIO', });
lyr_Lugares_6.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', });
lyr_CanalesMaqVolantes_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'ETIQUETA': 'ETIQUETA', 'PRIOR': 'PRIOR', 'FUENTE': 'FUENTE', 'Name': 'Name', 'Estado': 'Estado', 'OBRA': 'OBRA', });
lyr_UbicacionMaqVolantes_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Estado': 'Estado', 'layer': 'layer', 'path': 'path', });
lyr_CanalesATN_9.set('fieldAliases', {'Name': 'Name', 'Estado': 'Estado', });
lyr_PuntosATN_10.set('fieldAliases', {'Ubicacion': 'Ubicacion', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Datos': 'Datos', });
lyr_ConveniosLimpiezas_11.set('fieldAliases', {'NAME': 'NAME', 'ESTADO': 'ESTADO', 'OBRA': 'OBRA', });
lyr_ConveniosAlcantarillas_12.set('fieldAliases', {'NAME': 'NAME', 'ESTADO': 'ESTADO', 'OBRA': 'OBRA', });
lyr_Areas_13.set('fieldAliases', {'NAME': 'NAME', 'Estado': 'Estado', 'OBRA': 'OBRA', 'Datos': 'Datos', });
lyr_Lineas_14.set('fieldAliases', {'NAME': 'NAME', 'Estado': 'Estado', 'OBRA': 'OBRA', 'Datos': 'Datos', });
lyr_Puntos_15.set('fieldAliases', {'NAME': 'NAME', 'Estado': 'Estado', 'OBRA': 'OBRA', 'Datos': 'Datos', });
lyr_DepartamentosSTAFE_1.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_100LocenRiesgo_2.set('fieldImages', {'Localidad': 'TextEdit', 'Datos': 'TextEdit', });
lyr_CapaBaseTroncalesysecudnarios_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'id': 'TextEdit', 'JERARQUIA': 'TextEdit', 'CAR': 'TextEdit', 'GES': 'TextEdit', 'ACT': 'TextEdit', 'OBS': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'FUN': 'TextEdit', 'FDC': 'TextEdit', 'SAG': 'TextEdit', 'DPDS': 'TextEdit', 'COD_DFDD': 'TextEdit', 'COD_IGN': 'TextEdit', 'COD_IDERA': 'TextEdit', 'JRQ': 'TextEdit', });
lyr_Zonas_4.set('fieldImages', {'NAME': '', 'LAYER': '', 'fid': '', 'id': '', 'Sector': '', });
lyr_Canales_5.set('fieldImages', {'Nombre': 'TextEdit', 'Long_km_': 'TextEdit', 'Observ_': 'TextEdit', 'PRIOR': 'Range', 'FUENTE': 'TextEdit', 'TIPO': 'TextEdit', 'BASE': 'TextEdit', 'TALUD': 'TextEdit', 'PENDIENTE': 'TextEdit', 'NIVEL': 'TextEdit', 'OBSERVACIO': 'TextEdit', });
lyr_Lugares_6.set('fieldImages', {'NAME': '', 'LAYER': '', 'KML_STYLE': '', });
lyr_CanalesMaqVolantes_7.set('fieldImages', {'NOMBRE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'PRIOR': 'Range', 'FUENTE': 'TextEdit', 'Name': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', });
lyr_UbicacionMaqVolantes_8.set('fieldImages', {'Name': '', 'descriptio': '', 'Estado': '', 'layer': '', 'path': '', });
lyr_CanalesATN_9.set('fieldImages', {'Name': 'TextEdit', 'Estado': 'TextEdit', });
lyr_PuntosATN_10.set('fieldImages', {'Ubicacion': 'TextEdit', 'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Datos': 'TextEdit', });
lyr_ConveniosLimpiezas_11.set('fieldImages', {'NAME': 'TextEdit', 'ESTADO': 'TextEdit', 'OBRA': 'TextEdit', });
lyr_ConveniosAlcantarillas_12.set('fieldImages', {'NAME': 'TextEdit', 'ESTADO': 'TextEdit', 'OBRA': 'TextEdit', });
lyr_Areas_13.set('fieldImages', {'NAME': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', 'Datos': 'TextEdit', });
lyr_Lineas_14.set('fieldImages', {'NAME': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', 'Datos': 'TextEdit', });
lyr_Puntos_15.set('fieldImages', {'NAME': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', 'Datos': 'TextEdit', });
lyr_DepartamentosSTAFE_1.set('fieldLabels', {'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_100LocenRiesgo_2.set('fieldLabels', {'Localidad': 'header label - visible with data', 'Datos': 'header label - visible with data', });
lyr_CapaBaseTroncalesysecudnarios_3.set('fieldLabels', {'NOMBRE': 'header label - visible with data', 'id': 'no label', 'JERARQUIA': 'header label - visible with data', 'CAR': 'no label', 'GES': 'no label', 'ACT': 'inline label - always visible', 'OBS': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAM': 'no label', 'FUN': 'no label', 'FDC': 'no label', 'SAG': 'no label', 'DPDS': 'no label', 'COD_DFDD': 'no label', 'COD_IGN': 'no label', 'COD_IDERA': 'no label', 'JRQ': 'no label', });
lyr_Zonas_4.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'fid': 'no label', 'id': 'no label', 'Sector': 'no label', });
lyr_Canales_5.set('fieldLabels', {'Nombre': 'header label - visible with data', 'Long_km_': 'no label', 'Observ_': 'no label', 'PRIOR': 'no label', 'FUENTE': 'no label', 'TIPO': 'no label', 'BASE': 'no label', 'TALUD': 'no label', 'PENDIENTE': 'no label', 'NIVEL': 'no label', 'OBSERVACIO': 'no label', });
lyr_Lugares_6.set('fieldLabels', {'NAME': 'header label - visible with data', 'LAYER': 'no label', 'KML_STYLE': 'no label', });
lyr_CanalesMaqVolantes_7.set('fieldLabels', {'NOMBRE': 'header label - visible with data', 'ETIQUETA': 'no label', 'PRIOR': 'no label', 'FUENTE': 'no label', 'Name': 'header label - visible with data', 'Estado': 'header label - visible with data', 'OBRA': 'header label - visible with data', });
lyr_UbicacionMaqVolantes_8.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'no label', 'Estado': 'header label - visible with data', 'layer': 'header label - visible with data', 'path': 'no label', });
lyr_CanalesATN_9.set('fieldLabels', {'Name': 'header label - visible with data', 'Estado': 'header label - visible with data', });
lyr_PuntosATN_10.set('fieldLabels', {'Ubicacion': 'header label - visible with data', 'Nombre': 'header label - visible with data', 'Estado': 'header label - visible with data', 'Datos': 'header label - visible with data', });
lyr_ConveniosLimpiezas_11.set('fieldLabels', {'NAME': 'header label - visible with data', 'ESTADO': 'header label - visible with data', 'OBRA': 'header label - visible with data', });
lyr_ConveniosAlcantarillas_12.set('fieldLabels', {'NAME': 'header label - visible with data', 'ESTADO': 'header label - visible with data', 'OBRA': 'header label - visible with data', });
lyr_Areas_13.set('fieldLabels', {'NAME': 'header label - visible with data', 'Estado': 'header label - visible with data', 'OBRA': 'header label - visible with data', 'Datos': 'hidden field', });
lyr_Lineas_14.set('fieldLabels', {'NAME': 'header label - visible with data', 'Estado': 'header label - visible with data', 'OBRA': 'header label - visible with data', 'Datos': 'header label - visible with data', });
lyr_Puntos_15.set('fieldLabels', {'NAME': 'header label - visible with data', 'Estado': 'header label - visible with data', 'OBRA': 'header label - visible with data', 'Datos': 'header label - visible with data', });
lyr_Puntos_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});