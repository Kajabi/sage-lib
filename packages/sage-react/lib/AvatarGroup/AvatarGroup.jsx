import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Avatar } from '../Avatar';

export const AvatarGroup = ({
  className,
  items,
  ...rest
}) => {
  const classNames = classnames(
    'sage-avatar-group',
    className,
    {
      [`sage-avatar-group--${items.length < 4 ? items.length : 4}-up`]: items.length > 1,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {items.map((configs, i) => i < 4 && (
        <Avatar key={uuid()} {...configs} />
      ))}
    </div>
  );
};

AvatarGroup.defaultProps = {
  className: '',
  items: [],
};

AvatarGroup.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    initials: PropTypes.string,
  })),
};
