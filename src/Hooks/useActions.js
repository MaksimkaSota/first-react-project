import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../redux/profile-reducer'

const ActionCreators = {onAddPost: addPost}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}
