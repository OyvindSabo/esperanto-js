
/** English to Esperanto */
const englishToEsperanto = (englishWord) => {
  dictionary = {
    // A
    'to aim': 'celi',
    'already': 'jam',
    'and': 'kaj',
    'to appear': 'aspekti',
    'apple': 'pomo',
    'author': 'aŭtoro',
    // B
    'banana': 'banano',
    'to be able to': 'povi',
    'to be': 'esti',
    'beach': 'plaĝo',
    'bear': 'urso',
    'beautiful': 'bela',
    'big': 'granda',
    'black': 'nigra',
    'blue': 'blua',
    'boy': 'knabo',
    'bread': 'pano',
    'brown': 'bruna',
    // C
    'car': 'aŭto',
    'cat': 'kato',
    'chair': 'seĝo',
    'chameleon': 'ĥameleono',
    'child': 'infano',
    'clean': 'pura',
    'coffee': 'kafo',
    'color': 'koloro',
    // D
    'to derive': 'derivi',
    'to desire': 'deziri',
    'to do': 'fari',
    'dog': 'hundo',
    'to drink': 'trinki',
    'dry': 'seka',
    // E
    'easy': 'facil',
    'to eat': 'manĝi',
    'eight': 'ok',
    'elephant': 'elefanto',
    'ending': 'finajo',
    'to enhance': 'plibonigi',
    'evade': 'eviti',
    'example': 'ekzemplo',
    // F
    'fast': 'rapida',
    'female': 'ino',
    'five': 'kvin',
    'four': 'kvar',
    'friend': 'amiko',
    'to fly': 'flugi',
    'for': 'por',
    // G
    'garden': 'ĝardeno',
    'to give': 'doni',
    'good': 'bona',
    'green': 'verda',
    'grey': 'griza',
    'guitar': 'gitaro',
    // H
    'hand': 'mano',
    'happy': 'feliĉa',
    'to have': 'havi',
    'he': 'li',
    'hello': 'saluton',
    'horse': 'ĉevalo',
    'house': 'domo',
    // I
    'I': 'mi',
    'it': 'ĝi',
    // J
    'jazz': 'ĵazo',
    // K
    // L
    'leaf': 'folio',
    'to like': 'ŝati',
    'long': 'longa',
    'to love': 'ami',
    // M
    'man': 'viro',
    'milk': 'lakto',
    'more': 'pli',
    'to must': 'devi',
    // N
    'name': 'nomo',
    'nigra': 'black',
    'nine': 'naŭ',
    'no': 'ne',
    // O
    'one': 'unu',
    'onion': 'cepo',
    'orange': 'oranĝkolora',
    'orange': 'oranĝo',
    // P
    'pink': 'rozkolora',
    'pizza': 'pico',
    'purple': 'purpura',
    // R
    'red': 'ruĝa',
    'rice': 'rizo',
    'rose': 'rozo',
    'to run': 'kuri',
    // S
    'salt': 'salo',
    'seven': 'sep',
    'she': 'ŝi',
    'sheep': 'ŝafo',
    'six': 'ses',
    'soft': 'mola',
    'to sleep': 'dormi',
    'sweet': 'dolĉa',
    // T
    'table': 'tablo',
    'to take steps': 'klopodi',
    'ten': 'dek',
    'that': 'tio',
    'the': 'la',
    'they': 'ili',
    'three': 'tri',
    'time': 'tempo',
    'to': 'al',
    'tree': 'arbo',
    'two': 'du',
    // U
    'umbrella': 'ombrelo',
    'until': 'ĝis',
    'to use': 'uzi',
    // V
    'violet': 'violkolora',
    'violet': 'violo',
    'violin': 'violono',
    // W
    'to walk': 'marŝi',
    'to want': 'voli',
    'warm': 'varma',
    'water': 'akvo',
    'we': 'ni',
    'what': 'kio',
    'white': 'blanka',
    'window': 'fenestro',
    'woman': 'virino',
    'word': 'vorto',
    // X
    // Y
    'yellow': 'flava',
    'yes': 'jes',
    'you': 'vi',
    'young': 'juna',
    // Z
    'zebra': 'zebro',
    'zero': 'nul',
  }
  return dictionary[englishWord];
}

