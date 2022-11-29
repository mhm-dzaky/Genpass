/*
 * I have no Ide why should I use this function
 * but I have to use it because it is very useful, a shorthand of listener
 * parameter type would accept the event listener such as click, mouseover, etc.
 * parameter element is the element that you want to listen to
 * parameter handler is the function that you want to execute when the event is triggered
 * why does we have last argument on eventListener and set it to false?
 * The options argument sets listener-specific options.
 * For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
 * That's it!
 */

const event = (type, element, handler) => {
  return element.addEventListener(type, handler, false)
}

export default event
