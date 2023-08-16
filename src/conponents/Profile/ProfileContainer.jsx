import { setError } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { ProfileOrError } from './ProfileOrError';

const mapStateToProps = (state) => ({
  error: state.profilePage.error,
});
const mapDispatchToProps = {setError}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileOrError);

export default ProfileContainer;
