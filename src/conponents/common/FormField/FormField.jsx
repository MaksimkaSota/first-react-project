import { Field } from 'formik';

export const FormField = ({
                              name,
                              type,
                              placeholder = '',
                              text = '',
                              props = {},
                              callback
                            }) => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={callback}
        {...props}
      />
      {text && <label htmlFor={props.id}>{text}</label>}
    </div>
  )
}
