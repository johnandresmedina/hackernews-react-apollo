import React from 'react';
import Link from './Link';
import { gql, useQuery } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        description
      }
    }
  }
`;

function Links() {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.feed.links.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
}

export default Links;
