export const addAccount = (account) => {
  return {
    type: 'ADD_ACCOUNT',
    account: account,
  };
};

export const deleteAccount = (id) => {
  return {
    type: 'DELETE_ACCOUNT',
    id: id,
  };
};

export const editAccount = (id, updated_info) => {
  return {
    type: 'EDIT_ACCOUNT',
    id: id,
    updated_info: updated_info,
  };
};
