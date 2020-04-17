const initState = {
  accounts: [
    {
      name: 'Business Account',
      num: Math.floor(Math.random() * 100000000000000000),
      description: 'Business only account',
      holder: 'Human Being PLC',
      id: '1',
      pastTransactionA:
        '2/06/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
      pastTransactionB:
        '3/04/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
      pastTransactionC:
        '23/05/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
    },
    {
      name: 'Business Account',
      num: Math.floor(Math.random() * 100000000000000000),
      description: 'Business only account',
      holder: 'Human Being PLC',
      id: '2',
      pastTransactionA:
        '2/06/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
      pastTransactionB:
        '3/04/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
      pastTransactionC:
        '23/05/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      const newAcct = {
        name: action.account.name,
        num: Math.floor(Math.random() * 100000000000000000),
        description: action.account.description,
        holder: action.account.holder,
        id: action.account.id,
        pastTransactionA:
          '2/06/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
        pastTransactionB:
          '3/04/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
        pastTransactionC:
          '23/05/2019: Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, mollitia?',
      };

      return { ...state, accounts: [...state.accounts, newAcct] };

    case 'DELETE_ACCOUNT':
      const filteredAccounts = state.accounts.filter(
        (account) => account.id !== action.id
      );
      return { ...state, accounts: filteredAccounts };

    case 'EDIT_ACCOUNT':
      const updatedAccstInfo = state.accounts.map((account) => {
        if (account.id === action.id) {
          return { ...account, ...action.updated_info };
        } else {
          return account;
        }
      });
      return {...state, accounts: updatedAccstInfo}
    default:
      return state;
  }
};

export default rootReducer;
