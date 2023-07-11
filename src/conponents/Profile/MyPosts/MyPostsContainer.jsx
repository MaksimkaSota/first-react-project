import { addPost, setPost } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    postText: state.profilePage.postText,
  }
};
const mapDispatchToProps = {addPost, setPost};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
