/*
 * Thi file used as a handler for the clipboard button
 * It will copy the password to the clipboard, and display a toast
 * if the passwordOutput is empty, it will not copy anything, and return the function to stop the execution
 */

import { passwordOutput, toastCopy } from '@/constant/element'

const clipboardHandler = () => {
  if (passwordOutput.value === '') {
    return
  }
  window.navigator.clipboard.writeText(passwordOutput.value)
  toastCopy.classList.remove('-bottom-16', 'md:-bottom-20', 'opacity-0')
  toastCopy.classList.add('-bottom-12', 'md:-bottom-14', 'opacity-100')
  setTimeout(() => {
    toastCopy.classList.add('-bottom-16', 'md:-bottom-20', 'opacity-0')
    toastCopy.classList.remove('-bottom-12', 'md:-bottom-14', 'opacity-100')
  }, 1500)
}

export default clipboardHandler
