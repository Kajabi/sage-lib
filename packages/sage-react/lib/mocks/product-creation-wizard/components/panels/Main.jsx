import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Panel,
  SageClassnames,
} from '../../../..';
import { productChoices, productChoiceDetails } from '../../content';
import { ProductChoice, ProductChoiceDetails } from '..';

export const Main = ({ onClickStart }) => {
  const [selectedProduct, setSelectedProduct] = React.useState('coaching');

  const handleClickStart = () => onClickStart(
    productChoices.find((choice) => choice.alias === selectedProduct)
  );

  return (
    <div className={SageClassnames.PANEL_GRID}>
      <h5 className={`${SageClassnames.TYPE.HEADING_5}`}>
        What do you want to create?
      </h5>
      <Panel.Tiles tilesInRow={2} className={SageClassnames.SPACERS.XS_BOTTOM}>
        {productChoices.map(({ alias, icon, iconColor, title, }) => (
          <ProductChoice
            active={selectedProduct === alias}
            icon={icon}
            iconColor={iconColor}
            onClick={() => setSelectedProduct(alias)}
            title={title}
          />
        ))}
      </Panel.Tiles>
      <ProductChoiceDetails {...productChoiceDetails[selectedProduct]} />
      <Button.Group>
        <Button
          color={Button.COLORS.PRIMARY}
          fullWidth={true}
          onClick={handleClickStart}
        >
          Get started
        </Button>
      </Button.Group>
    </div>
  );
};

Main.defaultProps = {
  onClickStart: (step) => step,
};

Main.propTypes = {
  onClickStart: PropTypes.func,
};
