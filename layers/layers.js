ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-63.384770, -34.122215, -55.571151, -29.004264]);
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
var format_REGIONES2024_3 = new ol.format.GeoJSON();
var features_REGIONES2024_3 = format_REGIONES2024_3.readFeatures(json_REGIONES2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_REGIONES2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIONES2024_3.addFeatures(features_REGIONES2024_3);
var lyr_REGIONES2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIONES2024_3, 
                style: style_REGIONES2024_3,
                popuplayertitle: 'REGIONES2024',
                interactive: false,
                title: '<img src="styles/legend/REGIONES2024_3.png" /> REGIONES2024'
            });
var format_Cuencas2024_4 = new ol.format.GeoJSON();
var features_Cuencas2024_4 = format_Cuencas2024_4.readFeatures(json_Cuencas2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cuencas2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas2024_4.addFeatures(features_Cuencas2024_4);
var lyr_Cuencas2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuencas2024_4, 
                style: style_Cuencas2024_4,
                popuplayertitle: 'Cuencas2024',
                interactive: false,
                title: '<img src="styles/legend/Cuencas2024_4.png" /> Cuencas2024'
            });
var format_CapaBaseTroncalesysecudnarios_5 = new ol.format.GeoJSON();
var features_CapaBaseTroncalesysecudnarios_5 = format_CapaBaseTroncalesysecudnarios_5.readFeatures(json_CapaBaseTroncalesysecudnarios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CapaBaseTroncalesysecudnarios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapaBaseTroncalesysecudnarios_5.addFeatures(features_CapaBaseTroncalesysecudnarios_5);
var lyr_CapaBaseTroncalesysecudnarios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapaBaseTroncalesysecudnarios_5, 
                style: style_CapaBaseTroncalesysecudnarios_5,
                popuplayertitle: 'Capa Base: Troncales y secudnarios',
                interactive: true,
    title: 'Capa Base: Troncales y secudnarios<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_5_0.png" /> 1_Cauce Natural<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_5_1.png" /> 2_Cauce Natural Intervenido<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_5_2.png" /> 3_Canal Principal<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_5_3.png" /> 4_Canal Secundario<br />\
    <img src="styles/legend/CapaBaseTroncalesysecudnarios_5_4.png" /> 5_Canal Terciario<br />' });
var format_Zonas_6 = new ol.format.GeoJSON();
var features_Zonas_6 = format_Zonas_6.readFeatures(json_Zonas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Zonas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonas_6.addFeatures(features_Zonas_6);
var lyr_Zonas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonas_6, 
                style: style_Zonas_6,
                popuplayertitle: 'Zonas',
                interactive: false,
                title: '<img src="styles/legend/Zonas_6.png" /> Zonas'
            });
var format_Canales_7 = new ol.format.GeoJSON();
var features_Canales_7 = format_Canales_7.readFeatures(json_Canales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Canales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canales_7.addFeatures(features_Canales_7);
var lyr_Canales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canales_7, 
                style: style_Canales_7,
                popuplayertitle: 'Canales',
                interactive: true,
                title: '<img src="styles/legend/Canales_7.png" /> Canales'
            });
var format_Lugares_8 = new ol.format.GeoJSON();
var features_Lugares_8 = format_Lugares_8.readFeatures(json_Lugares_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lugares_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lugares_8.addFeatures(features_Lugares_8);
var lyr_Lugares_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lugares_8, 
                style: style_Lugares_8,
                popuplayertitle: 'Lugares',
                interactive: true,
                title: '<img src="styles/legend/Lugares_8.png" /> Lugares'
            });
