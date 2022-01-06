import React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { TokensIcons } from '../configs/tokens/icons';

export interface HintProps {
  className?: string,
  content: string,
  icon?: TokensIcons | null,
}

export const Hint = ({
  className = '',
  content,
  icon = null,
  ...rest
}: HintProps): JSX.Element => {
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
          backgroundHeight={undefined}
          backgroundWidth={undefined}
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
