import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
});

export const WithAuthRedirect = (Component) => {
  const AuthRedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to={'/login'} />
    }
    return < Component {...props} />
  };

  return connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
};
