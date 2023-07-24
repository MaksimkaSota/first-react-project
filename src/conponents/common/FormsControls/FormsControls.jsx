import classes from './FormsControls.module.css';

export const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={classes.formControl + ' ' + (hasError ? classes.error : "")}>
      <div>
        <props.child {...input} {...props} />
      </div>
      {hasError ? <span>{meta.error}</span> : null}
      {/*{hasError && <span>"some error"</span>}*/}
    </div>
  );
};
