import React from 'react';
import { connect } from 'react-redux';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';
import { getProfile, setIsFetching } from '../../../redux/profile-reducer';
import { withRouter } from '../../../withRouterFromReactRouterDomV5';
import { profileAPI } from '../../../api/profileAPI';
// import { ProfileInfoAPIContainerFunction } from './ProfileInfoAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class ProfileInfoAPIContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;
    if (!userId) {
      userId = 2;
    }
    this.props.setIsFetching(true);
    profileAPI.getProfile(userId).then((data) => {
      this.props.getProfile(data);
      this.props.setIsFetching(false);
    })
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
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  }
};
const mapDispatchToProps = {getProfile, setIsFetching};

export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileInfoAPIContainer));
