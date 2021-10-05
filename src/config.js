/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Capes',
		editWith: 'Editar amb:',
		openWith: 'Obrir amb:',
		checkTools: 'Validation:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Node:',
		noNodesFound: 'No info trobada.',
		wayLabel: 'Via:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = false;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://mijndev.openstreetmap.nl/~ligfietser/fiets/api/interpreter/';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap Blanc i negre',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>',
				//url: 'https://toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png'
				url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN 1a Edición MTN25',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/primera-edicion-mtn?',
				params: {'LAYERS': 'MTN25'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN 1a Edición MTN50',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/primera-edicion-mtn?',
				params: {'LAYERS': 'MTN50'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '1956-1957 ES_IGN - Vol AMS Sèrie B',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'AMS_1956-1957'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: '1997-2003 ES_IGN - Sigpac',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'SIGPAC'}
			}),
			visible: false

		}),
		new ol.layer.Tile({
			title: '2017 ES_IGN - PNOA (Nord)',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2017'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2018 ES_IGN - PNOA (Est - Illes)',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2018'}
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: '2019 ES_IGN - PNOA (Sud)',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms/pnoa-historico?',
				params: {'LAYERS': 'PNOA2019'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '1945-1946 ES_CAT_ICGC - Vol AMS Sèrie A',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'ovaa10m', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
		
				new ol.layer.Tile({
			title: '2000 ES_CAT_ICGC - 1:5000 (Costa)',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2000', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),

		
				new ol.layer.Tile({
			title: '2001 ES_CAT_ICGC - 1:5000 (Centre)',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2001', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '2002 ES_CAT_ICGC - 1:5000 (Plana de Lleida i Nord)',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2002', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: '2003 ES_CAT_ICGC - 1:5000 (Lleida-Pirineus)',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2003', 'VERSION': '1.1.1'}
			}),
		}),
		
				new ol.layer.Tile({
			title: '2004 ES_CAT_ICGC - 1:5000 (Costa)',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?',
				params: {'LAYERS': 'orto5m2004', 'VERSION': '1.1.1'}
			}),
			visible: false
		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [

		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Proposed',
			query: '(nwr[~"^proposed(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00d8ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00d8ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Construction',
			query: '(nwr[~"^construction(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#00ffd1',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00ffd1',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Abandoned',
			query: '(nwr[~"^abandoned(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Històric
		{
			group: 'Generic',
			title: 'Disused',
			query: '(nwr[~"^disused(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#d4ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#d4ff00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Històric
		{
			group: 'Generic',
			title: 'Was',
			query: '(nwr[~"^was(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#710171',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(113,0,113,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#710171',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Històric
		{
			group: 'Generic',
			title: 'Old',
			query: '(nwr[~"old"~".*"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#7000ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,243,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#7000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Demolished',
			query: '(nwr[~"^demolished(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ffcd00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ffcd00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Destroyed',
			query: '(nwr[~"^destroyed(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#D00B67',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#D00B67',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Removed',
			query: '(nwr[~"^removed(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ff7000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff7000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		
		
		// Overlay: Generic
		{
			group: 'Generic',
			title: 'Razed',
			query: '(nwr[~"^razed(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ff0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},


		{
			group: 'Generic',
			title: 'Ruins',
			query: '(nwr[historic=ruins]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(113,70,1,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#714601',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 2
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Temes',
			title: 'ES_1932-1939 II Spanish Republic',
			query: '(nwr[~"^name:193[0-9]-193[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:193[0-9]-193[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 

		},
		{
			group: 'Temes',
			title: 'ES_1939-1975 Spanish Dictatorship names_date',
			query: '(nwr[~"^name:19[4-7][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:19[4-7][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'amenity': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'place:1966': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'track': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 0.5)',
								width: 4
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway:1966': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'track': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 0.5)',
								width: 4
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'waterway': {
						'stream': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 175, 246, 0.5)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'river': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 175, 246, 0.5)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 175, 246, 0.5)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'landuse': {
						'cemetery': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						})
					},
					'natural:1966': {
						'beach': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(214, 196, 152, 1.0)',
								width: 1
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							}),
							fill: new ol.style.Fill({
								color: 'rgba(214, 196, 152, 0.3)'
							})
						})
					},
					'natural': {
						'beach': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						})
					},
					'.*': {
						'.*': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
},

		{
			group: 'Temes',
			title: 'ES_2021-08-31 Finalización peajes',
			query: '(nwr[~".:20[0-2][0-9]-[0-1][0-9]-[0-3][0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ef7cff',
			style: function (feature) {
				var key_regex = /^name:202[0-4]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ef7cff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Temes',
			title: 'ES_2021-09-19',
			query: '(nwr[~".:2021-09-19$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#D00B67',
			style: function (feature) {
				var key_regex = /^building:2021-09-19$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity:2021-09-19': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building:2021-09-19': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(160, 82, 45, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(210, 105, 30, 0.3)'
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway:2021-09-19': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 4
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(168, 168, 168, 1.0)',
								width: 4
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(108, 108, 108, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'unclassified': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'secondary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 164, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'leisure:2021-09-19': {
						'swimming_pool': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 255, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(0, 0, 255, 0.3)'
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pitch': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})

						})
					},
					'natural:2021-09-19': {
						'scrub': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 128, 0, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(50, 205, 50, 0.3)'
							})
						}),
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						}),
						'water': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 255, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(0, 0, 255, 0.3)'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})

						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						}),
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(128, 128, 128, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(169, 169, 169, 0.3)'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})

						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: '2021',
			title: 'ES_2021-09-19 Erupció La Palma',
			query: '(nwr[~"^destroyed(:.*)?$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#D00B67',
			style: function (feature) {
				var key_regex = /destroyed:.$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'destroyed:amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'destroyed:building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(160, 82, 45, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(210, 105, 30, 0.3)'
							})
						})
										},
					'destroyed:place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'destroyed:highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 4
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(168, 168, 168, 1.0)',
								width: 4
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(108, 108, 108, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'unclassified': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'secondary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 164, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'destroyed:leisure': {
						'swimming_pool': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 255, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(0, 0, 255, 0.3)'
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pitch': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})

						})
					},
					'destroyed:natural': {
						'scrub': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 128, 0, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(50, 205, 50, 0.3)'
							})
						}),
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						}),
						'water': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 255, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(0, 0, 255, 0.3)'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})

						})
					},
					'destroyed:landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						}),
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(128, 128, 128, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(169, 169, 169, 0.3)'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})

						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Temes',
			title: 'DE_1961-1989_11_09 Berliner Mauer',
			query: '(nwr[~"^name:196[0-9]-198[0-9]_11_09$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:196[0-9]-198[0-9]-11-09$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'historic': {
						'yes': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 3
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Temes',
			title: 'US_MA-NY_1970 Amtrak Railroad Historic',
			query: '(nwr[~"^old_name:197[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FF8B00',
			style: function (feature) {
				var key_regex = /^old_name:197[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'railway': {
						'rail': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 139, 0, 0.5)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
							'disused': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 236, 0, 0.5)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
							'razed': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 35, 0, 0.5)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
							'abandoned': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 208, 200, 0.5)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
							'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Temes',
			title: 'US_WA 1875-1895 Old names Seattle',
			query: '(nwr[~"^old_name:1875-1895$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^old_name:1875-1895$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
		},
		{
			group: 'Temes',
			title: 'US_WI Milwaukee Historic Map',
			query: '(nwr[~"^name:1"~".*"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:1[0-9][0-9][0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 6
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 

		}
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Latest OpenStreetMap Edits per Tile
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeBo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',normal', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));

		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));

		return $.merge($.merge(edit, open), tool);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
