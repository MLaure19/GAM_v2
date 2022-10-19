var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 0.516000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Group1_1 = new ol.format.GeoJSON();
var features_Group1_1 = format_Group1_1.readFeatures(json_Group1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group1_1.addFeatures(features_Group1_1);
var lyr_Group1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Group1_1, 
                style: style_Group1_1,
                interactive: true,
                title: '<img src="styles/legend/Group1_1.png" /> Group 1'
            });
var format_Group2_2 = new ol.format.GeoJSON();
var features_Group2_2 = format_Group2_2.readFeatures(json_Group2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group2_2.addFeatures(features_Group2_2);
var lyr_Group2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Group2_2, 
                style: style_Group2_2,
                interactive: true,
                title: '<img src="styles/legend/Group2_2.png" /> Group 2'
            });
var format_Group3_3 = new ol.format.GeoJSON();
var features_Group3_3 = format_Group3_3.readFeatures(json_Group3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group3_3.addFeatures(features_Group3_3);
var lyr_Group3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Group3_3, 
                style: style_Group3_3,
                interactive: true,
                title: '<img src="styles/legend/Group3_3.png" /> Group 3'
            });
var format_Group4_4 = new ol.format.GeoJSON();
var features_Group4_4 = format_Group4_4.readFeatures(json_Group4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group4_4.addFeatures(features_Group4_4);
var lyr_Group4_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Group4_4, 
                style: style_Group4_4,
                interactive: true,
                title: '<img src="styles/legend/Group4_4.png" /> Group 4'
            });
var format_Group5_5 = new ol.format.GeoJSON();
var features_Group5_5 = format_Group5_5.readFeatures(json_Group5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group5_5.addFeatures(features_Group5_5);
var lyr_Group5_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Group5_5, 
                style: style_Group5_5,
                interactive: true,
                title: '<img src="styles/legend/Group5_5.png" /> Group 5'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_Group1_1.setVisible(true);lyr_Group2_2.setVisible(true);lyr_Group3_3.setVisible(true);lyr_Group4_4.setVisible(true);lyr_Group5_5.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Group1_1,lyr_Group2_2,lyr_Group3_3,lyr_Group4_4,lyr_Group5_5];
lyr_Group1_1.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_Group2_2.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_Group3_3.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_Group4_4.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_Group5_5.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_Group1_1.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_Group2_2.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_Group3_3.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_Group4_4.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_Group5_5.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_Group1_1.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_Group2_2.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_Group3_3.set('fieldLabels', {'id': 'no label', 'si_isit': 'header label', 'sid_coordx': 'header label', 'sid_coordy': 'no label', });
lyr_Group4_4.set('fieldLabels', {'id': 'inline label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_Group5_5.set('fieldLabels', {'id': 'no label', 'si_isit': 'no label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_Group5_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});