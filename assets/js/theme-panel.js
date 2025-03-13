let url 	= window.location.href;
let origin 	= window.location.origin;
function findStringInURL(searchString) {
    return url.includes(searchString);
}

function get_basename() {
	// Remove trailing slash if it exists
	if (url.endsWith('/')) {
		url = url.slice(0, -1);
	}
	// Get the basename
	return url.substring(url.lastIndexOf('/') + 1);
}

function ath_wp_footer_hook() {
	const awaikenThemes = {
		'elixir': {
            'html_buy_link'			: 'https://1.envato.market/ZQ79Ok',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/elixir-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/elixir/',
        },'quivox': {
            'html_buy_link'			: 'https://1.envato.market/rQP2jj',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/html-preview/quivox/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/quivox/html/',
        },'aziland': {
            'html_buy_link'			: 'https://1.envato.market/5gdkM1',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/html-preview/aziland/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/aziland/html/',
			'wp_buy_link'			: 'https://1.envato.market/QyoXqA',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/aziland/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/theme-aziland/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/aziland/'
        },'zorvixa': {
            'html_buy_link'			: 'https://1.envato.market/q43rJN',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/html-preview/zorvixa/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/zorvixa/html/',
        },'jivux': {
            'html_buy_link'			: 'https://1.envato.market/B0JVPW',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/html-preview/jivux/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/jivux/html/',
        },'fwizz': {
            'html_buy_link'			: 'https://1.envato.market/Qyrjoo',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/html-preview/fwizz/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/fwizz/html/',
        },'glimy': {
            'html_buy_link'			: 'https://1.envato.market/B0o109',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/html-preview/glimy/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/glimy/html/',
            'wp_buy_link'			: 'https://1.envato.market/3eWgYy',
            'wp_landing_page_link'	: '',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/glimy/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/glimy/'
        },'solor': {
			'html_buy_link'			: 'https://1.envato.market/JzyeqR',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/html-preview/solor/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/solor/html/',
            'wp_buy_link'			: 'https://1.envato.market/6e6KxK',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/solor/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/solor/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/solor/'
        },
		'weebix': {
			'html_buy_link'			: 'https://1.envato.market/DKxV3y', 
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/weebix-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/weebix/',
            'wp_buy_link'			: 'https://1.envato.market/Wq7m1M',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/weebix/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/weebix/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/weebix/'
        },
		'theme-aerologix': {
            'wp_buy_link'			: 'https://1.envato.market/3egDGB',
            'wp_landing_page_link'	: 'https://demo.awaikenthemes.com/landing/aerologix/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/theme-aerologix/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/aerologix/'
        },
		'aerologix': {
            'html_buy_link'			: 'https://1.envato.market/k0YBeN',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/aerologix-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/aerologix/',
			'wp_demo_link' 			: 'https://demo.awaikenthemes.com/theme-aerologix/',
        },
		'theme-medipro': {
            'wp_buy_link'			: 'https://1.envato.market/vNYR7e',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/medipro/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/theme-medipro/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/medipro/'
        },
		'medipro': {
            'html_buy_link'			: 'https://1.envato.market/xkY4Wv',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/medipro-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/medipro/',
			'wp_demo_link' 			: 'https://demo.awaikenthemes.com/theme-medipro/',
        },
		'wexico': {
			'html_buy_link'			: 'https://1.envato.market/eKYV9z',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/wexico-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/wexico/',
            'wp_buy_link'			: 'https://1.envato.market/DK7X7j',
            'wp_landing_page_link'  : 'https://demo.awaikenthemes.com/landing/wexico/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/wexico/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/wexico/'
        },
		'soare': {
			'html_buy_link'			: 'https://1.envato.market/B07Zrq',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/soare-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/soare/',
            'wp_buy_link'			: 'https://1.envato.market/5g4Ez2',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/soare/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/soare/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/soare/'
        },
		'seore': {
			'html_buy_link'			: 'https://1.envato.market/XYJEoa',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/seore-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/seore/',
            'wp_buy_link'			: 'https://1.envato.market/PyXY76',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/seore/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/seore/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/seore/'
        },
		'builtup': {
			'html_buy_link'			: 'https://1.envato.market/y2VaAy',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/builtup-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/builtup/',
            'wp_buy_link'			: 'https://1.envato.market/rQZGEj',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/builtup/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/builtup/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/builtup/'
        },
		'dentaire': {
			'html_buy_link'			: 'https://1.envato.market/oq2RPY',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/dentaire-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/dentaire/',
            'wp_buy_link'			: 'https://awaikenthemes.com/buy-dentaire/',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/dentaire/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/dentaire/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/dentaire/',
        },
		'physiocare': {
			'html_buy_link'			: 'https://1.envato.market/baZbv6',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/physiocare-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/physiocare/',
            'wp_buy_link'			: 'https://awaikenthemes.com/buy-physiocare/',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/physiocare/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/physiocare/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/physiocare/',
        },
		'novaride': {
			'html_buy_link'			: 'https://1.envato.market/21PkXG',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/novaride-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/novaride/',
            'wp_buy_link'			: 'https://1.envato.market/nLr31o',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/novaride/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/novaride/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/novaride/'
        },
		'avenix': {
			'html_buy_link'			: 'https://1.envato.market/Y9Onke',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/avenix-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/avenix/',
            'wp_buy_link'			: 'https://1.envato.market/3e2ZMr',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/avenix/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/avenix/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/avenix/'
        },
		'florax': {
			'html_buy_link'			: 'https://1.envato.market/baLNgg',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/florax-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/florax/',
            'wp_buy_link'			: 'https://1.envato.market/9g4m3Y',
            'wp_landing_page_link'  : 'https://demo.awaikenthemes.com/landing/florax/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/florax/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/florax/',
        },
		'primecare': {
			'html_buy_link'			: 'https://1.envato.market/ZQPQJk',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/primecare-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/primecare',
            'wp_buy_link'			: 'https://1.envato.market/6e2Kmb',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/primecare/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/primecare/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/primecare/',
        },
		'carefirst': {
			'html_buy_link'			: 'https://1.envato.market/VmzX1O',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/carefirst-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/carefirst/',
            'wp_buy_link'			: 'https://awaikenthemes.com/buy-carefirst/',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/carefirst/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/carefirst/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/carefirst/',
        },
		'leadz': {
			'html_buy_link'			: 'https://1.envato.market/6e29bN',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/leadz-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/leadz/',
            'wp_buy_link'			: 'https://1.envato.market/wp-leadz',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/leadz/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/leadz/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/leadz/',
        },
		'healthify': {
			'html_buy_link'			: '',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/healthify-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/healthify/',
            'wp_buy_link'			: 'https://awaikenthemes.com/buy-healthify/',
            'wp_landing_page_link'  : 'https://demo.awaikenthemes.com/landing/healthify/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/healthify/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/healthify/',
        },
		'levis': {
			'html_buy_link'			: '',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/levis-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/levis/',
            'wp_buy_link'			: 'https://1.envato.market/wp-levis',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/levis/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/levis/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/levis/',
        },
		'diggy': {
			'html_buy_link'			: 'https://1.envato.market/html-diggy',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/diggy-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/diggy/',
            'wp_buy_link'			: 'https://1.envato.market/diggy-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/diggy/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/diggy/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/diggy/',
        },
		'brixo': {
			'html_buy_link'			: 'https://1.envato.market/brixo-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/brixo-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/brixo/',
            'wp_buy_link'			: 'https://1.envato.market/brixo-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/brixo/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/brixo/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/brixo/',
        },
		'infine': {
			'html_buy_link'			: 'https://1.envato.market/infine-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/infine-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/infine/',
            'wp_buy_link'			: 'https://1.envato.market/infine-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/infine/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/infine/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/infine/',
        },
		'artistics': {
			'html_buy_link'			: 'https://1.envato.market/artistic-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/artistic-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/artistic/',
            'wp_buy_link'			: 'https://1.envato.market/artistic-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/artistic/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/artistics/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/artistics/',
        },
		'awning': {
            'html_buy_link'			: 'https://1.envato.market/awning-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/awning-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/awning/',
			'wp_buy_link'			: '',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/awning/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/awning/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/awning/',
        },
		'toplax': {
			'html_buy_link'			: 'https://1.envato.market/toplax-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/toplax-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/toplax/',
            'wp_buy_link'			: 'https://1.envato.market/toplax-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/toplax/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/toplax/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/toplax/',
        },
		'hipno': {
			'html_buy_link'			: 'https://1.envato.market/hipno-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/hipno-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/hipno/',
            'wp_buy_link'			: 'https://1.envato.market/hipno-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/hipno/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/hipno/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/hipno/',
        },
		'netto': {
			'html_buy_link'			: '',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/netto-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/netto/',
            'wp_buy_link'			: 'https://1.envato.market/netto-wp',
            'wp_landing_page_link'	: 'https://demo.awaikenthemes.com/landing/netto/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/netto/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/netto/',
        },
		'inspaire': {
            'html_buy_link'			: 'https://1.envato.market/inspairehtml',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/inspaire-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/inspaire/',
			'wp_buy_link'			: 'https://1.envato.market/inspaire-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/inspaire/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/inspaire/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/inspaire/',
        },
		'hetch': {
            'html_buy_link'			: 'https://1.envato.market/html-hetch',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/hetch-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/hetch/',
			'wp_buy_link'			: 'https://1.envato.market/hetch-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/hetch/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/hetch/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/hetch/',
        },
		'rovex': {
            'html_buy_link'			: 'https://1.envato.market/rovex-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/rovex-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/rovex/',
			'wp_buy_link'			: 'https://1.envato.market/rovex-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/rovex/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/rovex/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/rovex/',
        },
		'diyer': {
            'html_buy_link'			: 'https://1.envato.market/diyer-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/diyer-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/diyer/',
			'wp_buy_link'			: 'https://1.envato.market/diyer-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/diyer/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/diyer/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/diyer/',
        },
		'dispnsary': {
            'html_buy_link'			: 'https://1.envato.market/dispnsary-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/dispnsary-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/dispnsary/',
			'wp_buy_link'			: 'https://1.envato.market/dispnsary-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/dispnsary/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/dispnsary/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/dispnsary/',
        },
		'fintech': {
            'html_buy_link'			: 'https://1.envato.market/fintech-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/fintech-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/fintech/',
			'wp_buy_link'			: '',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/fintech/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/fintech/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/fintech/',
        },
		'imigo': {
            'html_buy_link'			: 'https://1.envato.market/imigo-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/imigo-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/imigo/',
			'wp_buy_link'			: 'https://1.envato.market/imigo-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/imigo/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/imigo/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/imigo/',
        },
		'inclub': {
            'html_buy_link'			: 'https://1.envato.market/inclub-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/inclub-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/inclub/',
			'wp_buy_link'			: 'https://1.envato.market/inclub-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/inclub/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/inclub/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/inclub/',
        },
		'flexipath': {
            'html_buy_link'			: 'https://1.envato.market/flexipath-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/flexipath-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/flexipath/',
			'wp_buy_link'			: 'https://1.envato.market/flexipath-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/flexipath/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/flexipath/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/flexipath/',
        },
		'cloudz': {
            'html_buy_link'			: 'https://1.envato.market/cloudz-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/cloudz-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/cloudz/',
			'wp_buy_link'			: 'https://1.envato.market/cloudz-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/cloudz/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/cloudz/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/cloudz/',
        },
		'spicyhunt': {
            'html_buy_link'			: 'https://1.envato.market/spicyhunt-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/spicyhunt-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/spicyhunt/',
			'wp_buy_link'			: 'https://1.envato.market/spicyhunt-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/spicyhunt/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/spicyhunt/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/spicyhunt/',
        },
		'corprate': {
            'html_buy_link'			: 'https://1.envato.market/corprate-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/corprate-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/corprate/',
			'wp_buy_link'			: 'https://1.envato.market/corprate-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/corprate/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/corprate/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/corprate/',
        },
		'statecraft': {
            'html_buy_link'			: 'https://1.envato.market/statecraft-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/statecraft-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/statecraft/',
			'wp_buy_link'			: 'https://1.envato.market/statecraft-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/statecraft/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/statecraft/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/statecraft/',
        },
		'lenity': {
            'html_buy_link'			: 'https://1.envato.market/lenity-html',
            'html_landing_page_link': 'https://demo.awaikenthemes.com/landing/lenity-html/',
            'html_demo_link' 		: 'https://demo.awaikenthemes.com/html-preview/lenity/',
			'wp_buy_link'			: 'https://1.envato.market/lenity-wp',
            'wp_landing_page_link' 	: 'https://demo.awaikenthemes.com/landing/lenity/',
            'wp_demo_link' 			: 'https://demo.awaikenthemes.com/lenity/',
            'wp_doc_link'			: 'https://docs.awaikenthemes.com/lenity/',
        },
    };

    let buy_link 	= '';
    let doc_link 	= '';
    let demo_link 	= '';
    let item_name 	= '';
    let item_type 	= '';
    let wp_demo 	= '';
	


	
	if(findStringInURL('html-preview')) {
		item_name = url.split('/html-preview/')[1]?.split('/')[0];
		item_type	=	'html';
	}
	else{
		item_name =   url.replace(origin + '/', '').split('/')[0];
		item_type =   'wp';
	}
	

		
    if (awaikenThemes[item_name]) {
		
        buy_link = awaikenThemes[item_name][item_type+'_buy_link'];
		

        if (awaikenThemes[item_name][item_type+'_doc_link']) {
            doc_link = awaikenThemes[item_name][item_type+'_doc_link'];
        }
        
        if (awaikenThemes[item_name][item_type+'_demo_link']) {
            demo_link = awaikenThemes[item_name][item_type+'_demo_link'];
        }
		
		 if (item_type == 'html' && awaikenThemes[item_name]['wp_demo_link']) {
            wp_demo = awaikenThemes[item_name]['wp_demo_link'];
         }
 
        const themePanel = `
		<div class="explore_theme_panel">
			${doc_link ? `<a href="${doc_link}" target="_blank" title="Documentation"><i class="fas fa-file-lines"></i></a>` : ''}
			<a href="${buy_link}" target="_blank" title="Buy Now"><i class="fas fa-cart-shopping"></i></a> ${wp_demo ? `<a href="${wp_demo}" target="_blank" title="WordPress Theme Demo"><i class="fa-brands fa-wordpress"></i></a>` : ''}</div>
			<style type="text/css">
				.explore_theme_panel {
					width: 50px;
					position: fixed;
					top: 50%;
					right: 0;
					background: #fff;
					transform: translateY(-50%);
					border-top: 1px solid #e8e8e8;
					border-left: 1px solid #e8e8e8;
					border-bottom: 1px solid #e8e8e8;
					border-radius: 10px 0 0 10px;
					z-index: 10000;
				}
				.explore_theme_panel a {
					position: relative;
					width: 50px;
					height: 50px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 22px;
					color: #333;
					transition: all 0.4s ease-in-out;
					border-bottom: 1px solid #e8e8e8;
				}
				.explore_theme_panel a:last-child {
					border-bottom: none;
				}
				.demo-theme-popup {
  width: 390px;
  height: 120px;
  background: #FFF;
  bottom: 20px;
  right: -390px;
  position: fixed;
  border-radius: 5px;
  border:1px solid #0000001f;
  transition: 0.5s;
  z-index: 999;
  padding:35px 20px;
  color: #707070;
  font-size: 16px;
  text-align: center;
}
.demo-theme-popup a {
    font-weight: bold;
    color: #000;
    text-decoration: underline;
}

.dtp-close {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 500;
}

.dtp-ns-close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 4px;
  top: 4px;
  overflow: hidden;
  text-indent: 100%;
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.dtp-ns-close:hover, .dtp-ns-close:focus {
  outline: none;
}
.dtp-ns-close::before, .dtp-ns-close::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 60%;
  top: 50%;
  left: 50%;
  background: #fff;
}
.dtp-ns-close:hover::before, .dtp-ns-close:hover::after {
  background: #fff;
}
.dtp-ns-close::before {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
.dtp-ns-close::after {
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}

@keyframes dtp-bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.dtp-bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@media (max-width: 728px) {
  .demo-theme-popup {
    width: 280px;
  }
}
			</style>`;
			document.body.insertAdjacentHTML('beforeend', themePanel);

         // Select all elements with the .buy-link class
        const buyLinkElements = document.querySelectorAll('.buy-link');
    
        // Loop through each element and set the href attribute
        buyLinkElements.forEach(element => {
            element.href = buy_link;
        });
        
        // Select all elements with the .demo-link class
        const demoLinkElements = document.querySelectorAll('.demo-link');
    
        // Loop through each element and set the href attribute
        demoLinkElements.forEach(element => {
            element.href = demo_link;
        });

    
	if (wp_demo) {
		
		/* Popup */
		  var popup = document.createElement("div");
			popup.classList.add("demo-theme-popup");
			popup.innerHTML = `<div class="">
    <div class="dtp-close dtp-ns-close"></div>
	Looking For WordPress Theme? <br> <a href="${wp_demo}" target="_blank" title="WordPress Theme Demo">View Demo</a>
  </div>`;
			document.body.appendChild(popup);
		
			window.addEventListener("scroll", function() {
				const threshold = 1000;
			    if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight - threshold)) {
					popup.style.right = "20px";
				} else {
					popup.style.right = "-390px";
				}
			});

			document.querySelector('.dtp-close').addEventListener("click", function() {
				document.querySelector('.dtp-popup').style.display = "none";
			});
		/* Popup */
	}
	
	}
	
}

document.addEventListener("DOMContentLoaded", ath_wp_footer_hook);
