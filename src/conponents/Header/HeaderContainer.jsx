import React from 'react';
import { Header } from './Header';
import { http } from '../../http';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reduser';
// import { ProfileInfoAPIContainerFunction } from './HeaderAPIContainerFunction';

export class HeaderAPIContainer extends React.Component  {
  componentDidMount() {
    http.get(`auth/me`)
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.getAuthUserData(response.data.data);
        }
      })
  }

  render() {
    return (
      <Header login={this.props.login} isAuth={this.props.isAuth} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
};
const mapDispatchToProps = {getAuthUserData};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);
