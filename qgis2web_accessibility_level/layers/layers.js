var wms_layers = [];

var format_MSOA2011CensusGreaterManchester_0 = new ol.format.GeoJSON();
var features_MSOA2011CensusGreaterManchester_0 = format_MSOA2011CensusGreaterManchester_0.readFeatures(json_MSOA2011CensusGreaterManchester_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSOA2011CensusGreaterManchester_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSOA2011CensusGreaterManchester_0.addFeatures(features_MSOA2011CensusGreaterManchester_0);
var lyr_MSOA2011CensusGreaterManchester_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MSOA2011CensusGreaterManchester_0, 
                style: style_MSOA2011CensusGreaterManchester_0,
                interactive: true,
                title: '<img src="styles/legend/MSOA2011CensusGreaterManchester_0.png" /> MSOA 2011 Census Greater Manchester'
            });
var format_Within45mins_1 = new ol.format.GeoJSON();
var features_Within45mins_1 = format_Within45mins_1.readFeatures(json_Within45mins_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within45mins_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within45mins_1.addFeatures(features_Within45mins_1);
var lyr_Within45mins_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within45mins_1, 
                style: style_Within45mins_1,
                interactive: false,
    title: 'Within 45 mins<br />\
    <img src="styles/legend/Within45mins_1_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within45mins_1_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within45mins_1_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within45mins_1_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within45mins_1_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within45mins_1_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within45mins_1_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within45mins_1_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within45mins_1_8.png" /> From All Centres<br />'
        });
var format_Within40mins_2 = new ol.format.GeoJSON();
var features_Within40mins_2 = format_Within40mins_2.readFeatures(json_Within40mins_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within40mins_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within40mins_2.addFeatures(features_Within40mins_2);
var lyr_Within40mins_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within40mins_2, 
                style: style_Within40mins_2,
                interactive: false,
    title: 'Within 40 mins<br />\
    <img src="styles/legend/Within40mins_2_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within40mins_2_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within40mins_2_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within40mins_2_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within40mins_2_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within40mins_2_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within40mins_2_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within40mins_2_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within40mins_2_8.png" /> From All Centres<br />'
        });
var format_Within35mins_3 = new ol.format.GeoJSON();
var features_Within35mins_3 = format_Within35mins_3.readFeatures(json_Within35mins_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within35mins_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within35mins_3.addFeatures(features_Within35mins_3);
var lyr_Within35mins_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within35mins_3, 
                style: style_Within35mins_3,
                interactive: false,
    title: 'Within 35 mins<br />\
    <img src="styles/legend/Within35mins_3_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within35mins_3_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within35mins_3_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within35mins_3_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within35mins_3_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within35mins_3_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within35mins_3_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within35mins_3_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within35mins_3_8.png" /> From All Centres<br />'
        });
var format_Within30mins_4 = new ol.format.GeoJSON();
var features_Within30mins_4 = format_Within30mins_4.readFeatures(json_Within30mins_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within30mins_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within30mins_4.addFeatures(features_Within30mins_4);
var lyr_Within30mins_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within30mins_4, 
                style: style_Within30mins_4,
                interactive: false,
    title: 'Within 30 mins<br />\
    <img src="styles/legend/Within30mins_4_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within30mins_4_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within30mins_4_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within30mins_4_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within30mins_4_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within30mins_4_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within30mins_4_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within30mins_4_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within30mins_4_8.png" /> From All Centres<br />'
        });
var format_Within25mins_5 = new ol.format.GeoJSON();
var features_Within25mins_5 = format_Within25mins_5.readFeatures(json_Within25mins_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within25mins_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within25mins_5.addFeatures(features_Within25mins_5);
var lyr_Within25mins_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within25mins_5, 
                style: style_Within25mins_5,
                interactive: false,
    title: 'Within 25 mins<br />\
    <img src="styles/legend/Within25mins_5_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within25mins_5_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within25mins_5_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within25mins_5_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within25mins_5_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within25mins_5_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within25mins_5_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within25mins_5_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within25mins_5_8.png" /> From All Centres<br />'
        });
var format_Within20mins_6 = new ol.format.GeoJSON();
var features_Within20mins_6 = format_Within20mins_6.readFeatures(json_Within20mins_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within20mins_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within20mins_6.addFeatures(features_Within20mins_6);
var lyr_Within20mins_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within20mins_6, 
                style: style_Within20mins_6,
                interactive: false,
    title: 'Within 20 mins<br />\
    <img src="styles/legend/Within20mins_6_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within20mins_6_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within20mins_6_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within20mins_6_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within20mins_6_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within20mins_6_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within20mins_6_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within20mins_6_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within20mins_6_8.png" /> From All Centres<br />'
        });
var format_Within15mins_7 = new ol.format.GeoJSON();
var features_Within15mins_7 = format_Within15mins_7.readFeatures(json_Within15mins_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within15mins_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within15mins_7.addFeatures(features_Within15mins_7);
var lyr_Within15mins_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within15mins_7, 
                style: style_Within15mins_7,
                interactive: false,
    title: 'Within 15 mins<br />\
    <img src="styles/legend/Within15mins_7_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within15mins_7_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within15mins_7_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within15mins_7_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within15mins_7_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within15mins_7_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within15mins_7_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within15mins_7_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within15mins_7_8.png" /> From All Centres<br />'
        });