var format_PlanesdeObraCC2026Linea_9 = new ol.format.GeoJSON();
var features_PlanesdeObraCC2026Linea_9 = format_PlanesdeObraCC2026Linea_9.readFeatures(json_PlanesdeObraCC2026Linea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PlanesdeObraCC2026Linea_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanesdeObraCC2026Linea_9.addFeatures(features_PlanesdeObraCC2026Linea_9);
var lyr_PlanesdeObraCC2026Linea_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanesdeObraCC2026Linea_9, 
                style: style_PlanesdeObraCC2026Linea_9,
                popuplayertitle: 'Planes de Obra CC 2026 Linea',
                interactive: true,
    title: 'Planes de Obra CC 2026 Linea<br />\
    <img src="styles/legend/PlanesdeObraCC2026Linea_9_0.png" /> ejecutado 2025<br />\
    <img src="styles/legend/PlanesdeObraCC2026Linea_9_1.png" /> SIN EJECUTAR<br />\
    <img src="styles/legend/PlanesdeObraCC2026Linea_9_2.png" /> <br />' });
var format_PlanesdeObraCC2026Punto_10 = new ol.format.GeoJSON();
var features_PlanesdeObraCC2026Punto_10 = format_PlanesdeObraCC2026Punto_10.readFeatures(json_PlanesdeObraCC2026Punto_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PlanesdeObraCC2026Punto_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanesdeObraCC2026Punto_10.addFeatures(features_PlanesdeObraCC2026Punto_10);
var lyr_PlanesdeObraCC2026Punto_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanesdeObraCC2026Punto_10, 
                style: style_PlanesdeObraCC2026Punto_10,
                popuplayertitle: 'Planes de Obra CC 2026 Punto',
                interactive: true,
    title: 'Planes de Obra CC 2026 Punto<br />\
    <img src="styles/legend/PlanesdeObraCC2026Punto_10_0.png" /> ejecutado 2025<br />\
    <img src="styles/legend/PlanesdeObraCC2026Punto_10_1.png" /> SIN EJECUTAR<br />\
    <img src="styles/legend/PlanesdeObraCC2026Punto_10_2.png" /> <br />' });
var format_LIMITESDECTECUENCA_11 = new ol.format.GeoJSON();
var features_LIMITESDECTECUENCA_11 = format_LIMITESDECTECUENCA_11.readFeatures(json_LIMITESDECTECUENCA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LIMITESDECTECUENCA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESDECTECUENCA_11.addFeatures(features_LIMITESDECTECUENCA_11);
var lyr_LIMITESDECTECUENCA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESDECTECUENCA_11, 
                style: style_LIMITESDECTECUENCA_11,
                popuplayertitle: 'LIMITES DE CTE CUENCA',
                interactive: true,
                title: '<img src="styles/legend/LIMITESDECTECUENCA_11.png" /> LIMITES DE CTE CUENCA'
            });
var format_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12 = new ol.format.GeoJSON();
var features_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12 = format_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12.readFeatures(json_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12.addFeatures(features_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12);
var lyr_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12, 
                style: style_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12,
                popuplayertitle: 'Comite de Cuenca Area Trabajos Enero 2024 a marzo 2026',
                interactive: false,
                title: '<img src="styles/legend/ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12.png" /> Comite de Cuenca Area Trabajos Enero 2024 a marzo 2026'
            });
var format_ComitedeCuencaLineaENE24AMAR26_13 = new ol.format.GeoJSON();
var features_ComitedeCuencaLineaENE24AMAR26_13 = format_ComitedeCuencaLineaENE24AMAR26_13.readFeatures(json_ComitedeCuencaLineaENE24AMAR26_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ComitedeCuencaLineaENE24AMAR26_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComitedeCuencaLineaENE24AMAR26_13.addFeatures(features_ComitedeCuencaLineaENE24AMAR26_13);
var lyr_ComitedeCuencaLineaENE24AMAR26_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComitedeCuencaLineaENE24AMAR26_13, 
                style: style_ComitedeCuencaLineaENE24AMAR26_13,
                popuplayertitle: 'Comite de Cuenca Linea ENE24 A MAR26',
                interactive: true,
    title: 'Comite de Cuenca Linea ENE24 A MAR26<br />\
    <img src="styles/legend/ComitedeCuencaLineaENE24AMAR26_13_0.png" /> <br />\
    <img src="styles/legend/ComitedeCuencaLineaENE24AMAR26_13_1.png" /> EJECUTADO<br />\
    <img src="styles/legend/ComitedeCuencaLineaENE24AMAR26_13_2.png" /> En ejecucion<br />' });
