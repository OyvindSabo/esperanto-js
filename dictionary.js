
/** English to Esperanto */
const englishToEsperanto = (englishWord) => {
  dictionary = {
    // A
    'to aim': 'celi',
    'already': 'jam',
    'and': 'kaj',
    'to appear': 'aspekti',
    'apple': 'pomo',
    'author': 'autoro', //the u in autoro is the Esperanto u with a weird accent on top
    // B
    'banana': 'banano',
    'to be able to': 'povi',
    'bread': 'pano',
    'boy': 'knabo',
    'to be': 'esti',
    'beach': 'pla^go',
    'bear': 'urso',
    'beautiful': 'bela',
    'big': 'granda',
    // C
    'car': 'auto', //the u in auto is the Esperanto u with a weird accent on top
    'cat': 'kato',
    'chair': 'se^go',
    'chameleon': '^hameleono',
    'child': 'infano',
    'clean': 'pura',
    'coffee': 'kafo',
    // D
    'to derive': 'derivi',
    'to do': 'fari',
    'dog': 'hundo',
    'to drink': 'trinki',
    'dry': 'seka',
    // E
    'easy': 'facil',
    'to eat': 'man^gi',
    'elephant': 'elefanto',
    'ending': 'finajo',
    'to enhance': 'plibonigi',
    'evade': 'eviti',
    'example': 'ekzemplo',
    // F
    'fast': 'rapida',
    'female': 'ino',
    'friend': 'amiko',
    'to fly': 'flugi',
    'for': 'por',
    // G
    'garden': '^gardeno',
    'to give': 'doni',
    'good': 'bona',
    'guitar': 'gitaro',
    // H
    'hand': 'mano',
    'happy': 'feli^ca',
    'to have': 'havi',
    'he': 'li',
    'horse': '^cevalo',
    'house': 'domo',
    // I
    'I': 'mi',
    'it': '^gi',
    // J
    'jazz': '^jazo',
    // K
    // L
    'leaf': 'folio',
    'to like': '^sati',
    'long': 'longa',
    'to love': 'ami',
    // M
    'man': 'viro',
    'milk': 'lakto',
    'more': 'pli',
    // N
    'name': 'nomo',
    'no': 'ne',
    // O
    'onion': 'cepo',
    // P
    'pizza': 'pico',
    // R
    'rice': 'rizo',
    'to run': 'kuri',
    // S
    'salt': 'salo',
    'she': '^si',
    'sheep': '^safo',
    'soft': 'mola',
    'to sleep': 'dormi',
    'sweet': 'dol^ca',
    // T
    'table': 'tablo',
    'to take steps': 'klopodi',
    'that': 'tio',
    'the': 'la',
    'they': 'ili',
    'time': 'tempo',
    'to': 'al',
    'tree': 'arbo',
    // U
    'umbrella': 'ombrelo',
    'until': '^gis',
    'to use': 'uzi',
    // V
    'violin': 'violono',
    // W
    'to walk': 'mar^si',
    'warm': 'varma',
    'water': 'akvo',
    'we': 'ni',
    'what': 'kio',
    'window': 'fenestro',
    'woman': 'virino',
    'word': 'vorto',
    // X
    // Y
    'yes': 'jes',
    'you': 'vi',
    'young': 'juna',
    // Z
    'zebra': 'zebro',
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
    'auto': 'car', //the u in auto is the Esperanto u with a weird accent on top
    'autoro': 'author', //the u in autoro is the Esperanto u with a weird accent on top
    // B
    'banano': 'banana',
    'bela': 'beautiful',
    'bona': 'good',
    // C
    'celi': 'aim',
    'cepo': 'onion',
    // ^C
    '^cevalo': 'horse',
    // D
    'derivi': 'to derive',
    'dol^ca': 'sweet',
    'domo': 'house',
    'doni': 'to give',
    'dormi': 'to sleep',
    // E
    'ekzemplo': 'example',
    'elefanto': 'elephant',
    'esti': 'to be',
    'eviti': 'to evade',
    // F
    'facil': 'easy',
    'fari': 'to do',
    'feli^ca': 'happy',
    'fenestro': 'window',
    'finajo': 'ending',
    'flugi': 'to fly',
    'folio': 'leaf',
    // G
    'gitaro': 'guitar',
    'granda': 'big',
    //^G
    '^gardeno': 'garden',
    '^gi': 'it',
    '^gis': 'until',
    // H
    'havi': 'to have',
    'hundo': 'dog',
    // ^H
    '^hameleono': 'chameleon',
    // I
    'ili': 'they',
    'infano': 'child',
    'ino': 'female',
    // j
    'jam': 'already',
    'jes': 'yes',
    'juna': 'young',
    '^jazo': 'jazz',
    // K
    'kafo': 'coffee',
    'kaj': 'and',
    'kato': 'cat',
    'kio': 'what',
    'klopodi': 'to take steps',
    'knabo': 'boy',
    'kuri': 'to run',
    // L
    'la': 'the',
    'lakto': 'milk',
    'li': 'he',
    'longa': 'long',
    // M
    'man^gi': 'to eat',
    'mano': 'hand',
    'mar^si': 'to walk',
    'mola': 'soft',
    'mi': 'I',
    // N
    'ni': 'we',
    'ne': 'no',
    'nomo': 'name',
    // O
    'ombrelo': 'umbrella',
    // P
    'pano': 'bread',
    'pico': 'pizza',
    'pla^go': 'beach',
    'pli': 'more',
    'pliboni^gi': 'to enhance',
    'pomo': 'apple',
    'por': 'for',
    'povi': 'to be able to',
    'pura': 'clean',
    // R
    'rapida': 'fast',
    'rizo': 'rice',
    // S
    'salo': 'salt',
    'se^go': 'chair',
    'seka': 'dry',
    // ^S
    '^safo': 'sheep',
    '^sati': 'to like',
    '^si': 'she',
    // T
    'tablo': 'table',
    'tempo': 'time',
    'tio': 'that',
    'trinki': 'to drink',
    // U
    'urso': 'bear',
    'uzi': 'to use',
    // V
    'varma': 'warm',
    'vi': 'you',
    'violono': 'violin',
    'viro': 'man',
    'virino': 'woman',
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