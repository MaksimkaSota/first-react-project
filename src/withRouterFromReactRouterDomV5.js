import { useLocation, useNavigate, useParams } from 'react-router-dom';

//CustomWithRouter
export const withRouter = (Component) => {
  return (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
}
