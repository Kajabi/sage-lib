import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const VideoThumbnail = ({
  className,
  imageurl,
  onClick,
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
  //   if (imageurl) {
  //     imagePath[]
  //   }
  // };

  return (
    <div
      className={classNames}
      style={{ backgroundImage: `url(${imageurl})` }}
      {...rest}
    >
      <button
        className="sage-video-thumbnail__play-button"
        type="button"
        onClick={onClick}
      >
        <span>Play media</span>
      </button>
    </div>
  );
};

VideoThumbnail.defaultProps = {
  className: null,
  imageurl: null,
  onClick: null,
};

VideoThumbnail.propTypes = {
  className: PropTypes.string,
  imageurl: PropTypes.string,
  onClick: PropTypes.func,
};
