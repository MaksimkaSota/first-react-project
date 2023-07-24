import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../../../utils/validators/validators';
import { FormControl } from '../../../../common/FormsControls/FormsControls';

const MyPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Text'}
               component={FormControl}
               name={'text'}
               validate={[requiredField, maxLengthCreator(10)]}
               child={'textarea'}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export const MyPostReduxForm = reduxForm({form: 'myPost'})(MyPostForm);
