import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  getTotalCount,
  getUsers,
  unfollow,
  setIsFetching,
  setSubscriptionsId
} from '../../redux/users-reducer';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/usersAPI';
import { followAPI } from '../../api/followAPI';
// import { UsersAPIContainerFunction } from './UsersAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.page, this.props.count).then((data) => {
      this.props.getUsers(data.items);
      this.props.getTotalCount(data.totalCount);
      this.props.setIsFetching(false);
    })
  }

  onSetCurrentPage = (page) => () => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    usersAPI.getUsers(page, this.props.count).then((data) => {
      this.props.getUsers(data.items);
      this.props.setIsFetching(false);
    })
  }
  onFollow = (id) => () => {
    this.props.setSubscriptionsId(id, true);
    followAPI.follow(id).then((data) => {
        if (data.resultCode === 0) {
          this.props.follow(id);
        }
      this.props.setSubscriptionsId(id, false);
      })
  };
  onUnfollow = (id) => () => {
    this.props.setSubscriptionsId(id, true);
    followAPI.unfollow(id).then((data) => {
        if (data.resultCode === 0) {
          this.props.unfollow(id);
        }
      this.props.setSubscriptionsId(id, false);
      })
  };

  render() {
    return (
      <>
        {
          this.props.isFetching ?
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
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    page: state.usersPage.page,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching,
    subscriptionsId: state.usersPage.subscriptionsId
  }
};
const mapDispatchToProps = {follow, unfollow, setCurrentPage, getUsers, getTotalCount, setIsFetching, setSubscriptionsId};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
