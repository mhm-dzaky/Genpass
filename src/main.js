import { generateButton, valueLength, copyButton } from '@/constant/element'
import getPassword from '@/handlers/getPassword'
import clipboard from '@/handlers/clipboard'
import validate from '@/handlers/validate'
import event from '@/handlers/event'
import '@/style.css'

const main = () => {
  // each of below function is to handle the event, the <event> function accept 3 params
  // 1. the type of event, such as 'input', 'click', etc.
  // 2. the element that the event is attached to
  // 3. the function that will be executed when the event is triggered
  event('input', valueLength, validate)
  event('click', generateButton, getPassword)
  event('click', copyButton, clipboard)
}

main()
