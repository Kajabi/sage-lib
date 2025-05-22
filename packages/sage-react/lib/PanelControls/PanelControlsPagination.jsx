import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const PanelControlsPagination = ({
  currentPage,
  onClickPagination,
  totalPages,
  ...rest
}) => (
  <div className="sage-panel-controls__pagination" {...rest}>
    <Button
      className="sage-panel-controls__pagination-prev"
      color={Button.COLORS.SECONDARY}
      disabled={currentPage === 1}
      icon={SageTokens.ICONS.ARROW_LEFT}
      iconOnly={true}
      onClick={() => onClickPagination(currentPage - 1)}
    >
      Previous Page
    </Button>
    <Button
      className="sage-panel-controls__pagination-next"
      color={Button.COLORS.SECONDARY}
      disabled={currentPage === totalPages}
      icon={SageTokens.ICONS.ARROW_RIGHT}
      iconOnly={true}
      onClick={() => onClickPagination(currentPage + 1)}
    >
      Next Page
    </Button>
  </div>
);

PanelControlsPagination.defaultProps = {
  currentPage: 1,
  onClickPagination: (num) => num,
  totalPages: 1,
};

PanelControlsPagination.propTypes = {
  currentPage: PropTypes.number,
  onClickPagination: PropTypes.func,
  totalPages: PropTypes.number,
};
