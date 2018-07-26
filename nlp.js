
/** NOUNS */

/** Turns a noun or an adverb (or an adjective) into an adjective */
const adjectivize = word => word.slice(0, -1) + 'a'

/** Turns a noun or an adjective (or an adverb) into an adverb */
const adverbize = word => word.slice(0, -1) + 'e'

/** Adds the definite article to a noun if it's not already there */
const definitize = noun => noun.substring(0, 3) === 'la ' ? noun : 'la ' + noun

/**
 * Adds an n to any combination of nouns and adjectives which are not already objects
 * Currently doesn't handle commas and periods
 */
const objectify = words => words.split(' ').map(word => word.substr(-1) === 'o' || word.substr(-1) === 'a' || word.substr(-2) === 'oj' || word.substr(-2) === 'aj' ? word + 'n' : word).join(' ')

/**
 * Pluralizes all nouns or ajectives (subjects and objects) in a sentence
 * Currently doesn't handle commas or periods
 */
const pluralize = words => words.split(' ').map(word => 'oa'.indexOf(word.substr(-1)) !== -1 ? word + 'j' : word.substr(-2) === 'on' || word.substr(-2) === 'an' ? word.slice(0,-1) + 'jn' : word).join(' ')

/** PRONOUNS */

/** Adds an a to the end of a pronoun if it's not already there */
const toPossessive = pronoun => pronoun.substr(-1) === 'a' ? pronoun : pronoun + 'a'

/** VERBS */

/**
 * Stems the verb i.e. finds the base (dictionary form) of the verb
 * Currently accepts base, infinitive, present, past and future tense
 */
const toBase = (verb) => verb.substr(-2) === 'as' || verb.substr(-2) === 'is' || verb.substr(-2) === 'os' ? verb.slice(0, -2) : verb.substr(-1) === 'i' ? verb.slice(0, -1) :  verb

/**
 * Converts a verb to infinitive
 * Currently only accepts base, infinitive, present, past and future tense
 */
const toInfinitive = verb => verb.substr(-2) === 'as' || verb.substr(-2) === 'is' || verb.substr(-2) === 'os' ? verb.slice(0,-2) + 'i' : verb.substr(-1) === 'i' ? verb : verb + 'i'

/**
 * Converts a verb to present tense
 * Currently accepts base, infinitive, present, past and future tense
 */
const toPresent = verb => verb.substr(-2) === 'as' || verb.substr(-2) === 'is' || verb.substr(-2) === 'os' ? verb.slice(0, -2) + 'as' : verb.substr(-1) === 'i' ? verb.slice(0, -1) + 'as' : verb + 'as'

/**
 * Converts a verb to past tense
 * Currently accepts base, infinitive, present, past and future tense
 * The input parameter has to be a verb
 */
const toPast = verb =>  verb.substr(-2) === 'as' || verb.substr(-2) === 'is' || verb.substr(-2) === 'os' ? verb.slice(0, -2) + 'is' : verb.substr(-1) === 'i' ? verb.slice(0, -1) + 'is' : verb + 'is'

/**
 * Converts a verb to future tense
 * Currently accepts base, infinitive, present, past and future tense
 */
const toFuture = verb => verb.substr(-2) === 'as' || verb.substr(-2) === 'is' || verb.substr(-2) === 'os' ? verb.slice(0, -2) + 'os' : verb.substr(-1) === 'i' ? verb.slice(0, -1) + 'os' : verb

/** NEGATION */

/**
 * Adds ne before the first present tense verb in the sentence if any
 * Currently doesn't handle commas or periods
 */
const negate = sentence => sentence.split(' ').map((word, index) => word.substr(-2) === 'as' ? 'ne ' + word : word).join(' ')

/** Adds or removes mal in front of an adjective to yield opposite meaning */
const toOpposite = adjective => adjective.substr(0,3) === 'mal' ? adjective.substr(3) : 'mal' + adjective

/** QUESTIONS */

/**
 * Converts a statement (or a question) to a yes/no question
 * Lowercases what was previously the first letter of the sentence, regardless of whether it's a name or not.
 */
const toQuestion = sentence => (sentence.substr(0, 4) === '^Cu ' ? sentence : '^Cu ' + sentence.charAt(0).toLowerCase() + sentence.substr(1)).split('?').join('').split('.').join('') + '?'

/** NUMBERS */

/**
 * Converts a numerical number to a verbal representation of that number
 * Currently accepts numbers from  to 999.999 where a period is required for every three digits.
 */
const toVerbal = (numerical) => {
  const toVerb = {
    '0': 'nul',
    '1': 'unu',
    '2': 'du',
    '3': 'tri',
    '4': 'kvar',
    '5': 'kvin',
    '6': 'sis',
    '7': 'sep',
    '8': 'ok',
    '9': 'naŭ',
  }
  return numerical.toString()
  .split('.')
  .map(number => '000'.substr(0, 3-number.length) + number)
  .map(number => number.split('')
    .map(
      (element, index) => index === 0
      ? (element !== '0'
        ? element === '1' ? 'cent' : toVerb[element] + 'cent'
        : '')
      : index === 1
      ? (element !== '0'
        ? element === '1' ? 'dec' : toVerb[element] + 'dec'
        : '')
      : (element !== '0'
        ? toVerb[element]
        : '')
      ).map(number => number === 'unu' ? '' : number)
    .join(' '))
  .join(' mil ').split('   ').join(' ').split('  ').join(' ')
  
}

const toNumerical = (verbal) => {
  numToVerb = {
    'nul': '0',
  }
  //TODO
}