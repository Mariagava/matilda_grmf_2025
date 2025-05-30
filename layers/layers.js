var wms_layers = [];

var format_Fondo_0 = new ol.format.GeoJSON();
var features_Fondo_0 = format_Fondo_0.readFeatures(json_Fondo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fondo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fondo_0.addFeatures(features_Fondo_0);
var lyr_Fondo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fondo_0, 
                style: style_Fondo_0,
                popuplayertitle: 'Fondo',
                interactive: false,
                title: '<img src="styles/legend/Fondo_0.png" /> Fondo'
            });
var format_Curvasdenivel_1 = new ol.format.GeoJSON();
var features_Curvasdenivel_1 = format_Curvasdenivel_1.readFeatures(json_Curvasdenivel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel_1.addFeatures(features_Curvasdenivel_1);
var lyr_Curvasdenivel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvasdenivel_1, 
                style: style_Curvasdenivel_1,
                popuplayertitle: 'Curvas de nivel',
                interactive: false,
                title: '<img src="styles/legend/Curvasdenivel_1.png" /> Curvas de nivel'
            });
var lyr_Ortofoto202225cmRGBComunitatValenciana_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://terramapas.icv.gva.es/0202_2022CVAL0025",
                              attributions: ' ',
                              params: {
                                "LAYERS": "2022CVAL0025_RGB",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto 2022 25cm. RGB Comunitat Valenciana',
                            popuplayertitle: 'Ortofoto 2022 25cm. RGB Comunitat Valenciana',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofoto202225cmRGBComunitatValenciana_2, 0]);
var format_TrackMatilda2025newcopiar_3 = new ol.format.GeoJSON();
var features_TrackMatilda2025newcopiar_3 = format_TrackMatilda2025newcopiar_3.readFeatures(json_TrackMatilda2025newcopiar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrackMatilda2025newcopiar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrackMatilda2025newcopiar_3.addFeatures(features_TrackMatilda2025newcopiar_3);
var lyr_TrackMatilda2025newcopiar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrackMatilda2025newcopiar_3, 
                style: style_TrackMatilda2025newcopiar_3,
                popuplayertitle: 'Track Matilda 2025 new copiar',
                interactive: true,
                title: '<img src="styles/legend/TrackMatilda2025newcopiar_3.png" /> Track Matilda 2025 new copiar'
            });
var format_AvituallamientosMatilda2025_4 = new ol.format.GeoJSON();
var features_AvituallamientosMatilda2025_4 = format_AvituallamientosMatilda2025_4.readFeatures(json_AvituallamientosMatilda2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AvituallamientosMatilda2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvituallamientosMatilda2025_4.addFeatures(features_AvituallamientosMatilda2025_4);
var lyr_AvituallamientosMatilda2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvituallamientosMatilda2025_4, 
                style: style_AvituallamientosMatilda2025_4,
                popuplayertitle: 'Avituallamientos Matilda 2025',
                interactive: true,
                title: '<img src="styles/legend/AvituallamientosMatilda2025_4.png" /> Avituallamientos Matilda 2025'
            });
var format_Salida_5 = new ol.format.GeoJSON();
var features_Salida_5 = format_Salida_5.readFeatures(json_Salida_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salida_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salida_5.addFeatures(features_Salida_5);
var lyr_Salida_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Salida_5, 
                style: style_Salida_5,
                popuplayertitle: 'Salida',
                interactive: true,
                title: '<img src="styles/legend/Salida_5.png" /> Salida'
            });
var format_Meta_6 = new ol.format.GeoJSON();
var features_Meta_6 = format_Meta_6.readFeatures(json_Meta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meta_6.addFeatures(features_Meta_6);
var lyr_Meta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meta_6, 
                style: style_Meta_6,
                popuplayertitle: 'Meta',
                interactive: true,
                title: '<img src="styles/legend/Meta_6.png" /> Meta'
            });
var group_Mapabase = new ol.layer.Group({
                                layers: [lyr_Fondo_0,lyr_Curvasdenivel_1,lyr_Ortofoto202225cmRGBComunitatValenciana_2,],
                                fold: 'open',
                                title: 'Mapa base'});

lyr_Fondo_0.setVisible(true);lyr_Curvasdenivel_1.setVisible(true);lyr_Ortofoto202225cmRGBComunitatValenciana_2.setVisible(true);lyr_TrackMatilda2025newcopiar_3.setVisible(true);lyr_AvituallamientosMatilda2025_4.setVisible(true);lyr_Salida_5.setVisible(true);lyr_Meta_6.setVisible(true);
var layersList = [group_Mapabase,lyr_TrackMatilda2025newcopiar_3,lyr_AvituallamientosMatilda2025_4,lyr_Salida_5,lyr_Meta_6];
lyr_Fondo_0.set('fieldAliases', {'id': 'id', });
lyr_Curvasdenivel_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ficha': 'ficha', 'grupo': 'grupo', 'texto': 'texto', 'clave_top': 'clave_top', });
lyr_TrackMatilda2025newcopiar_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_AvituallamientosMatilda2025_4.set('fieldAliases', {'id': 'id', });
lyr_Salida_5.set('fieldAliases', {'id': 'id', });
lyr_Meta_6.set('fieldAliases', {'id': 'id', });
lyr_Fondo_0.set('fieldImages', {'id': 'TextEdit', });
lyr_Curvasdenivel_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'ficha': 'TextEdit', 'grupo': 'TextEdit', 'texto': 'TextEdit', 'clave_top': 'TextEdit', });
lyr_TrackMatilda2025newcopiar_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_AvituallamientosMatilda2025_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Salida_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Meta_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Fondo_0.set('fieldLabels', {'id': 'no label', });
lyr_Curvasdenivel_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ficha': 'no label', 'grupo': 'no label', 'texto': 'no label', 'clave_top': 'no label', });
lyr_TrackMatilda2025newcopiar_3.set('fieldLabels', {'name': 'hidden field', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_AvituallamientosMatilda2025_4.set('fieldLabels', {'id': 'no label', });
lyr_Salida_5.set('fieldLabels', {'id': 'no label', });
lyr_Meta_6.set('fieldLabels', {'id': 'no label', });
lyr_Meta_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});