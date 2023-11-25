import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { SearchWrapper } from './Movies.style';
import { useSearchParams } from 'react-router-dom';
import { FetchSearch } from 'components/api';

export  default function  Movies() {
  const [searchResult, setSearchResult] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const fetch = async () => {
      const result = await FetchSearch(params.get('query'));
      setSearchResult(result);
    };
    fetch();
  }, [params]);

  return (
    <SearchWrapper>
      <SearchForm setData={setParams} />
      {searchResult.length > 0 && <MoviesList collection={searchResult} />}
    </SearchWrapper>
  );
};
