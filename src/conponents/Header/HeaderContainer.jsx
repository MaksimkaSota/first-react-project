import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../../redux/auth-reduser';
// import { HeaderAPIContainerFunction } from './HeaderAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout} />
    );
  }
}

//ContainerComponentOutside (communicates with the store)
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = {getAuthUserData, logout};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);
