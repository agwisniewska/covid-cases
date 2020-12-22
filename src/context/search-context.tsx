import React, {createContext, useState, useContext} from 'react';

type SearchDispatch = (searchPhrase: string) => void
type SearchProviderProps = {children: React.ReactNode}

const SearchStateContext = createContext<string | undefined>(undefined);
const SearchDispatchContext = createContext<SearchDispatch | undefined>(undefined);

const SearchProvider = ({children}: SearchProviderProps) => {

  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <SearchStateContext.Provider value={searchPhrase}>
      <SearchDispatchContext.Provider value={setSearchPhrase}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  )
}

const useSearchState = () => {
  const context = useContext(SearchStateContext)
  if (context == null) {
    throw new Error('useSearchState must be used within a SearchProvider')
  }
  return context
}

const useSearchDispatch = () => {
  const context = React.useContext(SearchDispatchContext)
  if (context == null) {
    throw new Error('useSearchDispatch must be used within a SearchProvider')
  }
  return context
}


export {useSearchState, useSearchDispatch, SearchProvider}