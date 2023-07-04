import React from 'react';

export const StoreContext = React.createContext(null);

export const Provider = ({store, children}) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};
