import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Grid } from '../../Grid';
import { Indicator } from '../../Indicator';
import { Modal } from '../../Modal';
import { SageTokens } from '../../configs';
import { ButtonGroup } from '../../Button/ButtonGroup';

const DefaultBody = ({ onExit }) => (
  <>
    <Modal.Header
      image={{
        src: 'https://sage-design-system.kajabi.com/assets/card-placeholder-sm-34e033e836fc6c012f09e041dca054f44b68c9dbd69dbdb62c271f980f0b6bc9.png'
      }}
      title="Fullscreen Fixed Modal"
      aside={(
        <Button
          color={Button.COLORS.SECONDARY}
          iconOnly={true}
          icon={SageTokens.ICONS.REMOVE}
          onClick={onExit}
          subtle={true}
        >
          Menu
        </Button>
      )}
      headerIndicator={(
        <Indicator
          currentItem="2"
          label="Page"
          numItems="5"
          showText={true}
        />
      )}
    />
    <Modal.Body>
      <Grid.Row>
        <Grid.Col size={5} large={5} className="sage-modal__fixed-column">
          <div className="sage-modal__fixed-column-scroll">
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
          </div>
          <ButtonGroup gap={ButtonGroup.GAP_OPTIONS.MD} className="sage-modal__fixed-column-actions">
            <Button
              color={Button.COLORS.SECONDARY}
              raised={false}
              onClick={onExit}
            >
              Go back
            </Button>
            <Button
              color={Button.COLORS.PRIMARY}
              raised={false}
            >
              Save and continue
            </Button>
          </ButtonGroup>
        </Grid.Col>
        <Grid.Col size={7} large={7}>
          <div className="sage-modal__fixed-column-scroll sage-modal__fixed-column-scroll--no-footer">
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Modal.Body>
  </>
);

DefaultBody.propTypes = {
  onExit: PropTypes.func.isRequired
};

export default {
  title: 'Mocks/Creation Wizard Modal',
  argTypes: {},
  args: {}
};
const Template = (args) => {
  const [selfActive, setSelfActive] = useState(args.active);

  const handleExit = () => {
    setSelfActive(false);
  };

  useEffect(() => {
    setSelfActive(args.active);
  }, [args.active]);

  return (
    <>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={() => setSelfActive(true)}
      >
        Take An Action
      </Button>
      <Modal
        active={selfActive}
        animation={{ direction: Modal.ANIMATION_DIRECTIONS.BOTTOM }}
        fixed={true}
        fullScreen={true}
        onExit={() => setSelfActive(false)}
        {...args}
      >
        <DefaultBody onExit={handleExit} />
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
