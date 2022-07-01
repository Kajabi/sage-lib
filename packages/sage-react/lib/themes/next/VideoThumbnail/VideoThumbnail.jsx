import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const VideoThumbnail = ({
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-video-thumbnail',
    className,
    {
    }
  );

  return (
    <div className={classNames} {...rest}>
      <button>hey</button>
    </div>
  );
};

VideoThumbnail.defaultProps = {
  className: null,
};

VideoThumbnail.propTypes = {
  className: PropTypes.string,
};
