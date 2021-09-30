import React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { TOKENS_ICONS_ENUM } from 'lib/configs/tokens/icons';

interface Props {
  className?: string,
  content: string,
  icon?: TOKENS_ICONS_ENUM | null,
}

export const Hint: React.FC<Props> = ({
  className,
  content,
  icon,
  ...rest
}) => {
  const classNames = classnames(
    'sage-hint',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      {icon && (
        <Icon
          className="sage-hint__icon"
          icon={icon}
          adjacentType={undefined}
          cardColor={undefined}
          circular={undefined}
          color={undefined}
          label={undefined}
          size={undefined}
        />
      )}
      <span className="sage-hint__content">{content}</span>
    </div>
  );
};