var format_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14 = new ol.format.GeoJSON();
var features_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14 = format_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14.readFeatures(json_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14.addFeatures(features_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14);
var lyr_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14, 
                style: style_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14,
                popuplayertitle: 'Comite de Cuenca Puntos Trabajos Enero 2024 a marzo 2026',
                interactive: true,
    title: 'Comite de Cuenca Puntos Trabajos Enero 2024 a marzo 2026<br />\
    <img src="styles/legend/ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14_0.png" /> EJECUTADO<br />\
    <img src="styles/legend/ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14_1.png" /> En Ejecución<br />\
    <img src="styles/legend/ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14_2.png" /> Sin Informacion<br />' });
var format_CanalesMaqVolantes_15 = new ol.format.GeoJSON();
var features_CanalesMaqVolantes_15 = format_CanalesMaqVolantes_15.readFeatures(json_CanalesMaqVolantes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanalesMaqVolantes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalesMaqVolantes_15.addFeatures(features_CanalesMaqVolantes_15);
var lyr_CanalesMaqVolantes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalesMaqVolantes_15, 
                style: style_CanalesMaqVolantes_15,
                popuplayertitle: 'Canales Maq Volantes',
                interactive: true,
    title: 'Canales Maq Volantes<br />\
    <img src="styles/legend/CanalesMaqVolantes_15_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/CanalesMaqVolantes_15_1.png" /> Finalizado<br />\
    <img src="styles/legend/CanalesMaqVolantes_15_2.png" /> <br />' });
var format_UbicacionMaqVolantes_16 = new ol.format.GeoJSON();
var features_UbicacionMaqVolantes_16 = format_UbicacionMaqVolantes_16.readFeatures(json_UbicacionMaqVolantes_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UbicacionMaqVolantes_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UbicacionMaqVolantes_16.addFeatures(features_UbicacionMaqVolantes_16);
var lyr_UbicacionMaqVolantes_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UbicacionMaqVolantes_16, 
                style: style_UbicacionMaqVolantes_16,
                popuplayertitle: 'Ubicacion Maq Volantes',
                interactive: true,
    title: 'Ubicacion Maq Volantes<br />\
    <img src="styles/legend/UbicacionMaqVolantes_16_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/UbicacionMaqVolantes_16_1.png" /> Finalizado<br />\
    <img src="styles/legend/UbicacionMaqVolantes_16_2.png" /> <br />' });
var format_CanalesATN_17 = new ol.format.GeoJSON();
var features_CanalesATN_17 = format_CanalesATN_17.readFeatures(json_CanalesATN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanalesATN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalesATN_17.addFeatures(features_CanalesATN_17);
var lyr_CanalesATN_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalesATN_17, 
                style: style_CanalesATN_17,
                popuplayertitle: 'Canales ATN',
                interactive: true,
    title: 'Canales ATN<br />\
    <img src="styles/legend/CanalesATN_17_0.png" /> Sin Ejecutar<br />' });
var format_PuntosATN_18 = new ol.format.GeoJSON();
var features_PuntosATN_18 = format_PuntosATN_18.readFeatures(json_PuntosATN_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PuntosATN_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosATN_18.addFeatures(features_PuntosATN_18);
var lyr_PuntosATN_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosATN_18, 
                style: style_PuntosATN_18,
                popuplayertitle: 'Puntos ATN',
                interactive: true,
    title: 'Puntos ATN<br />\
    <img src="styles/legend/PuntosATN_18_0.png" /> Sin Ejecutar<br />\
    <img src="styles/legend/PuntosATN_18_1.png" /> Sin Informacion<br />' });
