import { Field } from 'formik';

export const createField = (name, type, placeholder, props = {}, text = '') => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {text && <label htmlFor={'rememberMe'}>{text}</label>}
    </div>
  )
}
