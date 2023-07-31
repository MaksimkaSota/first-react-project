import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, unfollow } from '../../redux/users-reducer';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
  getCountSelector,
  getPageSelector,
  getSubscriptionsIdSelector,
  getTotalCountSelector,
  getUsersSuperSelector
} from '../../redux/users-selectors';
// import { UsersAPIContainerFunction } from './UsersAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.page, this.props.count);
  }

  onSetCurrentPage = (page) => () => {
    this.props.getUsers(page, this.props.count);
  }

  onFollow = (id) => () => {
    this.props.follow(id);
  };
  onUnfollow = (id) => () => {
    this.props.unfollow(id);
  };

  render() {
    return (
      <>
        {
          !this.props.users.length ?
            <Preloader /> :
            <Users
              users={this.props.users}
              page={this.props.page}
              count={this.props.count}
              totalCount={this.props.totalCount}
              subscriptionsId={this.props.subscriptionsId}
              onFollow={this.onFollow}
              onUnfollow={this.onUnfollow}
              onSetCurrentPage={this.onSetCurrentPage}
            />
        }
      </>
    );
  }
}

//ContainerComponentOutside (communicates with the store)
const mapStateToProps = (state) => ({
  users: getUsersSuperSelector(state),
  page: getPageSelector(state),
  count: getCountSelector(state),
  totalCount: getTotalCountSelector(state),
  subscriptionsId: getSubscriptionsIdSelector(state)
});
const mapDispatchToProps = {follow, unfollow, getUsers};

export const UsersContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersAPIContainer);
