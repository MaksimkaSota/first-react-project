import { addPostActionCreator, setPostActionCreator } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profileState: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    setPost: (text) => {
      const action = setPostActionCreator(text);
      dispatch(action);
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
