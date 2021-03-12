import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { SageTokens } from '../configs';
import { DataCard } from './DataCard';

export default {
  title: 'Sage/DataCard',
  component: DataCard,
  subcomponents: {
    'DataCard.Header': DataCard.Header,
    'DataCard.Body': DataCard.Body,
    'DataCard.Group': DataCard.Group,
    'DataCard.ScrollContainer': DataCard.ScrollContainer,
  },
  argTypes: {
    ...selectArgs({
      color: DataCard.COLORS
    })
  },
  args: {
    color: DataCard.COLORS.DEFAULT
  }
};

export const Template = (args) => <DataCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
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
    </>
  )
};
Default.decorators = [
  (Story) => (
    <>
      <Grid container={Grid.CONTAINER_SIZES.XS}>
        <Story />
      </Grid>
    </>
  )
];

export const DataCardGroup = () => (
  <>
    <Grid container={Grid.CONTAINER_SIZES.XS}>
      <DataCard.Group color={DataCard.COLORS.DEFAULT}>
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
  </>
);

export const DataCardScrollContainer = () => (
  <>
    <Grid container={Grid.CONTAINER_SIZES.LG}>
      <DataCard.ScrollContainer>
        <DataCard.Group title="Aenean vehicula dignissim" color={DataCard.COLORS.DANGER}>
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
            </DataCard.Body>
          </DataCard>
        </DataCard.Group>
        <DataCard.Group title="Aenean vehicula dignissim">
          <DataCard>
            <DataCard.Header title="Morbi accumsan venenatis" />
            <DataCard.Body>
              <p>
                Duis sit amet libero lacus.
              </p>
              <p>
                Aenean ullamcorper faucibus purus a ultrices.
              </p>
            </DataCard.Body>
          </DataCard>
          <DataCard>
            <DataCard.Header title="Duis gravida" />
            <DataCard.Body>
              <p>
                Aenean vehicula dignissim condimentum.
              </p>
              <p>
                Morbi accumsan venenatis ante.
              </p>
            </DataCard.Body>
          </DataCard>
          <DataCard>
            <DataCard.Header title="Lobortis libero" />
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
            <DataCard.Header title="Et suscipit ligula" />
            <DataCard.Body>
              <p>
                Aenean vehicula dignissim condimentum.
              </p>
              <p>
                Morbi accumsan venenatis ante,
              </p>
            </DataCard.Body>
          </DataCard>
        </DataCard.Group>
      </DataCard.ScrollContainer>
    </Grid>
  </>
);
