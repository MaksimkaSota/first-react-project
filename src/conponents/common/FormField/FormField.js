import { Field } from 'formik';

export const FormField = ({
                              name,
                              type,
                              placeholder = '',
                              text = '',
                              props = {},
                              callback,
                              handleChange
                            }) => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={callback || handleChange}
        {...props}
      />
      {text && <label htmlFor={props.id}>{text}</label>}
    </div>
  )
}
