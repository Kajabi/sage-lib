import React from 'react';
import {
  Button,
  Grid,
  Modal,
  SageTokens,
} from '../../..';
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
        {/* TODO: Build dismiss into modal header} */}
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
        >
          {/*
            TODO: Progress bar needed in React
          */}
          {/*
            TODO: Progress bar needs "full bleed" option
            that works to span modal header
          */}
        </Modal.Header>
        <Modal.Body>
          {/*
            TODO: Need to allow column panel to fill space
            with a footer at bottom and scroll in middle
          */}
          <Grid.Row>
            <Grid.Col size={4}>
              {renderStep()}
            </Grid.Col>
            <Grid.Col size={8}>
              {/* TODO: Need actual graphic SVG here */}
              {/* TODO: Need to consider graphic customization features */}
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
