import React from 'react';
import { SearchContext } from './../context/SearchContext';

const useSearch = () => React.useContext(SearchContext)

export default useSearch