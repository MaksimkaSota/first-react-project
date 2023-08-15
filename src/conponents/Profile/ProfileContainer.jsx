import { setError } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { Profile } from './Profile';

const mapStateToProps = (state) => ({
  error: state.profilePage.error,
});
const mapDispatchToProps = {setError}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
