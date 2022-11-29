import { valueLength, variants, toastContainer, copyButton, passwordOutput } from '@/constant/element'
import toast from '@/utils/toast'
import generatePassword from '@/utils/generatePassword'

// handle generate password while this also validating variants and input length
const getPassword = () => {
  // set the length value of password
  const length = valueLength.value

  // destructure the variants (lowerCase, upperCase, number, and symbol)
  const [lower, upper, number, symbol] = variants

  // check if length is valid
  // if the length is start with 0, or length is less or equal to 0 or length is just an empty string
  // set the length to 8 (default)
  // and generate the toast, return to prevent the rest of the function
  if (length.startsWith('0') || length <= 0 || length === '') {
    toast(toastContainer, 'Please enter a valid length', 'error')
    return
  }

  // check if variants is valid
  // if all variants is not checked, generateToast and set the variants to default
  if (!lower.checked && !upper.checked && !number.checked && !symbol.checked) {
    toast(toastContainer, 'Please select at least one variant', 'warn')
    return
  }

  // check if the length is higher than 128 (max length of password)
  // if the length is higher than 128, generateToast with error message and return the function to prevent the rest of the function
  if (length > 128) {
    toast(toastContainer, 'Maximum length is 128 characters!', 'error')
    return
  }

  if (length > 0) {
    copyButton.removeAttribute('disabled')
    copyButton.classList.remove('disabled')
  }

  // check if length value of password is less than 6
  // if the length is less than 6, generateToast to inform the user
  // that this password is too short but still generate the password
  if (length < 6) {
    toast(toastContainer, "Whoaa, that's a short password, you sure?", 'warn')
  }

  // run the generatePassword function to generate the password
  // assign it to constant password
  const password = generatePassword(length, lower.checked, upper.checked, number.checked, symbol.checked)

  // set the passwordOutput value to the password
  passwordOutput.value = password
}

export default getPassword
