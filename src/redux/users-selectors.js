import { createSelector } from 'reselect';

// for example 'reselect'
const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getUsersSuperSelector = createSelector(getUsersSelector,(users) => {
  return users.filter(u => true);
});
//

export const getPageSelector = (state) => {
  return state.usersPage.page;
};

export const getCountSelector = (state) => {
  return state.usersPage.count;
};

export const getTotalCountSelector = (state) => {
  return state.usersPage.totalCount;
};

export const getSubscriptionsIdSelector = (state) => {
  return state.usersPage.subscriptionsId;
};
