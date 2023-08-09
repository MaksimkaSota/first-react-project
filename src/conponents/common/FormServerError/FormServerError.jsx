import classes from './FormServerError.module.css';

export const FormServerError = ({status, name}) => {
    if (status && status[name]) {
    return (
      <div className={classes.formSummaryError}>
        {status[name]}
      </div>
    )
  }
};
