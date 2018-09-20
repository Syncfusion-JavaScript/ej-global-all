ej.addCulture( "bs", {
	name: "bs",
	englishName: "Bosnian",
	nativeName: "bosanski",
	language: "bs",
	numberFormat: {
		",": ".",
		".": ",",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "KM"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],
				namesAbbr: ["ned","pon","uto","sri","čet","pet","sub"],
				namesShort: ["ne","po","ut","sr","če","pe","su"]
			},
			months: {
				names: ["januar","februar","mart","april","maj","juni","juli","august","septembar","oktobar","novembar","decembar",""],
				namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy",
				D: "d. MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy H:mm",
				F: "d. MMMM yyyy H:mm:ss",
				M: "dd. MMMM"
			}
		}
	}
});
