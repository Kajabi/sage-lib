import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const VideoThumbnail = ({
  className,
  imageUrl,
  ...rest
}) => {
  const classNames = classnames(
    'sage-video-thumbnail',
    className,
    {
    }
  );

  // const renderThumbnailImage = () => {
  //   const imagePath = {};
  //   if (imageUrl) {
  //     imagePath[]
  //   }
  // };

  return (
    <div
      className={classNames}
      style={{ backgroundImage: `url(${imageUrl})` }}
      {...rest}
    >
      <button
        className="sage-video-thumbnail__play-button"
        type="button"
      >
        <span>Play media</span>
      </button>
    </div>
  );
};

VideoThumbnail.defaultProps = {
  className: null,
  imageUrl: null,
};

VideoThumbnail.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
};
