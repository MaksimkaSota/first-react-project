import React from 'react';
import { connect } from 'react-redux';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';
import { getProfile, setIsFetching } from '../../../redux/profile-reducer';
import { http } from '../../../http';
// import { ProfileInfoAPIContainerFunction } from './ProfileInfoAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class ProfileInfoAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    http.get(`profile/2`)
      .then((response) => {
        this.props.getProfile(response.data);
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

export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoAPIContainer);
