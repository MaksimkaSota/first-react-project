import React from 'react';
import { connect } from 'react-redux';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';
import { getProfile } from '../../../redux/profile-reducer';
import { withRouter } from '../../../withRouterFromReactRouterDomV5';
import { compose } from 'redux';
// import { ProfileInfoAPIContainerFunction } from './ProfileInfoAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class ProfileInfoAPIContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {
    return (
      <>
        {
          this.props.isFetching ?
            <Preloader /> :
            <ProfileInfo profile={this.props.profile} />
        }
      </>
    )
  }
}

//ContainerComponentOutside (communicates with the store)
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
});
const mapDispatchToProps = {getProfile};

export const ProfileInfoContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileInfoAPIContainer);
