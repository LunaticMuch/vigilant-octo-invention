import { Voyager, voyagerIntrospectionQuery } from "graphql-voyager";

export default function App() {

    const introspection = fetch(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: voyagerIntrospectionQuery }),
          credentials: "omit",
        }
      ).then((response) => response.json());

  return (
    <Voyager
      introspection={introspection}
      displayOptions={{ skipRelay: false, showLeafFields: true }}
    />
  );
}
