import React from 'react';
import { connect } from 'react-redux';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';
import { getProfile, getStatus, updateStatus } from '../../../redux/profile-reducer';
import { withRouter } from '../../../withRouterFromReactRouterDomV5';
import { compose } from 'redux';
// import { ProfileInfoAPIContainerFunction } from './ProfileInfoAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class ProfileInfoAPIContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.id;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.router.navigate('/login');
      }
    }

    if (userId) {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.router.params.id !== this.props.router.params.id) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <>
        {
          !this.props.profile ?
            <Preloader /> :
            <ProfileInfo profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus} />
        }
      </>
    )
  }
}

//ContainerComponentOutside (communicates with the store)
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = {getProfile, getStatus, updateStatus};

export const ProfileInfoContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileInfoAPIContainer);
