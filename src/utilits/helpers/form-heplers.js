import { Field } from 'formik';

export const CreateField = ({name, type, placeholder, props1 = {}, text = '', callback = () => {}}) => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={callback}
        {...props1}
      />
      {text && <label htmlFor={props1.id}>{text}</label>}
    </div>
  )
}
