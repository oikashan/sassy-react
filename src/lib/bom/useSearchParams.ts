import { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';

interface SearchParams {
  [key: string]: string;
}

export const useSearchParamsValue = (): SearchParams => {
  const { location } = window;
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params: SearchParams = {};

    // Make key/value pairs from search params.
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    setSearchParams(params);
  }, [location.search]);

  return searchParams;
};

export const useSetSearchParams = (): {
  setSearchParams: (params: SearchParams) => void;
  removeSearchParam: (paramKey: string) => void;
} => {
  const { location } = window;
  const history = createBrowserHistory();

  const setSearchParams = (params: SearchParams) => {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      searchParams.set(key, params[key]);
    }

    const newSearch = searchParams.toString();
    const newPath = `${location.pathname}?${newSearch}`;

    history.push(newPath);
  };

  const removeSearchParam = (paramKey: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(paramKey);

    const newSearch = searchParams.toString();
    const newPath = `${location.pathname}${newSearch ? `?${newSearch}` : ''}`;

    history.push(newPath);
  };

  return { setSearchParams, removeSearchParam };
};

export const useSearchParams = (): {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
  removeSearchParam: (paramKey: string) => void;
} => {
  const searchParams = useSearchParamsValue();
  const updateSearchParams = useSetSearchParams();

  return { searchParams, ...updateSearchParams };
};
