import { useExplorerPlugin } from '@graphiql/plugin-explorer';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import { useState } from 'react';

import 'graphiql/graphiql.css';
import '@graphiql/plugin-explorer/dist/style.css';

const fetcher = createGraphiQLFetcher({
  url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
});

export default function App() {
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const explorerPlugin = useExplorerPlugin({
    query,
    onEdit: setQuery,
  });
  return (
    <GraphiQL
      fetcher={fetcher}
      query={query}
      onEditQuery={setQuery}
      plugins={[explorerPlugin]}
    />
  );
}