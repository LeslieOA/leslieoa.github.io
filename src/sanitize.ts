import createDOMPurify from 'dompurify'
import { JSDOM  } from 'jsdom'

const window = new JSDOM('').window
// @ts-expect-error
const DOMPurify = createDOMPurify(window)

export default function sanitize(markdown:string) {
  const sanitised = DOMPurify.sanitize(markdown)
  return sanitised
}