import { Field, reduxForm } from 'redux-form';

const DialogsForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Text'} component={'textarea'} name={'text'} />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

export const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);

