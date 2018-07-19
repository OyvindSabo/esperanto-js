
/* English to Esperanto */
const englishToEsperanto = (englishWord) => {
	dictionary = {
    'and': 'kaj',
		'apple': 'pomo',
		'banana': 'banano',
		'beach': 'pla^go',
		'bear': 'urso',
		'beautiful': 'bela',
		'big': 'granda',
		'car': 'auto', //the u in auto is the Esperanto u with a weird accent on top
    'cat': 'kato',
		'chair': 'se^go',
		'chameleon': '^hameleono',
		'child': 'infano',
		'coffee': 'kafo',
		'dog': 'hundo',
		'elephant': 'elefanto',
		'fast': 'rapida',
		'garden': '^gardeno',
		'guitar': 'gitaro',
		'hand': 'mano',
		'horse': '^cevalo',
		'house': 'domo',
		'jazz': '^jazo',
    'leaf': 'folio',
		'milk': 'lakto',
		'no': 'ne',
		'onion': 'cepo',
		'rice': 'rizo',
    'salt': 'salo',
    'sheep': '^safo',
    'sweet': 'dol^ca',
    'the': 'la',
		'time': 'tempo',
		'tree': 'arbo',
		'umbrella': 'ombrelo',
		'violin': 'violono',
		'window': 'fenestro',
		'yes': 'jes',
		'zebra': 'zebro',
		
	}
	return dictionary[englishWord];
}

/* Esperanto to English */
const esperantoToEnglish = (esperantoWord) => {
  dictionary = {
    'arbo': 'tree',
    'auto': 'car', //the u in auto is the Esperanto u with a weird accent on top
    'banano': 'banana',
    'bela': 'beautiful',
    'cepo': 'onion',
    '^cevalo': 'horse',
    'dol^ca': 'sweet',
    'domo': 'house',
    'elefanto': 'elephant',
    'fenestro': 'window',
    'folio': 'leaf',
    'gitaro': 'guitar',
    'granda': 'big',
    '^gardeno': 'garden',
    'hundo': 'dog',
    '^hameleono': 'chameleon',
    'infano': 'child',
    'jes': 'yes',
    '^jazo': 'jazz',
    'kafo': 'coffee',
    'kaj': 'and',
    'kato': 'cat',
    'la': 'the',
    'lakto': 'milk',
    'mano': 'hand',
    'ne': 'no',
    'ombrelo': 'umbrella',
    'pla^go': 'beach',
    'pomo': 'apple',
    'rapida': 'fast',
    'rizo': 'rice',
    'salo': 'salt',
    'se^go': 'chair',
    '^safo': 'sheep',
    'tempo': 'time',
    'urso': 'bear',
    'violono': 'violin',
    'zebro': 'zebra',
  }
  return dictionary[esperantoWord];
}

module.exports = {
	englishToEsperanto,
	esperantoToEnglish
}