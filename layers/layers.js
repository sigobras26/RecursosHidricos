var wms_layers = [];

// ── Función helper para crear una capa vectorial desde un archivo GeoJSON ──
function makeLayer(url, style, opts) {
    var source = new ol.source.Vector({
        url: url + '?v=' + Date.now(),
        format: new ol.format.GeoJSON({
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        }),
        attributions: ' '
    });
    var layer = new ol.layer.Vector(Object.assign({
        declutter: false,
        source: source,
        style: style
    }, opts));
    return layer;
}

// ── Mapa Base ──
var lyr_OSMStandard_0 = new ol.layer.Tile({
    'title': 'OSM Standard',
    'type': 'base',
    'opacity': 0.400000,
    source: new ol.source.XYZ({
        attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var lyr_DepartamentosSTAFE_1 = makeLayer('layers/DepartamentosSTAFE_1.geojson', style_DepartamentosSTAFE_1, {
    popuplayertitle: 'DepartamentosSTAFE',
    interactive: false,
    title: '<img src="styles/legend/DepartamentosSTAFE_1.png" /> DepartamentosSTAFE'
});

// ── Localidades en Riesgo ──
var lyr_100LocenRiesgo_2 = makeLayer('layers/100LocenRiesgo_2.geojson', style_100LocenRiesgo_2, {
    popuplayertitle: '100 Loc en Riesgo',
    interactive: true,
    title: '<img src="styles/legend/100LocenRiesgo_2.png" /> 100 Loc en Riesgo'
});

// ── Planificacion Hidrica ──
var lyr_Regiones = makeLayer('layers/Regiones.geojson', style_Regiones, {
    popuplayertitle: 'Regiones Santa Fe',
    interactive: true,
    title: '<img src="styles/legend/Reg.png" /> Regiones Santa Fe'
});

var lyr_Cuencas = makeLayer('layers/Cuencas.geojson', style_Cuencas, {
    popuplayertitle: 'Cuencas Hidricas de Santa Fe',
    interactive: true,
    title: '<img src="styles/legend/Cue.png" /> Cuencas Hidricas Santa Fe'
});

// ── Troncales y Secundarios ──
var lyr_CapaBaseTroncales = makeLayer('layers/Troncales_existentes.geojson', canales_troncales_style, {
    popuplayertitle: 'Canales Troncales y secundarios',
    interactive: true,
    title: 'Jerarquia Canales Troncales<br />\
    <img src="styles/legend/1_natural.png" /> Cauce Natural<br />\
    <img src="styles/legend/2_natural_intervenido.png" /> Cauce Natural Intervenido<br />\
    <img src="styles/legend/3_principal.png" /> Canal Principal<br />\
    <img src="styles/legend/4_Secundario.png" /> Canal Secundario<br />\
    <img src="styles/legend/5_terciario.png" /> Canal Terciario<br />'
});

// ── Licitacion de Troncales ──

var lyr_Canales_Troncales_licitacion = makeLayer('layers/licitacion_canales_troncales.geojson', Li_Troncales_style, {
    popuplayertitle: 'Licitacion de Canales Troncales',
    interactive: true,
    title:
    '<img src="styles/legend/Linea_Licitacion_troncales.png" /> Canales Troncales para Licitacion'
    //title: 'Canales Troncales para Licitacion<br />\
    //<img src="styles/legend/Linea_Licitacion_troncales.png" /> Canales Troncales para Licitacion<br />'
});

// ── Obras por Terceros ──



var lyr_Lineas_Canales_Clandestinos = makeLayer('layers/Canales_CCland.geojson', linea_style_tipo, {
    popuplayertitle: 'Canales Clandestinos',
    interactive: true,
    title: 'Canal <br />\
    <img src="styles/legend/linea_canal_clandestino.png" /> Canal Clandestino <br />'

});


var lyr_Puntos_Obras_Clandestinas = makeLayer('layers/Obras_OCland.geojson', puntos_style_tipo, {
    popuplayertitle: 'Obras Clandestinas',
   interactive: true,
    title: 'Obra <br />\
    <img src="styles/legend/Punto_Obra_Clandestina.png" /> Obra Clandestina <br />'
 });

// ── Planes de Obras CC 2026 ──
var lyr_PlanesdeObraCC2026Linea = makeLayer('layers/Canales_PlanesdeObra_cc_2026.geojson', linea_style_estado, {
    popuplayertitle: 'Planes de Obra de Comite de Cuenca para 2026',
    interactive: true,
    title: 'Canales Planificados para 2026 Comite de Cuenca<br />\
    <img src="styles/legend/Linea_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Linea_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Linea_No_Corresponde.png" /> No Corresponde<br />\
    <img src="styles/legend/Linea_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

var lyr_PlanesdeObraCC2026Punto = makeLayer('layers/Obras_PlanesdeObra_cc_2026.geojson', puntos_style_estado, {
    popuplayertitle: 'Planes de Obra de Comite de Cuenca para 2026',
    interactive: true,
    title: 'Alcantarillas Planificadas para 2026 Comite de Cuenca<br />\
    <img src="styles/legend/Punto_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Punto_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Punto_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});
// ── Trabajos de CC Enero 2024 a Marzo 2026 ──

var lyr_cc_canal_ejecutado = makeLayer('layers/Canales_CC_ENE24_MAR26.geojson', linea_style_estado, {
    popuplayertitle: 'Canales intervenidos por los Comite de Cuenca Enero 2024 a Marzo 2024',
    interactive: true,
    title: 'Canales Intervenidos por los Comité de Cuencas<br />\
    <img src="styles/legend/Linea_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Linea_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Linea_No_Corresponde.png" /> No Corresponde<br />\
    <img src="styles/legend/Linea_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

var lyr_cc_alc_ejecutado = makeLayer('layers/Alcantarillas_CC_ENE24_MAR26.geojson', puntos_style_estado, {
    popuplayertitle: 'Alcantarillas Intervenidas por los Comité de Cuenca entre Enero 2024 a Marzo 2026',
    interactive: true,
    title: 'Alcantarillas Intervenidas por los Comité de Cuencas<br />\
    <img src="styles/legend/Punto_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Punto_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Punto_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

// ── Maquinas Volantes ──
var lyr_CanalesMV = makeLayer('layers/Canales maquinas volantes.geojson', linea_style_estado, {
    popuplayertitle: 'Traza de Maquinas Volantes',
    interactive: true,
     title: 'Trazas Maquinas Volantes<br />\
    <img src="styles/legend/Linea_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Linea_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Linea_No_Corresponde.png" /> No Corresponde<br />\
    <img src="styles/legend/Linea_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

var lyr_UbicacionMV = makeLayer('layers/Ubicacion maquinas volantes.geojson', puntos_style_estado, {
    popuplayertitle: 'Ubicacion Maquinas Volantes',
    interactive: true,
    title: 'Ubicaciones de Maquinas Volantes<br />\
    <img src="styles/legend/Punto_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Punto_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Punto_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

// ── ATNs ──
var lyr_CanalesATN = makeLayer('layers/ObrasLineales_atn.geojson', linea_style_estado, {
    popuplayertitle: 'Canales ATN',
    interactive: true,
    title: 'Obras por ATN<br />\
    <img src="styles/legend/Linea_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Linea_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Linea_No_Corresponde.png" /> No Corresponde<br />\
    <img src="styles/legend/Linea_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

var lyr_PuntosATN = makeLayer('layers/Ubicaciones_atn.geojson', puntos_style_estado, {
    popuplayertitle: '  Ubicaciones ATN',
    interactive: true,
    title: 'Ubicaciones de ATN<br />\
    <img src="styles/legend/Punto_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Punto_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Punto_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

// ── Convenios de Adm Delegada ──
var lyr_Lineas_Convenios = makeLayer('layers/ConAdmDelegada_canales.geojson', linea_style_estado, {
    popuplayertitle: 'Convenios por Administración Delegada - Canales',
    interactive: true,
    title: 'Canales<br />\
    <img src="styles/legend/Linea_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Linea_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Linea_No_Corresponde.png" /> No Corresponde<br />\
    <img src="styles/legend/Linea_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

var lyr_Puntos_Convenios = makeLayer('layers/ConAdmDelegada_alcantarillas.geojson', puntos_style_estado, {
    popuplayertitle: 'Convenios Administracion Delegada - Alcantarilla',
    interactive: true,
    title: 'Alcantarillas<br />\
    <img src="styles/legend/Punto_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Punto_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Punto_No_Corresponde.png" /> No Corresponde<br />\
    <img src="styles/legend/Punto_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});


// ── Obras por Terceros ──
var lyr_Areas_20 = makeLayer('layers/Reservorios y protecciones.geojson', style_Areas_20, {
    popuplayertitle: 'Obras por Terceros - Reservorios y protecciones',
    interactive: true,
    title: 'Reservorios y protecciones<br />\
    <img src="styles/legend/Areas_20_0.png" /> En Ejecucion<br />\
    <img src="styles/legend/Areas_20_1.png" /> Finalizado<br />\
    <img src="styles/legend/Areas_20_2.png" /> Sin Ejecutar<br />'
});

var lyr_Lineas_Obras = makeLayer('layers/Obras lineales.geojson', linea_style_estado, {
    popuplayertitle: 'Obras por Terceros - Obras lineales',
    interactive: true,
    title: 'Obras lineales<br />\
    <img src="styles/legend/Linea_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Linea_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Linea_No_Corresponde.png" /> No Corresponde<br />\
    <img src="styles/legend/Linea_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

var lyr_Puntos_Obras = makeLayer('layers/Infraestructura.geojson', puntos_style_estado, {
    popuplayertitle: 'Obras por Terceros - Infraestructura',
    interactive: true,
    title: 'Infraestructura<br />\
    <img src="styles/legend/Punto_En_Ejecucion.png" /> En Ejecucion<br />\
    <img src="styles/legend/Punto_Finalizado.png" /> Finalizado<br />\
    <img src="styles/legend/Punto_No_Corresponde.png" /> No Corresponde<br />\
    <img src="styles/legend/Punto_Sin_Ejecutar.png" /> Sin Ejecutar<br />'
});

// ── Visibilidad inicial ──
lyr_OSMStandard_0.setVisible(true);
lyr_DepartamentosSTAFE_1.setVisible(false);
lyr_100LocenRiesgo_2.setVisible(false);

lyr_Regiones.setVisible(false);
lyr_Cuencas.setVisible(false);

lyr_Lineas_Canales_Clandestinos.setVisible(false);
lyr_Puntos_Obras_Clandestinas.setVisible(false);


lyr_CapaBaseTroncales.setVisible(false);
lyr_Canales_Troncales_licitacion.setVisible(false);
lyr_PlanesdeObraCC2026Linea.setVisible(false);
lyr_PlanesdeObraCC2026Punto.setVisible(false);
lyr_cc_canal_ejecutado.setVisible(false);
lyr_cc_alc_ejecutado.setVisible(false);
lyr_CanalesMV.setVisible(false);
lyr_UbicacionMV.setVisible(false);
lyr_CanalesATN.setVisible(false);
lyr_PuntosATN.setVisible(false);
lyr_Lineas_Convenios.setVisible(false);
lyr_Puntos_Convenios.setVisible(false);
lyr_Areas_20.setVisible(false);
lyr_Lineas_Obras.setVisible(false);
lyr_Puntos_Obras.setVisible(false);

// ── Grupos ──
var group_MapaBase = new ol.layer.Group({
    layers: [lyr_OSMStandard_0, lyr_DepartamentosSTAFE_1],
    fold: 'close',
    title: 'Mapa Base'
});
var group_LocalidadesenRiesgo = new ol.layer.Group({
    layers: [lyr_100LocenRiesgo_2],
    fold: 'close',
    title: 'Localidades en Riesgo'
});
var group_PlanificacionHidrica = new ol.layer.Group({
    layers: [lyr_Regiones, lyr_Cuencas],
    fold: 'close',
    title: 'Planificacion Hidrica'
});
var group_TroncalesySecundarios = new ol.layer.Group({
    layers: [lyr_CapaBaseTroncales],
    fold: 'close',
    title: 'Troncales y Secundarios'
});
var group_LicitaciondeTroncales = new ol.layer.Group({
    layers: [lyr_Canales_Troncales_licitacion],
    fold: 'close',
    title: 'Licitacion de Troncales Zona Norte - Centro - Sur'
});
var group_ObrasClandestinas = new ol.layer.Group({
    layers: [lyr_Lineas_Canales_Clandestinos, lyr_Puntos_Obras_Clandestinas],
    fold: 'close',
    title: 'Obras Clandestinas en Provincia de Santa Fe'
});
var group_PlanesdeObrasdeCC2026PorEJecutar = new ol.layer.Group({
    layers: [lyr_PlanesdeObraCC2026Linea, lyr_PlanesdeObraCC2026Punto],
    fold: 'close',
    title: 'Planes de Obras de Comite de Cuenca para 2026'
});
var group_TrabajosdeCCentreEnero2024yMarzo2026 = new ol.layer.Group({
    layers: [lyr_cc_canal_ejecutado, lyr_cc_alc_ejecutado],
    fold: 'close',
    title: 'Trabajos Ejecutados por Comite de Cuencas entre Enero 2024 a Marzo 2026'
});
var group_MaquinasVolantes = new ol.layer.Group({
    layers: [lyr_CanalesMV, lyr_UbicacionMV],
    fold: 'close',
    title: 'Maquinas Volantes de la Provincia de Santa Fe'
});
var group_ATNs = new ol.layer.Group({
    layers: [lyr_CanalesATN, lyr_PuntosATN],
    fold: 'close',
    title: 'Obras por ATN'
});
var group_ConveniosdeAdmDelegada = new ol.layer.Group({
    layers: [lyr_Lineas_Convenios, lyr_Puntos_Convenios],
    fold: 'close',
    title: 'Convenios de Administración Delegada'
});
var group_ObrasporTerceros = new ol.layer.Group({
    layers: [lyr_Areas_20, lyr_Lineas_Obras, lyr_Puntos_Obras],
    fold: 'close',
    title: 'Obras por Terceros'
});

var layersList = [group_MapaBase, group_LocalidadesenRiesgo, group_PlanificacionHidrica, group_TroncalesySecundarios, group_LicitaciondeTroncales,group_ObrasClandestinas, group_PlanesdeObrasdeCC2026PorEJecutar, group_TrabajosdeCCentreEnero2024yMarzo2026, group_MaquinasVolantes, group_ATNs, group_ConveniosdeAdmDelegada, group_ObrasporTerceros];

// ── Aliases, fieldImages y fieldLabels ──
lyr_DepartamentosSTAFE_1.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag'});
lyr_100LocenRiesgo_2.set('fieldAliases', {'Localidad': 'Localidad', 'Datos': 'Datos'});

lyr_Regiones.set('fieldAliases', {'Area': 'Area', 'Perim': 'Perim', 'Nombre': 'Nombre'});
lyr_Cuencas.set('fieldAliases', {'N_CCA': 'N_CCA', 'Area': 'Area', 'Perim': 'Perim', 'Cuenca': 'Cuenca'});

lyr_Lineas_Canales_Clandestinos.set('fieldAliases', {'Nombre': 'Nombre','Código': 'Expediente', 'Tipo': 'Tipo', 'Localidad': 'Localidad', 'Dpto': 'Departamento'});
lyr_Puntos_Obras_Clandestinas.set('fieldAliases', {'Nombre': 'Nombre','Código': 'Expediente', 'Tipo': 'Tipo', 'Localidad': 'Localidad', 'Dpto': 'Departamento'});

lyr_CapaBaseTroncales.set('fieldAliases', {'Nombre': 'Nombre', 'Jerarquia': 'Jerarquia', 'CAR': 'CAR', 'GES': 'GES', 'ACT': 'ACT', 'OBS': 'OBS',});
lyr_Canales_Troncales_licitacion.set('fieldAliases', {'Nombre': 'Nombre', 'Longuitud': 'Longuitud en KM', 'Estado': 'Estado', 'Datos': 'Datos', 'Zona': 'Zona'});
lyr_PlanesdeObraCC2026Linea.set('fieldAliases', {'Nombre': 'Nombre', 'Estado': 'Estado', 'C Cuenca': 'Comite de Cuenca', 'Localidad': 'Localidad', 'Dpto': 'Departamento'});
lyr_PlanesdeObraCC2026Punto.set('fieldAliases', {'Nombre': 'Nombre', 'Estado': 'Estado', 'C Cuenca': 'Comite de Cuenca', 'Localidad': 'Localidad', 'Dpto': 'Departamento'});
lyr_cc_canal_ejecutado.set('fieldAliases', {'Nombre': 'Nombre','Datos': 'Datos','Estado': 'Estado', 'C Cuenca': 'Comite de Cuenca', 'Localidad': 'Localidad', 'Dpto': 'Departamento'});
lyr_cc_alc_ejecutado.set('fieldAliases', {'Nombre': 'Nombre','Datos': 'Datos', 'Estado': 'Estado', 'C Cuenca': 'Comite de Cuenca', 'Localidad': 'Localidad', 'Dpto': 'Departamento'});
lyr_CanalesMV.set('fieldAliases', {'Ubicacion': 'Ubicacion', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Datos': 'Datos'});
lyr_UbicacionMV.set('fieldAliases', {'Ubicacion': 'Ubicacion', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Datos': 'Datos'});
lyr_CanalesATN.set('fieldAliases', {'Ubicacion': 'Ubicacion', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Datos': 'Datos'});
lyr_PuntosATN.set('fieldAliases', {'Ubicacion': 'Ubicacion', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Datos': 'Datos'});
lyr_Lineas_Convenios.set('fieldAliases', {'Nombre': 'Nombre', 'Datos': 'Datos', 'Estado': 'Estado', 'CC/Comuna': 'CC/Comuna', 'Fecha': 'Fecha', 'Obra': 'Obra'});
lyr_Puntos_Convenios.set('fieldAliases', {'Nombre': 'Nombre', 'Datos': 'Datos', 'Estado': 'Estado', 'CC/Comuna': 'CC/Comuna', 'Fecha': 'Fecha', 'Obra': 'Obra'});
lyr_Areas_20.set('fieldAliases', {'NAME': 'NAME', 'Estado': 'Estado', 'Obra': 'Obra', 'Datos': 'Datos'});
lyr_Lineas_Obras.set('fieldAliases', {'Nombre': 'Nombre', 'Estado': 'Estado', 'Obra': 'Obra', 'Datos': 'Datos', 'Tipo': 'Tipo'});
lyr_Puntos_Obras.set('fieldAliases', {'Nombre': 'Nombre', 'Estado': 'Estado', 'Obra': 'Obra', 'Datos': 'Datos', 'Tipo': 'Tipo'});

// ──paso 2 ──

lyr_DepartamentosSTAFE_1.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit'});
lyr_100LocenRiesgo_2.set('fieldImages', {'Localidad': 'TextEdit', 'Datos': 'TextEdit'});

lyr_Regiones.set('fieldImages', {'Area': 'TextEdit', 'Perim': 'TextEdit', 'Nombre': 'TextEdit'});
lyr_Cuencas.set('fieldImages', {'N_CCA': 'TextEdit', 'Area': 'TextEdit', 'Perim': 'TextEdit', 'Cuenca': 'TextEdit'});


lyr_Lineas_Canales_Clandestinos.set('fieldImages', {'Nombre': 'TextEdit','Código': 'TextEdit', 'Tipo': 'TextEdit', 'Localidad': 'TextEdit', 'Dpto': 'TextEdit'});
lyr_Puntos_Obras_Clandestinas.set('fieldImages', {'Nombre': 'TextEdit','Código': 'TextEdit', 'Tipo': 'TextEdit', 'Localidad': 'TextEdit', 'Dpto': 'TextEdit'});

lyr_CapaBaseTroncales.set('fieldImages', {'Nombre': 'TextEdit', 'Jerarquia': 'TextEdit', 'CAR': 'TextEdit', 'GES': 'TextEdit', 'ACT': 'TextEdit', 'OBS': 'TextEdit',});
lyr_Canales_Troncales_licitacion.set('fieldImages', {'Nombre': 'TextEdit', 'Longuitud': 'Range', 'Estado': 'TextEdit', 'Datos': 'TextEdit', 'Zona': 'TextEdit'});
lyr_PlanesdeObraCC2026Linea.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'C Cuenca': 'TextEdit', 'Localidad': 'TextEdit', 'Dpto': 'TextEdit'});
lyr_PlanesdeObraCC2026Punto.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'C Cuenca': 'TextEdit', 'Localidad': 'TextEdit', 'Dpto': 'TextEdit'});
lyr_cc_canal_ejecutado.set('fieldImages', {'Nombre':'TextEdit','Datos': 'TextEdit','Estado': 'TextEdit', 'C Cuenca': 'TextEdit', 'Localidad': 'TextEdit', 'Dpto': 'TextEdit'});
lyr_cc_alc_ejecutado.set('fieldImages', {'Nombre':'TextEdit','Datos': 'TextEdit','Estado': 'TextEdit', 'C Cuenca': 'TextEdit', 'Localidad': 'TextEdit', 'Dpto': 'TextEdit'});
lyr_CanalesMV.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Ubicacion': 'TextEdit', 'Datos': 'TextEdit'});
lyr_UbicacionMV.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Ubicacion': 'TextEdit', 'Datos': 'TextEdit'});
lyr_CanalesATN.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Ubicacion': 'TextEdit', 'Datos': 'TextEdit'});
lyr_PuntosATN.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Ubicacion': 'TextEdit', 'Datos': 'TextEdit'});
lyr_Lineas_Convenios.set('fieldImages', {'Nombre': 'TextEdit', 'Datos': 'TextEdit', 'Estado': 'TextEdit', 'CC/Comuna': 'TextEdit', 'Fecha': 'TextEdit', 'Obra': 'TextEdit'});
lyr_Puntos_Convenios.set('fieldImages', {'Nombre': 'TextEdit', 'Datos': 'TextEdit', 'Estado': 'TextEdit', 'CC/Comuna': 'TextEdit', 'Fecha': 'TextEdit', 'Obra': 'TextEdit'});
lyr_Areas_20.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Obra': 'TextEdit', 'Datos': 'TextEdit'});
lyr_Lineas_Obras.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Obra': 'TextEdit', 'Datos': 'TextEdit', 'Tipo': 'TextEdit'});
lyr_Puntos_Obras.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', 'Obra': 'TextEdit', 'Datos': 'TextEdit', 'Tipo': 'TextEdit'});


// ── paso 3 ──


lyr_DepartamentosSTAFE_1.set('fieldLabels', {'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label'});
lyr_100LocenRiesgo_2.set('fieldLabels', {'Localidad': 'inline label - visible with data', 'Datos': 'inline label - visible with data'});

lyr_Regiones.set('fieldLabels', {'Area': 'header label - visible with data', 'Perim': 'header label - visible with data', 'Nombre': 'header label - visible with data'});
lyr_Cuencas.set('fieldLabels', {'N_CCA': 'header label - visible with data', 'Area': 'header label - visible with data', 'Perim': 'header label - visible with data', 'Cuenca': 'header label - visible with data'});

lyr_Lineas_Canales_Clandestinos.set('fieldLabels', {'Nombre': 'header label - visible with data','Código': 'header label - visible with data', 'Tipo': 'header label - visible with data', 'Localidad': 'header label - visible with data', 'Dpto': 'header label - visible with data'});
lyr_Puntos_Obras_Clandestinas.set('fieldLabels', {'Nombre': 'header label - visible with data','Código': 'header label - visible with data', 'Tipo': 'header label - visible with data', 'Localidad': 'header label - visible with data', 'Dpto': 'header label - visible with data'});

lyr_CapaBaseTroncales.set('fieldLabels', {'Nombre': 'header label - visible with data', 'Jerarquia': 'header label - visible with data', 'CAR': 'hidden field', 'GES': 'hidden field', 'ACT': 'inline label - always visible', 'OBS': 'hidden field'});
lyr_Canales_Troncales_licitacion.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Longuitud': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Datos': 'inline label - visible with data', 'Zona': 'inline label - visible with data'});
lyr_PlanesdeObraCC2026Linea.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'C Cuenca': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'Dpto': 'inline label - visible with data'});
lyr_PlanesdeObraCC2026Punto.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'C Cuenca': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'Dpto': 'inline label - visible with data'});
lyr_cc_canal_ejecutado.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Datos': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'C Cuenca': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'Dpto': 'inline label - visible with data'});
lyr_cc_alc_ejecutado.set('fieldLabels', {'Nombre': 'inline label - visible with data',  'Datos': 'inline label - visible with data','Estado': 'inline label - visible with data', 'C Cuenca': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'Dpto': 'inline label - visible with data'});
lyr_CanalesMV.set('fieldLabels', {'Ubicacion': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Datos': 'inline label - visible with data'});
lyr_UbicacionMV.set('fieldLabels', {'Ubicacion': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Datos': 'inline label - visible with data'});
lyr_CanalesATN.set('fieldLabels', {'Ubicacion': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Datos': 'inline label - visible with data'});
lyr_PuntosATN.set('fieldLabels', {'Ubicacion': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Datos': 'inline label - visible with data'});
lyr_Lineas_Convenios.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Datos': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'CC/Comuna': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'Obra': 'inline label - visible with data'});
lyr_Puntos_Convenios.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Datos': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'CC/Comuna': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'Obra': 'inline label - visible with data'});
lyr_Areas_20.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Obra': 'inline label - visible with data', 'Datos': 'inline label - visible with data'});
lyr_Lineas_Obras.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Obra': 'inline label - visible with data', 'Datos': 'inline label - visible with data', 'Tipo': 'inline label - visible with data'});
lyr_Puntos_Obras.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Obra': 'inline label - visible with data', 'Datos': 'inline label - visible with data', 'Tipo': 'inline label - visible with data'});

lyr_Puntos_Obras.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