var format_ConveniosLimpiezasCanales_19 = new ol.format.GeoJSON();
var features_ConveniosLimpiezasCanales_19 = format_ConveniosLimpiezasCanales_19.readFeatures(json_ConveniosLimpiezasCanales_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ConveniosLimpiezasCanales_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConveniosLimpiezasCanales_19.addFeatures(features_ConveniosLimpiezasCanales_19);
var lyr_ConveniosLimpiezasCanales_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConveniosLimpiezasCanales_19, 
                style: style_ConveniosLimpiezasCanales_19,
                popuplayertitle: 'Convenios (Limpiezas Canales)',
                interactive: true,
    title: 'Convenios (Limpiezas Canales)<br />\
    <img src="styles/legend/ConveniosLimpiezasCanales_19_0.png" /> EJECUTADO<br />\
    <img src="styles/legend/ConveniosLimpiezasCanales_19_1.png" /> EN EJECUCIÓN<br />\
    <img src="styles/legend/ConveniosLimpiezasCanales_19_2.png" /> Sin Informacion<br />' });
var format_ConveniosAlcantarilla_20 = new ol.format.GeoJSON();
var features_ConveniosAlcantarilla_20 = format_ConveniosAlcantarilla_20.readFeatures(json_ConveniosAlcantarilla_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ConveniosAlcantarilla_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConveniosAlcantarilla_20.addFeatures(features_ConveniosAlcantarilla_20);
var lyr_ConveniosAlcantarilla_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConveniosAlcantarilla_20, 
                style: style_ConveniosAlcantarilla_20,
                popuplayertitle: 'Convenios Alcantarilla',
                interactive: true,
    title: 'Convenios Alcantarilla<br />\
    <img src="styles/legend/ConveniosAlcantarilla_20_0.png" /> EJECUTADO<br />\
    <img src="styles/legend/ConveniosAlcantarilla_20_1.png" /> EN EJECUCIÓN<br />\
    <img src="styles/legend/ConveniosAlcantarilla_20_2.png" /> Sin Informacion<br />' });
var format_Areas_21 = new ol.format.GeoJSON();
var features_Areas_21 = format_Areas_21.readFeatures(json_Areas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Areas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_21.addFeatures(features_Areas_21);
var lyr_Areas_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_21, 
                style: style_Areas_21,
                popuplayertitle: 'Areas',
                interactive: true,
    title: 'Areas<br />\
    <img src="styles/legend/Areas_21_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/Areas_21_1.png" /> Finalizado<br />\
    <img src="styles/legend/Areas_21_2.png" /> Sin Ejecutar<br />' });
var format_Lineas_22 = new ol.format.GeoJSON();
var features_Lineas_22 = format_Lineas_22.readFeatures(json_Lineas_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lineas_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineas_22.addFeatures(features_Lineas_22);
var lyr_Lineas_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineas_22, 
                style: style_Lineas_22,
                popuplayertitle: 'Lineas',
                interactive: true,
    title: 'Lineas<br />\
    <img src="styles/legend/Lineas_22_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/Lineas_22_1.png" /> Finalizado<br />\
    <img src="styles/legend/Lineas_22_2.png" /> No Corresponde<br />\
    <img src="styles/legend/Lineas_22_3.png" /> Sin Ejecutar<br />' });
var format_Puntos_23 = new ol.format.GeoJSON();
var features_Puntos_23 = format_Puntos_23.readFeatures(json_Puntos_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Puntos_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_23.addFeatures(features_Puntos_23);
var lyr_Puntos_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_23, 
                style: style_Puntos_23,
                popuplayertitle: 'Puntos',
                interactive: true,
    title: 'Puntos<br />\
    <img src="styles/legend/Puntos_23_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/Puntos_23_1.png" /> Finalizado<br />\
    <img src="styles/legend/Puntos_23_2.png" /> No Corresponde<br />\
    <img src="styles/legend/Puntos_23_3.png" /> Sin Ejecutar<br />' });
var group_ObrasporTerceros = new ol.layer.Group({
                                layers: [lyr_Areas_21,lyr_Lineas_22,lyr_Puntos_23,],
                                fold: 'close',
                                title: 'Obras por Terceros'});
var group_ConveniosdeAdmDelegada = new ol.layer.Group({
                                layers: [lyr_ConveniosLimpiezasCanales_19,lyr_ConveniosAlcantarilla_20,],
                                fold: 'close',
                                title: 'Convenios de Adm Delegada'});
