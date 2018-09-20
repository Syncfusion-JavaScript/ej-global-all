ej.addCulture( "gu-IN", {
	name: "gu-IN",
	englishName: "Gujarati (India)",
	nativeName: "ગુજરાતી (ભારત)",
	language: "gu",
	numberFormat: {
		pattern: ['-n'],
		groupSizes: [3,2],
		',': ',',
		'.': '.',
		percent: {
			pattern: ['-n%','n%'],
			groupSizes: [3,2],
			',':',',
			'.':'.',
			symbol: '%'
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3,2],
			',': ',',
			'.': '.',
			symbol: "₹"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["રવિવાર","સોમવાર","મંગળવાર","બુધવાર","ગુરુવાર","શુક્રવાર","શનિવાર"],
				namesAbbr: ["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],
				namesShort: ["ર","સો","મં","બુ","ગુ","શુ","શ"]
			},
			months: {
				names: ["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટેમ્બર","ઑક્ટોબર","નવેમ્બર","ડિસેમ્બર",""],
				namesAbbr: ["જાન્યુ","ફેબ્રુ","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગ","સપ્ટે","ઑક્ટો","નવે","ડિસે",""]
			},
			AM: ["પૂર્વ મધ્યાહ્ન","પૂર્વ મધ્યાહ્ન","પૂર્વ મધ્યાહ્ન"],
			PM: ["ઉત્તર મધ્યાહ્ન","ઉત્તર મધ્યાહ્ન","ઉત્તર મધ્યાહ્ન"],
			eras: [{"name":"ઈસ્વી","start":null,"offset":0}],
			patterns: {
				d: "dd-MM-yy",
				D: "dd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy HH:mm",
				F: "dd MMMM yyyy HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});