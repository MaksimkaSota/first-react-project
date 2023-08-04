import { Field } from 'formik';

export const CreateField = ({name, type, placeholder, props1 = {}, text = '', callback = () => {}, values}) => {
  console.log(values);
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={callback}
        // onClick={callback}
        {...props1}
      />
      {text && <label htmlFor={props1.id}>{text}</label>}
    </div>
  )
}
