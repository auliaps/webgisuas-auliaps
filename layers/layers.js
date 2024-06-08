var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriNationalGeographic_1 = new ol.layer.Tile({
            'title': 'Esri National Geographic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PenggunaanLahan_3 = new ol.format.GeoJSON();
var features_PenggunaanLahan_3 = format_PenggunaanLahan_3.readFeatures(json_PenggunaanLahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahan_3.addFeatures(features_PenggunaanLahan_3);
var lyr_PenggunaanLahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanLahan_3, 
                style: style_PenggunaanLahan_3,
                popuplayertitle: "Penggunaan Lahan",
                interactive: true,
    title: 'Penggunaan Lahan<br />\
    <img src="styles/legend/PenggunaanLahan_3_0.png" /> Danau<br />\
    <img src="styles/legend/PenggunaanLahan_3_1.png" /> Hutan Lahan Rendah<br />\
    <img src="styles/legend/PenggunaanLahan_3_2.png" /> Hutan Lahan Tinggi<br />\
    <img src="styles/legend/PenggunaanLahan_3_3.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/PenggunaanLahan_3_4.png" /> Ladang<br />\
    <img src="styles/legend/PenggunaanLahan_3_5.png" /> Lahan Kosong<br />\
    <img src="styles/legend/PenggunaanLahan_3_6.png" /> Permukiman<br />'
        });
var format_BatasAdministrasiKotaBogor_4 = new ol.format.GeoJSON();
var features_BatasAdministrasiKotaBogor_4 = format_BatasAdministrasiKotaBogor_4.readFeatures(json_BatasAdministrasiKotaBogor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKotaBogor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKotaBogor_4.addFeatures(features_BatasAdministrasiKotaBogor_4);
var lyr_BatasAdministrasiKotaBogor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKotaBogor_4, 
                style: style_BatasAdministrasiKotaBogor_4,
                popuplayertitle: "Batas Administrasi Kota Bogor",
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKotaBogor_4.png" /> Batas Administrasi Kota Bogor'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_EsriNationalGeographic_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_PenggunaanLahan_3.setVisible(true);lyr_BatasAdministrasiKotaBogor_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_EsriNationalGeographic_1,lyr_OpenStreetMap_2,lyr_PenggunaanLahan_3,lyr_BatasAdministrasiKotaBogor_4];
lyr_PenggunaanLahan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PengLahan': 'PengLahan', 'Shape_Leng': 'Shape_Leng', 'Luas_Ha': 'Luas_Ha', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', 'SKORING': 'SKORING', });
lyr_BatasAdministrasiKotaBogor_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_PenggunaanLahan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'PengLahan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', 'SKORING': 'TextEdit', });
lyr_BatasAdministrasiKotaBogor_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_PenggunaanLahan_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PengLahan': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'InPoly_FID': 'inline label - always visible', 'SKORING': 'inline label - always visible', });
lyr_BatasAdministrasiKotaBogor_4.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', });
lyr_BatasAdministrasiKotaBogor_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});