import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { FEED_QUERY } from './Links';

const POST_MUTATION = gql`
  mutation postMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

function CreateLink() {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();
  const [createLink, { loading }] = useMutation(POST_MUTATION, {
    onCompleted: () => {
      history.push('/');
    },
    update: (cache, { data: { post } }) => {
      const data = cache.readQuery({ query: FEED_QUERY });

      if (data) {
        const feedData = {
          feed: {
            ...data.feed,
            links: [...(data.feed?.links || []), post],
          },
        };
        cache.writeQuery({ query: FEED_QUERY, data: feedData });
      }
    },
  });

  const handleSubmit = event => {
    event.preventDefault();
    createLink({ variables: { description, url } });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
            type='text'
            placeholder='A description for the link'
          />
          <input
            name='url'
            value={url}
            onChange={e => setUrl(e.target.value)}
            type='text'
            placeholder='The URL for the link'
          />
          <button type='submit' disabled={loading}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateLink;
