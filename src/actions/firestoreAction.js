

export const USER_DATA_PUT_STORE = 'USER_DATA_PUT_STORE';
export const USER_DATA_CREATE_STORE = 'USER_DATA_CREATE_STORE';

export const putUserData = user => ({
  type: 'USER_DATA_PUT_STORE',
  user,
});

export const createUserData = user => ({
  type: 'USER_DATA_CREATE_STORE',
  user,
});
