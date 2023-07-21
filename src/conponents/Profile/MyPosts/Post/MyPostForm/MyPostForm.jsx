import { Field, reduxForm } from 'redux-form';

const MyPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Text'} component={'textarea'} name={'text'} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export const MyPostReduxForm = reduxForm({form: 'myPost'})(MyPostForm);
