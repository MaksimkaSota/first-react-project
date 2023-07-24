import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';

const DialogsForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Text'}
               component={FormControl}
               name={'text'}
               validate={[requiredField, maxLengthCreator(50)]}
               child={'textarea'}
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

export const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);

