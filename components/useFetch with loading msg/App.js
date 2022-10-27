import React from 'react';
import useFetch from './useFetch';

const App = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/smartphone');
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  if (data) return <div>{data.name}</div>;
  else return null;
};

export default App;
