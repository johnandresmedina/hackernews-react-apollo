import React from 'react';
import PropTypes from 'prop-types';

function Link({ link: { description, url } }) {
  return (
    <div>
      <div>
        {description} {url}
      </div>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Link;
