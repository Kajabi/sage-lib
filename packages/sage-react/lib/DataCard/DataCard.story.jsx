import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { Grid, } from '../Grid';
import { DataCard } from '../DataCard';
import { SageTokens } from '../configs';
import { withKnobs, radios } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import DataCardNotes from './DataCardNotes.md';
import DataCardGroupNotes from './DataCardGroupNotes.md';
import DataCardScrollNotes from './DataCardScrollNotes.md';

storiesOf('Sage/Data Card', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.MODAL}>
      <DataCard color={radios('Color', DataCard.COLORS, DataCard.COLORS.DEFAULT)}>
        <DataCard.Header title="Header">
          <Button
            subtle={true}
            color={Button.COLORS.SECONDARY}
            iconOnly={true}
            icon={SageTokens.ICONS.MAPPED}
          >
            Drag
          </Button>
        </DataCard.Header>
        <DataCard.Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            Duis sit amet libero lacus.
          </p>
          <p>
            Aenean ullamcorper faucibus purus a ultrices.
          </p>
          <p>
            Curabitur congue dolor eu condimentum scelerisque.
          </p>
          <p>
            Morbi at elit nunc.
          </p>
        </DataCard.Body>
      </DataCard>
    </Grid>
  ), {
    notes: { markdown: DataCardNotes }
  })
  .add('Data Card Group', () => (
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <DataCard.Group color={radios('Color', DataCard.COLORS, DataCard.COLORS.DEFAULT)}>
        <DataCard>
          <DataCard.Header title="Duis gravida" />
          <DataCard.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Duis sit amet libero lacus.
            </p>
            <p>
              Aenean ullamcorper faucibus purus a ultrices.
            </p>
          </DataCard.Body>
        </DataCard>
        <DataCard>
          <DataCard.Header title="Lobortis libero" />
          <DataCard.Body>
            <p>
              Curabitur congue dolor eu condimentum scelerisque.
            </p>
            <p>
              Morbi at elit nunc.
            </p>
            <p>
              Aenean vehicula dignissim condimentum.
            </p>
            <p>
              Morbi accumsan venenatis ante.
            </p>
          </DataCard.Body>
        </DataCard>
        <DataCard>
          <DataCard.Header title="Et suscipit ligula" />
          <DataCard.Body>
            <p>
              Nunc eget accumsan lacus.
            </p>
            <p>
              Curabitur porttitor lorem vel volutpat sollicitudin.
            </p>
            <p>
              Phasellus accumsan risus vel neque rutrum convallis.
            </p>
            <p>
              Duis gravida lobortis libero, et suscipit ligula pharetra in.
            </p>
          </DataCard.Body>
        </DataCard>
      </DataCard.Group>
    </Grid>
  ), {
    notes: { markdown: DataCardGroupNotes }
  })
  .add('Data Card Scroll Container', () => (
    <Grid container={Grid.CONTAINER_SIZES.LG}>
      <DataCard.ScrollContainer>
        <DataCard.Group title="Aenean vehicula dignissim" color={DataCard.COLORS.DANGER}>
          <DataCard>
            <DataCard.Header title="Duis gravida" />
            <DataCard.Body>
              <p className="t-sage--truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="t-sage--truncate">
                Duis sit amet libero lacus.
              </p>
              <p className="t-sage--truncate">
                Aenean ullamcorper faucibus purus a ultrices.
              </p>
            </DataCard.Body>
          </DataCard>
          <DataCard>
            <DataCard.Header title="Lobortis libero" />
            <DataCard.Body>
              <p className="t-sage--truncate">
                Curabitur congue dolor eu condimentum scelerisque.
              </p>
              <p className="t-sage--truncate">
                Morbi at elit nunc.
              </p>
              <p className="t-sage--truncate">
                Aenean vehicula dignissim condimentum.
              </p>
            </DataCard.Body>
          </DataCard>
        </DataCard.Group>
        <DataCard.Group title="Aenean vehicula dignissim">
          <DataCard>
            <DataCard.Header title="Morbi accumsan venenatis" />
            <DataCard.Body>
              <p className="t-sage--truncate">
                Duis sit amet libero lacus.
              </p>
              <p className="t-sage--truncate">
                Aenean ullamcorper faucibus purus a ultrices.
              </p>
            </DataCard.Body>
          </DataCard>
          <DataCard>
            <DataCard.Header title="Duis gravida" />
            <DataCard.Body>
              <p className="t-sage--truncate">
                Aenean vehicula dignissim condimentum.
              </p>
              <p className="t-sage--truncate">
                Morbi accumsan venenatis ante.
              </p>
            </DataCard.Body>
          </DataCard>
          <DataCard>
            <DataCard.Header title="Lobortis libero" />
            <DataCard.Body>
              <p className="t-sage--truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="t-sage--truncate">
                Duis sit amet libero lacus.
              </p>
              <p className="t-sage--truncate">
                Aenean ullamcorper faucibus purus a ultrices.
              </p>
            </DataCard.Body>
          </DataCard>
          <DataCard>
            <DataCard.Header title="Et suscipit ligula" />
            <DataCard.Body>
              <p className="t-sage--truncate">
                Aenean vehicula dignissim condimentum.
              </p>
              <p className="t-sage--truncate">
                Morbi accumsan venenatis ante,
              </p>
            </DataCard.Body>
          </DataCard>
        </DataCard.Group>
      </DataCard.ScrollContainer>
    </Grid>
  ), {
    notes: { markdown: DataCardScrollNotes }
  });
