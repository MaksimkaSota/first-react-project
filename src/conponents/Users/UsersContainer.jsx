import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { follow, setCurrentPage, getTotalCount, getUsers, unfollow, setIsFetching } from '../../redux/users-reducer';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
// import { UsersAPIContainerFunction } from './UsersAPIContainerFunction';

//ContainerComponentInside (AJAX requests)
export class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
      .then((response) => {
        this.props.getUsers(response.data.items);
        this.props.getTotalCount(response.data.totalCount);
        this.props.setIsFetching(false);
      })
  }

  onSetCurrentPage = (page) => () => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
      .then((response) => {
        this.props.getUsers(response.data.items);
        this.props.setIsFetching(false);
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ?
          <Preloader /> :
          <Users
            users={this.props.users}
            page={this.props.page}
            count={this.props.count}
            totalCount={this.props.totalCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onSetCurrentPage={this.onSetCurrentPage}
          />}
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
  }
};
const mapDispatchToProps = {follow, unfollow, setCurrentPage, getUsers, getTotalCount, setIsFetching};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
