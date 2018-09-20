ej.addCulture( "ga-IE", {
	name: "ga-IE",
	englishName: "Irish (Ireland)",
	nativeName: "Gaeilge (Éire)",
	language: "ga",
	numberFormat: {
		pattern: ['-n'],
		',': ',',
		'.': '.',
		groupSizes: [3],
		"NaN": "nach uimhir",
		negativeInfinity: "Éigríoch dhiúltach",
		positiveInfinity: "Éigríoch dheimhneach",
		percent: {
			pattern: ["-n%","n%"],
			',': ',',
			'.': '.',
			groupSizes: [3],
			symbol: '%'
		},
		currency: {
			pattern: ["-$n","$n"],
			',': ',',
			'.': '.',
			groupSizes: [3],
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			'/': '/',
	        ':': ':',
			firstDay: 1,
			days: {
				names: ["Domhnach","Luan","Máirt","Céadaoin","Déardaoin","Aoine","Satharn"],
				namesAbbr: ["Domh","Luan","Máirt","Céad","Déar","Aoi","Sath"],
				namesShort: ["Do","Lu","Má","Cé","De","Ao","Sa"]
			},
			months: {
				names: ["Eanáir","Feabhra","Márta","Aibreán","Bealtaine","Meitheamh","Iúil","Lúnasa","Meán Fómhair","Deireadh Fómhair","Samhain","Nollaig",""],
				namesAbbr: ["Ean","Feabh","Már","Aib","Bealt","Meith","Iúil","Lún","M.Fómh","D.Fómh","Samh","Noll",""]
			},
			AM: ["r.n.","r.n.","R.N."],
			PM: ["i.n.","i.n.","I.N."],
			patterns: {
				d: "dd/MM/yyyy",
				D: "d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy HH:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});