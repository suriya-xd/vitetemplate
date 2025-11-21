import * as React from "react"

const Form = React.forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(({ className, ...props }, ref) => (
  <form ref={ref} {...props} />
))
Form.displayName = "Form"

export { Form }
