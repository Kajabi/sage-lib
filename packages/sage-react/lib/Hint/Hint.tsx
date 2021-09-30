import React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { TokensIcons } from 'lib/configs/tokens/icons';

interface Props {
  className?: string,
  content: string,
  icon?: TokensIcons | null,
}

export const Hint: React.FC<Props> = ({
  className = "",
  content,
  icon = null,
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