var format_Within10mins_8 = new ol.format.GeoJSON();
var features_Within10mins_8 = format_Within10mins_8.readFeatures(json_Within10mins_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within10mins_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within10mins_8.addFeatures(features_Within10mins_8);
var lyr_Within10mins_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within10mins_8, 
                style: style_Within10mins_8,
                interactive: false,
    title: 'Within 10 mins<br />\
    <img src="styles/legend/Within10mins_8_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within10mins_8_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within10mins_8_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within10mins_8_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within10mins_8_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within10mins_8_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within10mins_8_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within10mins_8_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within10mins_8_8.png" /> From All Centres<br />'
        });
var format_Within5mins_9 = new ol.format.GeoJSON();
var features_Within5mins_9 = format_Within5mins_9.readFeatures(json_Within5mins_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Within5mins_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Within5mins_9.addFeatures(features_Within5mins_9);
var lyr_Within5mins_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Within5mins_9, 
                style: style_Within5mins_9,
                interactive: false,
    title: 'Within 5 mins<br />\
    <img src="styles/legend/Within5mins_9_0.png" /> From Manchester City Centre<br />\
    <img src="styles/legend/Within5mins_9_1.png" /> From Manchester Airport<br />\
    <img src="styles/legend/Within5mins_9_2.png" /> From Stockport<br />\
    <img src="styles/legend/Within5mins_9_3.png" /> From Tameside<br />\
    <img src="styles/legend/Within5mins_9_4.png" /> From Trafford<br />\
    <img src="styles/legend/Within5mins_9_5.png" /> From 2 Centres<br />\
    <img src="styles/legend/Within5mins_9_6.png" /> From 3 Centres<br />\
    <img src="styles/legend/Within5mins_9_7.png" /> From 4 Centres<br />\
    <img src="styles/legend/Within5mins_9_8.png" /> From All Centres<br />'
        });
var format_EmploymentCentres_10 = new ol.format.GeoJSON();
var features_EmploymentCentres_10 = format_EmploymentCentres_10.readFeatures(json_EmploymentCentres_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmploymentCentres_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmploymentCentres_10.addFeatures(features_EmploymentCentres_10);
var lyr_EmploymentCentres_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EmploymentCentres_10, 
                style: style_EmploymentCentres_10,
                interactive: false,
    title: 'Employment Centres<br />\
    <img src="styles/legend/EmploymentCentres_10_0.png" /> Manchester City Centre<br />\
    <img src="styles/legend/EmploymentCentres_10_1.png" /> Manchester Airport<br />\
    <img src="styles/legend/EmploymentCentres_10_2.png" /> Stockport<br />\
    <img src="styles/legend/EmploymentCentres_10_3.png" /> Tameside<br />\
    <img src="styles/legend/EmploymentCentres_10_4.png" /> Trafford<br />'
        });

lyr_MSOA2011CensusGreaterManchester_0.setVisible(true);lyr_Within45mins_1.setVisible(false);lyr_Within40mins_2.setVisible(false);lyr_Within35mins_3.setVisible(false);lyr_Within30mins_4.setVisible(false);lyr_Within25mins_5.setVisible(false);lyr_Within20mins_6.setVisible(false);lyr_Within15mins_7.setVisible(false);lyr_Within10mins_8.setVisible(false);lyr_Within5mins_9.setVisible(false);lyr_EmploymentCentres_10.setVisible(true);
var layersList = [lyr_MSOA2011CensusGreaterManchester_0,lyr_Within45mins_1,lyr_Within40mins_2,lyr_Within35mins_3,lyr_Within30mins_4,lyr_Within25mins_5,lyr_Within20mins_6,lyr_Within15mins_7,lyr_Within10mins_8,lyr_Within5mins_9,lyr_EmploymentCentres_10];
lyr_MSOA2011CensusGreaterManchester_0.set('fieldAliases', {'Geocode': 'Geocode', 'Zone': 'Zone', });
lyr_Within45mins_1.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_Within40mins_2.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_Within35mins_3.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_Within30mins_4.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_Within25mins_5.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_Within20mins_6.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_Within15mins_7.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_Within10mins_8.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_Within5mins_9.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'under': 'under', });
lyr_EmploymentCentres_10.set('fieldAliases', {'objectid': 'objectid', 'msoa11cd': 'msoa11cd', 'msoa11nm': 'msoa11nm', 'msoa11nmw': 'msoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'centre': 'centre', });
lyr_MSOA2011CensusGreaterManchester_0.set('fieldImages', {'Geocode': 'TextEdit', 'Zone': 'TextEdit', });
lyr_Within45mins_1.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_Within40mins_2.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_Within35mins_3.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_Within30mins_4.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_Within25mins_5.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_Within20mins_6.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_Within15mins_7.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_Within10mins_8.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_Within5mins_9.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'under': 'Range', });
lyr_EmploymentCentres_10.set('fieldImages', {'objectid': 'Range', 'msoa11cd': 'TextEdit', 'msoa11nm': 'TextEdit', 'msoa11nmw': 'TextEdit', 'st_areasha': 'TextEdit', 'st_lengths': 'TextEdit', 'centre': 'Range', });
lyr_MSOA2011CensusGreaterManchester_0.set('fieldLabels', {'Geocode': 'header label', 'Zone': 'header label', });
lyr_Within45mins_1.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_Within40mins_2.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_Within35mins_3.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_Within30mins_4.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_Within25mins_5.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_Within20mins_6.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_Within15mins_7.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_Within10mins_8.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_Within5mins_9.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'under': 'no label', });
lyr_EmploymentCentres_10.set('fieldLabels', {'objectid': 'no label', 'msoa11cd': 'no label', 'msoa11nm': 'no label', 'msoa11nmw': 'no label', 'st_areasha': 'no label', 'st_lengths': 'no label', 'centre': 'no label', });
lyr_EmploymentCentres_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});