var group_ATNs = new ol.layer.Group({
                                layers: [lyr_CanalesATN_17,lyr_PuntosATN_18,],
                                fold: 'close',
                                title: 'ATNs'});
var group_MaquinasVolantes = new ol.layer.Group({
                                layers: [lyr_CanalesMaqVolantes_15,lyr_UbicacionMaqVolantes_16,],
                                fold: 'close',
                                title: 'Maquinas Volantes'});
var group_TrabajosdeCCentreEnero2024yMarzo2026 = new ol.layer.Group({
                                layers: [lyr_LIMITESDECTECUENCA_11,lyr_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12,lyr_ComitedeCuencaLineaENE24AMAR26_13,lyr_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14,],
                                fold: 'close',
                                title: 'Trabajos de CC entre Enero 2024 y Marzo 2026'});
var group_PlanesdeObrasdeCC2026PorEJecutar = new ol.layer.Group({
                                layers: [lyr_PlanesdeObraCC2026Linea_9,lyr_PlanesdeObraCC2026Punto_10,],
                                fold: 'close',
                                title: 'Planes de Obras de CC 2026 (Por EJecutar)'});
var group_LicitaciondeTroncalesZonaNorteCentroSur = new ol.layer.Group({
                                layers: [lyr_Zonas_6,lyr_Canales_7,lyr_Lugares_8,],
                                fold: 'close',
                                title: 'Licitacion de Troncales Zona Norte - Centro - Sur'});
var group_TroncalesySecundarios = new ol.layer.Group({
                                layers: [lyr_CapaBaseTroncalesysecudnarios_5,],
                                fold: 'close',
                                title: 'Troncales y Secundarios'});
var group_PlanificacionHidrica = new ol.layer.Group({
                                layers: [lyr_REGIONES2024_3,lyr_Cuencas2024_4,],
                                fold: 'close',
                                title: 'Planificacion Hidrica'});
var group_LocalidadesenRiesgo = new ol.layer.Group({
                                layers: [lyr_100LocenRiesgo_2,],
                                fold: 'open',
                                title: 'Localidades en Riesgo'});
