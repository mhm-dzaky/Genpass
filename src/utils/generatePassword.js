/** What this file used to ?
 * createPassword = (length: number, chars: string) => string
 * this function is used to create a password, it takes two parameters:
 * length: number, the length would be the length of the password
 * chars: string, the characters that the password can be made of
 * this function returns a string
 *
 * generatePassword = (length: number, lower: boolean, upper: boolean, number: boolean, symbol: boolean) => string
 * this function is used to generate a password, it takes five parameters:
 * length: number, the length of the password length, this would be given by the user from the UI
 * lower: boolean, if the password should contain lowercase characters
 * upper: boolean, if the password should contain uppercase characters
 * number: boolean, if the password should contain numbers
 * symbol: boolean, if the password should contain symbols
 * this function returns a string
 */

const createPassword = (length, chars) => {
  // initialize a variable to hold the password and set it to an empty string
  let password = ''

  // loop through the length of the password
  for (let i = 0; i < length; i++) {
    // get a random index from the characters string and add it to the password
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  // return the password
  return password
}

const generatePassword = (length = 8, lower = true, upper = false, number = false, symbol = false) => {
  // initialize a constant of all the characters that can be used in the password
  const upperText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerText = 'abcdefghijklmnopqrstuvwxyz'
  const numberText = 1234567890
  const symbolText = `!@#$%^&*()_+-=[]{}|;\\':",./<>?${'`'}~`

  // initialize a variable to hold the chars and set it to an empty string
  let chars = ''

  // if the lowercase characters should be included in the password, add them to the chars variable
  // below code is used to check if the conditions of each characters should be included in the password
  if (lower) chars += lowerText
  if (symbol) chars += symbolText
  if (upper) chars += upperText
  if (number) chars += numberText

  // return the password by running the createPassword function and passing the length, chars as parameters

  return createPassword(length, chars)
}

export default generatePassword
