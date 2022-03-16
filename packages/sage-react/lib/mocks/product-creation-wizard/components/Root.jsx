import React from 'react';
import {
  Button,
  Grid,
  Modal,
  SageTokens,
} from '../../..';
import { ProgressBar } from '../../../ProgressBar';
import { GRID_BREAKPOINT_TOGGLES } from '../../../Grid/configs';
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
      <Modal active={modalActive} fullScreen={true}>
        {/*
          TODO: Build dismiss into modal header
          https://kajabi.atlassian.net/browse/SAGE-312
        */}
        <Modal.Header
          title={modalTitle}
          aside={(
            <Button
              color={Button.COLORS.SECONDARY}
              icon={SageTokens.ICONS.REMOVE}
              iconOnly={true}
              subtle={true}
              onClick={() => setModalActive(false)}
            >
              Close
            </Button>
          )}
          headerProgressBar={(
            <ProgressBar
              label="Cloning product"
              percent="44"
            />
          )}
        />
        <Modal.Body>
          {/*
            TODO: Need to allow column panel to fill space
            with a footer at bottom and scroll in middle
            https://kajabi.atlassian.net/browse/SAGE-329
          */}
          <Grid.Row>
            <Grid.Col className="sage-col-sm-auto">
              <div style={{ width: '540px' }}>
                {renderStep()}
              </div>
            </Grid.Col>
            <Grid.Col small={GRID_BREAKPOINT_TOGGLES.HIDE}>
              {/* TODO: Dev to add actual graphic SVG here  with live edit synced */}
              <img
                src="//source.unsplash.com/random/832x575"
                style={{ margin: '0 auto', display: 'block', maxWidth: '100%' }}
                alt=""
              />
            </Grid.Col>
          </Grid.Row>
        </Modal.Body>
      </Modal>
    </Grid>
  );
};

export default Root;
