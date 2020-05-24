import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    currentMovies {
      medium_cover_image
      id
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  if (loading) {
    return <h1>Now loading</h1>;
  }
  if (data && data.currentMovies) {
    return data.currentMovies.map((every: any) => <h1>{every.id}</h1>);
  }
}

export default Home;
