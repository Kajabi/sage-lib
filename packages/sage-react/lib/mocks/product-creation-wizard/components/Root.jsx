import React from 'react';
import {
  Button,
  Grid,
  Modal,
  SageTokens,
} from '../../..';
import { ButtonGroup } from '../../../Button/ButtonGroup';
import {
  CoachingAppearance,
  CoachingBooking,
  CoachingDetails,
  CoachingPricing,
  CourseAppearance,
  CourseDetails,
  CoursePricing,
  Main,
} from './panels';

export const Root = () => {
  const initialModalTitle = 'New Product';
  const initialStep = null;
  const [modalActive, setModalActive] = React.useState(true);
  const [modalTitle, setModalTitle] = React.useState(initialModalTitle);
  const [step, setStep] = React.useState(initialStep);

  const handleClickStart = (productChoice) => {
    const { title, alias } = productChoice;
    setModalTitle(`New ${title}`);
    setStep(`${alias}-1`);
  };

  const handleChangeStep = (step) => {
    if (!step) {
      setStep(initialStep);
      setModalTitle(initialModalTitle);
    }

    setStep(step);
  };

  const renderStep = () => {
    if (!step) {
      return <Main onClickStart={handleClickStart} />;
    }

    let stepComponent = null;

    switch (step) {
      case 'course-1':
        stepComponent = <CourseDetails onChangeStep={handleChangeStep} />;
        break;
      case 'course-2':
        stepComponent = <CourseAppearance onChangeStep={handleChangeStep} />;
        break;
      case 'course-3':
        stepComponent = <CoursePricing onChangeStep={handleChangeStep} />;
        break;
      case 'coaching-1':
        stepComponent = <CoachingDetails onChangeStep={handleChangeStep} />;
        break;
      case 'coaching-2':
        stepComponent = <CoachingBooking onChangeStep={handleChangeStep} />;
        break;
      case 'coaching-3':
        stepComponent = <CoachingAppearance onChangeStep={handleChangeStep} />;
        break;
      case 'coaching-4':
        stepComponent = <CoachingPricing onChangeStep={handleChangeStep} />;
        break;
      default:
        // stepComponent stays null
        break;
    }

    return stepComponent;
  };

  return (
    <Grid>
      <Button color={Button.COLORS.PRIMARY} onClick={() => setModalActive(true)}>
        Add product
      </Button>
      <Modal active={modalActive} fullScreen={true} className="creation-wizard__modal u-sage-modal--fixed">
        {/*
          TODO: Build dismiss into modal header
          https://kajabi.atlassian.net/browse/SAGE-312
        */}
        <Modal.Header
          title={modalTitle}
          aside={(
            <>
              <ButtonGroup gap={ButtonGroup.GAP_OPTIONS.MD}>
                <Button
                  color={Button.COLORS.SECONDARY}
                  raised={false}
                  onClick={() => setModalActive(false)}
                >
                  Skip for now
                </Button>
                <Button
                  color={Button.COLORS.PRIMARY}
                  raised={false}
                >
                  Next
                </Button>
                <Button
                  color={Button.COLORS.SECONDARY}
                  icon={SageTokens.ICONS.REMOVE}
                  iconOnly={true}
                  subtle={true}
                  onClick={() => setModalActive(false)}
                >
                  Close
                </Button>
              </ButtonGroup>
            </>
          )}
        >
          {/*
            TODO: Need to determine what/how the "progress bar" can be added here
            https://kajabi.atlassian.net/browse/SAGE-328
          */}
        </Modal.Header>
        <Modal.Body>
          {/*
            TODO: Need to allow column panel to fill space
            with a footer at bottom and scroll in middle
            https://kajabi.atlassian.net/browse/SAGE-329
          */}
          <Grid.Row className="creation-wizard__container">
            {/* <Grid.Col size={4} small={12} medium={5} large={4}> */}
            <Grid.Col className="creation-wizard__sidebar u-sage-modal__fixed-column">
              <div className="u-sage-modal__fixed-column-scroll">
                <p>hey there</p>
                {renderStep()}
              </div>
            </Grid.Col>
            {/* <Grid.Col size={8} small={Grid.GRID_BREAKPOINT_TOGGLES.HIDE}
            medium={7} large={8}> */}
            <Grid.Col className="creation-wizard__preview u-sage-modal__fixed-column">
              <div className="u-sage-modal__fixed-column-scroll">
                {/* TODO: Dev to add actual graphic SVG here  with live edit synced */}
                <img
                  src="//source.unsplash.com/random/832x575"
                  style={{ margin: '0 auto', display: 'block', maxWidth: '100%' }}
                  alt=""
                />
              </div>
            </Grid.Col>
          </Grid.Row>
        </Modal.Body>
      </Modal>
    </Grid>
  );
};

export default Root;
