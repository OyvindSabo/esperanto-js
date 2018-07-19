
/* Turns a noun into an adjective */
const adjectivize = (noun) => {
  return noun.slice(0, -1) + 'a'
}

/* Adds the definite article to a noun */
/*
 * TODO: Make the function accept all combinations of words which given a formal grammar of the
 * language corresponds to a noun
 */
const definitize = (noun) => {
  return 'la ' + noun;
}

/* Pluralizes a noun or an ajective */
/**
 * TODO: Don't add 'j' if the word is already in plural
 * If there is a noun and an adjective, bot should be pluralized
 */
const pluralize = (word) => {
  return word + 'j'
}