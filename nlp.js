
/** NOUNS */

/** Turns a noun or an adverb (or an adjective) into an adjective */
const adjectivize = word => word.slice(0, -1) + 'a'

/** Turns a noun or an adjective (or an adverb) into an adverb */
const adverbize = word => word.slice(0, -1) + 'e'

/** Adds the definite article to a noun if it's not already there */
const definitize = noun => noun.substring(0, 3) === 'la ' ? noun : 'la ' + noun

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
 * Currently accepts base, infinitive, present and past tense
 */
const toBase = (verb) => verb.substr(-2) === 'as' || verb.substr(-2) === 'is' ? verb.slice(0, -2) : verb.substr(-1) === 'i' ? verb.slice(0, -1) :  verb

/**
 * Converts a verb to infinitive
 * Currently only accepts base, infinitive and present tense
 */
const toInfinitive = verb => verb.substr(-2) === 'as' || verb.substr(-2) === 'is' ? verb.slice(0,-2) + 'i' : verb.substr(-1) === 'i' ? verb : verb + 'i'

/**
 * Converts a verb to present tense.
 * Currently accepts base, infinitive, present and past tense
 */
const toPresent = verb => verb.substr(-2) === 'as' ? verb : verb.substr(-1) === 'i' ? verb.slice(0, -1) + 'as' : verb.substr(-2) === 'is' ? verb.slice(0, -1) + 'as' : verb + 'as'

/**
 * Converts a verb to past tense.
 * Currently accepts base, infinitive, present and past tense
 */
const toPast = verb =>  verb.substr(-2) === 'as' ? verb.slice(0, -2) + 'is' : verb.substr(-1) === 'i' ? verb.slice(0, -1) + 'as' : verb.substr(-2) === 'is' ? verb : verb + 'is'

/** NEGATION */

/**
 * Adds ne before the first present tense verb in the sentence if any
 * Currently doesn't handle commas or periods
 */
const negateSentence = sentence => sentence.split(' ').map((word, index) => word.substr(-2) === 'as' ? 'ne ' + word : word).join(' ')

/** Adds or removes mal in front of an adjective to yield opposite meaning */
const reverseAdjective = adjective => adjective.substr(0,3) === 'mal' ? adjective.substr(3) : 'mal' + adjective

/** QUESTIONS */

/**
 * Converts a statement (or a question) to a yes/no question
 * Lowercases what was previously the first letter of the sentence, regardless of whether it's a name or not.
 */
const toQuestion = sentence => (sentence.substr(0, 4) === '^Cu ' ? sentence : '^Cu ' + sentence.charAt(0).toLowerCase() + sentence.substr(1)).split('?').join('').split('.').join('') + '?'