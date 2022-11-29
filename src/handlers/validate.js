/*
 * This file used to validate an input value
 * this function accept one parameter as an element to change it's element border color
 * the border of the element would change its color according on some condition
 * the color are pink for "wow great!"
 * orange for "you sure about that? - John Cena"
 * red for "we don't do that here - wakanda"
 * that's it!
 */

const validate = (element) => {
  if (element.target.value > 7) {
    element.target.style.borderColor = '#ec4899'
    return
  } else if (element.target.value > 4 && element.target.value <= 7) {
    element.target.style.borderColor = '#c97e32'
    return
  }
  element.target.style.borderColor = '#fa2525'
  return
}

export default validate
