
/** NOUNS */

/** Turns a noun or an adverb (or an adjective) into an adjective */
const adjectivize = (word) => {
  return word.slice(0, -1) + 'a'
}

/** Turns a noun or an adjective (or an adverb) into an adverb */
const adverbize = (word) => {
  return word.slice(0, -1) + 'e'
}

/** Adds the definite article to a noun if it's not already there */
const definitize = (noun) => {
  return noun.substring(0, 3) === 'la ' ? noun : 'la ' + noun
}

/**
 * Pluralizes all nouns or ajectives in a sentence
 * Currently doesn't handle commas or periods
 */
const pluralize = (words) => {
  return words.split(' ').map(word => 'oa'.indexOf(word.substr(-1)) !== -1 ? word + 'j' : word).join(' ')
}

/** PRONOUNS */

/** Adds an a to the end of a pronoun if it's not already there */
const toPossessive = (pronoun) => {
  return pronoun.substr(-1) === 'a' ? pronoun : pronoun + 'a'
}

/** VERBS */

/** Stems the verb i.e. finds the base (dictionary form) of the verb */
const toBase = (verb) => {
  return verb.substr(-2) === 'as' ? verb.slice(0, -2) : verb.substr(-1) === 'i' ? verb.slice(0, -1) : verb
}

/**
 * Converts a verb to infinitive
 * Currently only accepts base, infinitive and present tense
 */
const toInfinitive = (verb) => {
  return verb.substr(-2) === 'as' ? verb.slice(0,-2) + 'i' : verb
}

/**
 * Converts a verb to present tense.
 * Currently only accepts base, infinitive and present tense
 */
const toPresentTense = (verb) => {
  return verb.substr(-1) === 'i' ? verb.slice(0, -1) + 'as' : verb.substr(-2) === 'as' ? verb : verb + 'as'
}