/* Esperanto to English */
const esperantoToEnglish = (esperantoWord) => {
  dictionary = {
    // A
    'akvo': 'water',
    'al': 'to',
    'ami': 'to love',
    'amiko': 'friend',
    'arbo': 'tree',
    'aspekti': 'to appear',
    'aŭto': 'car',
    'aŭtoro': 'author',
    // B
    'banano': 'banana',
    'bela': 'beautiful',
    'blanka': 'white',
    'blua': 'blue',
    'bona': 'good',
    'bruna': 'brown',
    // C
    'celi': 'aim',
    'cepo': 'onion',
    // Ĉ
    'ĉevalo': 'horse',
    // D
    'dek': 'ten',
    'derivi': 'to derive',
    'devi': 'to must',
    'deziri': 'to desire',
    'dolĉa': 'sweet',
    'domo': 'house',
    'doni': 'to give',
    'dormi': 'to sleep',
    'du': 'to',
    // E
    'ekzemplo': 'example',
    'elefanto': 'elephant',
    'esti': 'to be',
    'eviti': 'to evade',
    // F
    'facil': 'easy',
    'fari': 'to do',
    'feliĉa': 'happy',
    'fenestro': 'window',
    'finajo': 'ending',
    'flava': 'yellow',
    'flugi': 'to fly',
    'folio': 'leaf',
    // G
    'gitaro': 'guitar',
    'granda': 'big',
    'griza': 'grey',
    //Ĝ
    'ĝardeno': 'garden',
    'ĝi': 'it',
    'ĝis': 'until',
    // H
    'havi': 'to have',
    'hundo': 'dog',
    // Ĥ
    'ĥameleono': 'chameleon',
    // I
    'ili': 'they',
    'infano': 'child',
    'ino': 'female',
    // j
    'jam': 'already',
    'jes': 'yes',
    'juna': 'young',
    // ĵ
    'ĵazo': 'jazz',
    // K
    'kafo': 'coffee',
    'kaj': 'and',
    'kato': 'cat',
    'kio': 'what',
    'klopodi': 'to take steps',
    'knabo': 'boy',
    'koloro': 'color',
    'kuri': 'to run',
    'kvar': 'four',
    'kvin': 'five',
    // L
    'la': 'the',
    'lakto': 'milk',
    'li': 'he',
    'longa': 'long',
    // M
    'manĝi': 'to eat',
    'mano': 'hand',
    'marŝi': 'to walk',
    'mola': 'soft',
    'mi': 'I',
    // N
    'naŭ': 'nine',
    'ne': 'no',
    'ni': 'we',
    'nomo': 'name',
    'nul': 'zero',
    // O
    'ok': 'eight',
    'ombrelo': 'umbrella',
    'oranĝkolora': 'orange',
    'oranĝo': 'orange',
    // P
    'pano': 'bread',
    'pico': 'pizza',
    'plaĝo': 'beach',
    'pli': 'more',
    'pliboniĝi': 'to enhance',
    'pomo': 'apple',
    'por': 'for',
    'povi': 'to be able to',
    'pura': 'clean',
    'purpura': 'purple',
    // R
    'rapida': 'fast',
    'rizo': 'rice',
    'rozkolora': 'pink',
    'rozo': 'rose',
    'ruĝa': 'red',
    // S
    'salo': 'salt',
    'saluton': 'hello',
    'seĝo': 'chair',
    'seka': 'dry',
    'sep': 'seven',
    'ses': 'six',
    // Ŝ
    'ŝafo': 'sheep',
    'ŝati': 'to like',
    'ŝi': 'she',
    // T
    'tablo': 'table',
    'tempo': 'time',
    'tio': 'that',
    'tri': 'three',
    'trinki': 'to drink',
    // U
    'unu': 'one',
    'urso': 'bear',
    'uzi': 'to use',
    // V
    'varma': 'warm',
    'verda': 'green',
    'vi': 'you',
    'violkolora': 'violet',
    'violo': 'violet',
    'violono': 'violin',
    'viro': 'man',
    'virino': 'woman',
    'voli': 'to want',
    'vorto': 'word',
    // Z
    'zebro': 'zebra',
  }
  return dictionary[esperantoWord];
}

module.exports = {
  englishToEsperanto,
  esperantoToEnglish
}