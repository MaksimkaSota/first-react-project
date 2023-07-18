import { Profile } from './Profile';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export const ProfileContainer = compose(
  WithAuthRedirect,
)(Profile);