var group_MapaBase = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_DepartamentosSTAFE_1,],
                                fold: 'close',
                                title: 'Mapa Base'});

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentosSTAFE_1.setVisible(true);lyr_100LocenRiesgo_2.setVisible(true);lyr_REGIONES2024_3.setVisible(false);lyr_Cuencas2024_4.setVisible(false);lyr_CapaBaseTroncalesysecudnarios_5.setVisible(false);lyr_Zonas_6.setVisible(false);lyr_Canales_7.setVisible(false);lyr_Lugares_8.setVisible(false);lyr_PlanesdeObraCC2026Linea_9.setVisible(false);lyr_PlanesdeObraCC2026Punto_10.setVisible(false);lyr_LIMITESDECTECUENCA_11.setVisible(false);lyr_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12.setVisible(false);lyr_ComitedeCuencaLineaENE24AMAR26_13.setVisible(false);lyr_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14.setVisible(false);lyr_CanalesMaqVolantes_15.setVisible(false);lyr_UbicacionMaqVolantes_16.setVisible(false);lyr_CanalesATN_17.setVisible(false);lyr_PuntosATN_18.setVisible(false);lyr_ConveniosLimpiezasCanales_19.setVisible(false);lyr_ConveniosAlcantarilla_20.setVisible(false);lyr_Areas_21.setVisible(false);lyr_Lineas_22.setVisible(false);lyr_Puntos_23.setVisible(false);
var layersList = [group_MapaBase,group_LocalidadesenRiesgo,group_PlanificacionHidrica,group_TroncalesySecundarios,group_LicitaciondeTroncalesZonaNorteCentroSur,group_PlanesdeObrasdeCC2026PorEJecutar,group_TrabajosdeCCentreEnero2024yMarzo2026,group_MaquinasVolantes,group_ATNs,group_ConveniosdeAdmDelegada,group_ObrasporTerceros];
lyr_DepartamentosSTAFE_1.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_100LocenRiesgo_2.set('fieldAliases', {'Localidad': 'Localidad', 'Datos': 'Datos', });
lyr_REGIONES2024_3.set('fieldAliases', {'Area [Km2]': 'Area [Km2]', 'Perim.[Km]': 'Perim.[Km]', 'Nombre': 'Nombre', });
lyr_Cuencas2024_4.set('fieldAliases', {'N_CCA': 'N_CCA', 'Area': 'Area', 'Perim': 'Perim', 'Cuencas': 'Cuencas', });
lyr_CapaBaseTroncalesysecudnarios_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'id': 'id', 'JERARQUIA': 'JERARQUIA', 'CAR': 'CAR', 'GES': 'GES', 'ACT': 'ACT', 'OBS': 'OBS', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'FUN': 'FUN', 'FDC': 'FDC', 'SAG': 'SAG', 'DPDS': 'DPDS', 'COD_DFDD': 'COD_DFDD', 'COD_IGN': 'COD_IGN', 'COD_IDERA': 'COD_IDERA', 'JRQ': 'JRQ', });
lyr_Zonas_6.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'fid': 'fid', 'id': 'id', 'Sector': 'Sector', });
lyr_Canales_7.set('fieldAliases', {'Nombre': 'Nombre', 'Long_km_': 'Long_km_', 'Observ_': 'Observ_', 'PRIOR': 'PRIOR', 'FUENTE': 'FUENTE', 'TIPO': 'TIPO', 'BASE': 'BASE', 'TALUD': 'TALUD', 'PENDIENTE': 'PENDIENTE', 'NIVEL': 'NIVEL', 'OBSERVACIO': 'OBSERVACIO', });
lyr_Lugares_8.set('fieldAliases', {'NAME': 'NAME', });
lyr_PlanesdeObraCC2026Linea_9.set('fieldAliases', {'NAME': 'NAME', 'ESTADO': 'ESTADO', 'Descripcio': 'Descripcio', });
lyr_PlanesdeObraCC2026Punto_10.set('fieldAliases', {'NAME': 'NAME', 'ESTADO': 'ESTADO', 'Descripcio': 'Descripcio', });
lyr_LIMITESDECTECUENCA_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12.set('fieldAliases', {'NAME': 'NAME', 'DECRETO_N': 'DECRETO_N', 'NRO_PLANO': 'NRO_PLANO', });
lyr_ComitedeCuencaLineaENE24AMAR26_13.set('fieldAliases', {'Name': 'Name', 'Estado': 'Estado', 'Ultima_int': 'Ultima_int', });
lyr_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14.set('fieldAliases', {'NAME': 'NAME', 'ESTADO': 'ESTADO', 'Observacio': 'Observacio', });
lyr_CanalesMaqVolantes_15.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'ETIQUETA': 'ETIQUETA', 'PRIOR': 'PRIOR', 'FUENTE': 'FUENTE', 'Name': 'Name', 'Estado': 'Estado', 'OBRA': 'OBRA', });
lyr_UbicacionMaqVolantes_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Estado': 'Estado', 'layer': 'layer', 'path': 'path', });
lyr_CanalesATN_17.set('fieldAliases', {'Name': 'Name', 'Estado': 'Estado', });
lyr_PuntosATN_18.set('fieldAliases', {'Ubicacion': 'Ubicacion', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Datos': 'Datos', });
lyr_ConveniosLimpiezasCanales_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Estado': 'Estado', 'Comite_Cue': 'Comite_Cue', 'Fecha': 'Fecha', 'OBRA': 'OBRA', });
lyr_ConveniosAlcantarilla_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Estado': 'Estado', 'OBRA': 'OBRA', });
lyr_Areas_21.set('fieldAliases', {'NAME': 'NAME', 'Estado': 'Estado', 'OBRA': 'OBRA', 'Datos': 'Datos', });
lyr_Lineas_22.set('fieldAliases', {'NAME': 'NAME', 'Estado': 'Estado', 'OBRA': 'OBRA', 'Datos': 'Datos', });
lyr_Puntos_23.set('fieldAliases', {'Nombre': 'Nombre', 'Estado': 'Estado', 'OBRA': 'OBRA', 'Datos': 'Datos', });
lyr_DepartamentosSTAFE_1.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_100LocenRiesgo_2.set('fieldImages', {'Localidad': 'TextEdit', 'Datos': 'TextEdit', });
lyr_REGIONES2024_3.set('fieldImages', {'Area [Km2]': '', 'Perim.[Km]': '', 'Nombre': '', });
lyr_Cuencas2024_4.set('fieldImages', {'N_CCA': '', 'Area': '', 'Perim': '', 'Cuencas': '', });
lyr_CapaBaseTroncalesysecudnarios_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'id': 'TextEdit', 'JERARQUIA': 'TextEdit', 'CAR': 'TextEdit', 'GES': 'TextEdit', 'ACT': 'TextEdit', 'OBS': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'FUN': 'TextEdit', 'FDC': 'TextEdit', 'SAG': 'TextEdit', 'DPDS': 'TextEdit', 'COD_DFDD': 'TextEdit', 'COD_IGN': 'TextEdit', 'COD_IDERA': 'TextEdit', 'JRQ': 'TextEdit', });
lyr_Zonas_6.set('fieldImages', {'NAME': '', 'LAYER': '', 'fid': '', 'id': '', 'Sector': '', });
lyr_Canales_7.set('fieldImages', {'Nombre': 'TextEdit', 'Long_km_': 'TextEdit', 'Observ_': 'TextEdit', 'PRIOR': 'Range', 'FUENTE': 'TextEdit', 'TIPO': 'TextEdit', 'BASE': 'TextEdit', 'TALUD': 'TextEdit', 'PENDIENTE': 'TextEdit', 'NIVEL': 'TextEdit', 'OBSERVACIO': 'TextEdit', });
lyr_Lugares_8.set('fieldImages', {'NAME': '', });
lyr_PlanesdeObraCC2026Linea_9.set('fieldImages', {'NAME': 'TextEdit', 'ESTADO': 'TextEdit', 'Descripcio': 'TextEdit', });
lyr_PlanesdeObraCC2026Punto_10.set('fieldImages', {'NAME': 'TextEdit', 'ESTADO': 'TextEdit', 'Descripcio': 'TextEdit', });
lyr_LIMITESDECTECUENCA_11.set('fieldImages', {'Name': '', 'descriptio': '', });
lyr_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12.set('fieldImages', {'NAME': '', 'DECRETO_N': '', 'NRO_PLANO': '', });
lyr_ComitedeCuencaLineaENE24AMAR26_13.set('fieldImages', {'Name': '', 'Estado': '', 'Ultima_int': '', });
lyr_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14.set('fieldImages', {'NAME': 'TextEdit', 'ESTADO': 'TextEdit', 'Observacio': 'TextEdit', });
lyr_CanalesMaqVolantes_15.set('fieldImages', {'NOMBRE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'PRIOR': 'Range', 'FUENTE': 'TextEdit', 'Name': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', });
lyr_UbicacionMaqVolantes_16.set('fieldImages', {'Name': '', 'descriptio': '', 'Estado': '', 'layer': '', 'path': '', });
lyr_CanalesATN_17.set('fieldImages', {'Name': 'TextEdit', 'Estado': 'TextEdit', });
lyr_PuntosATN_18.set('fieldImages', {'Ubicacion': 'TextEdit', 'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Datos': 'TextEdit', });
lyr_ConveniosLimpiezasCanales_19.set('fieldImages', {'Name': '', 'descriptio': '', 'Estado': '', 'Comite_Cue': '', 'Fecha': '', 'OBRA': '', });
lyr_ConveniosAlcantarilla_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', });
lyr_Areas_21.set('fieldImages', {'NAME': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', 'Datos': 'TextEdit', });
lyr_Lineas_22.set('fieldImages', {'NAME': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', 'Datos': 'TextEdit', });
lyr_Puntos_23.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'OBRA': 'TextEdit', 'Datos': 'TextEdit', });
lyr_DepartamentosSTAFE_1.set('fieldLabels', {'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_100LocenRiesgo_2.set('fieldLabels', {'Localidad': 'inline label - visible with data', 'Datos': 'inline label - visible with data', });
lyr_REGIONES2024_3.set('fieldLabels', {'Area [Km2]': 'no label', 'Perim.[Km]': 'no label', 'Nombre': 'no label', });
lyr_Cuencas2024_4.set('fieldLabels', {'N_CCA': 'no label', 'Area': 'no label', 'Perim': 'no label', 'Cuencas': 'no label', });
lyr_CapaBaseTroncalesysecudnarios_5.set('fieldLabels', {'NOMBRE': 'header label - visible with data', 'id': 'hidden field', 'JERARQUIA': 'header label - visible with data', 'CAR': 'hidden field', 'GES': 'hidden field', 'ACT': 'inline label - always visible', 'OBS': 'hidden field', 'FNA': 'hidden field', 'GNA': 'hidden field', 'NAM': 'hidden field', 'FUN': 'hidden field', 'FDC': 'hidden field', 'SAG': 'hidden field', 'DPDS': 'hidden field', 'COD_DFDD': 'hidden field', 'COD_IGN': 'hidden field', 'COD_IDERA': 'hidden field', 'JRQ': 'hidden field', });
lyr_Zonas_6.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'fid': 'no label', 'id': 'no label', 'Sector': 'no label', });
lyr_Canales_7.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Long_km_': 'no label', 'Observ_': 'no label', 'PRIOR': 'no label', 'FUENTE': 'no label', 'TIPO': 'no label', 'BASE': 'no label', 'TALUD': 'no label', 'PENDIENTE': 'no label', 'NIVEL': 'no label', 'OBSERVACIO': 'no label', });
lyr_Lugares_8.set('fieldLabels', {'NAME': 'header label - visible with data', });
lyr_PlanesdeObraCC2026Linea_9.set('fieldLabels', {'NAME': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'Descripcio': 'inline label - visible with data', });
lyr_PlanesdeObraCC2026Punto_10.set('fieldLabels', {'NAME': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'Descripcio': 'inline label - visible with data', });
lyr_LIMITESDECTECUENCA_11.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'hidden field', });
lyr_ComitedeCuencaAreaTrabajosEnero2024amarzo2026_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'DECRETO_N': 'hidden field', 'NRO_PLANO': 'no label', });
lyr_ComitedeCuencaLineaENE24AMAR26_13.set('fieldLabels', {'Name': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Ultima_int': 'inline label - visible with data', });
lyr_ComitedeCuencaPuntosTrabajosEnero2024amarzo2026_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'Observacio': 'inline label - visible with data', });
lyr_CanalesMaqVolantes_15.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'ETIQUETA': 'hidden field', 'PRIOR': 'hidden field', 'FUENTE': 'hidden field', 'Name': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'OBRA': 'inline label - visible with data', });
lyr_UbicacionMaqVolantes_16.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'hidden field', 'Estado': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CanalesATN_17.set('fieldLabels', {'Name': 'inline label - visible with data', 'Estado': 'inline label - visible with data', });
lyr_PuntosATN_18.set('fieldLabels', {'Ubicacion': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Datos': 'inline label - visible with data', });
lyr_ConveniosLimpiezasCanales_19.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Comite_Cue': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'OBRA': 'inline label - visible with data', });
lyr_ConveniosAlcantarilla_20.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'OBRA': 'inline label - visible with data', });
lyr_Areas_21.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'OBRA': 'inline label - visible with data', 'Datos': 'inline label - visible with data', });
lyr_Lineas_22.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'OBRA': 'inline label - visible with data', 'Datos': 'inline label - visible with data', });
lyr_Puntos_23.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'OBRA': 'inline label - visible with data', 'Datos': 'inline label - visible with data', });
lyr_Puntos_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});