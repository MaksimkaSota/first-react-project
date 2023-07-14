import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reduser';
import { authAPI } from '../../api/authAPI';
// import { ProfileInfoAPIContainerFunction } from './HeaderAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        this.props.getAuthUserData(data.data);
      }
    })
  }

  render() {
    return (
      <Header login={this.props.login} isAuth={this.props.isAuth} />
    );
  }
}

//ContainerComponentOutside (communicates with the store)
const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
};
const mapDispatchToProps = {getAuthUserData};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);
