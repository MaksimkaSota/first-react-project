import { addPost, deletePost, profileReducer } from './profile-reducer';

const state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', numberOfLike: 15},
    {id: 2, message: 'It\'s my first post', numberOfLike: 20},
    {id: 3, message: 'Blabla', numberOfLike: 20},
    {id: 4, message: 'Dada', numberOfLike: 20},
  ]
};

// test
it('length of posts should be incremented', () => {
  // 1. test data
  const action = addPost('new post');
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(5);
});
it('message of new posts should be correct', () => {
  // 1. test data
  const action = addPost('new post');
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts[4].message).toBe('new post');
});

//tdd test
it('after deleting length of posts should be decrement', () => {
  // 1. test data
  const action = deletePost(1);
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
it('after deleting length should not be decrement if id is incorrect', () => {
  // 1. test data
  const action = deletePost(1000);
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
