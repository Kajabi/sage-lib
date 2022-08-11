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
  );

  return (
    <div
      className={classNames}
      {...rest}
    >
      <button
        className="sage-video-thumbnail__play-button"
        type="button"
        onClick={onClick}
      >
        <img className="sage-video-thumbnail__image" src={imageurl} alt="" />
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
