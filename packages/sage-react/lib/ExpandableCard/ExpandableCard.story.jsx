import React from 'react';
import { Checkbox } from '../Toggle';
import { ExpandableCard } from './ExpandableCard';
import { Badge } from '../Badge';
import { OptionsDropdown } from '../Dropdown';
import { Divider } from '../Divider';
import { SageClassnames } from '../configs';
import { Grid } from '../Grid';

export default {
  title: 'Sage/ExpandableCard',
  component: ExpandableCard,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component:
          'Card that can be expanded and collapsed in order to display additional content.',
      },
    },
  },
  args: {
    bodyBordered: false,
    expanded: false,
    children: (
      <>
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox1-demo"
          label="Grant offers"
          name="checkbox1-demo"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox2-demo"
          label="Add tags"
          name="checkbox2-demo"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox3-demo"
          label="Subscribe to emails"
          name="checkbox3-demo"
        />
      </>
    ),
    triggerLabel: 'Expand',
  },
};
const Template = (args) => <ExpandableCard {...args} />;

export const Default = Template.bind({});

export const CustomHeader = () => (
  <>
    <ExpandableCard
      triggerLabel="Expand"
      alignTrigger="left"
      headerContent={(
        <>
          <Grid>
            <Grid.Row horizontalAlignment="space-between">
              <Grid.Col>
                ¥1,107,243.69 JPY ($8,000.50 USD)
                <Badge
                  className={SageClassnames.SPACERS.XS_LEFT}
                  isInteractive={false}
                  value="Label"
                />
              </Grid.Col>
              <Grid.Col className={SageClassnames.TYPE_ALIGN_RIGHT}>
                <time dateTime="2023-02-14 20:00">Feb 14, 2023</time>
                <OptionsDropdown
                  className={SageClassnames.SPACERS.LG_LEFT}
                  exitPanelHandler={() => {}}
                  isPinned={false}
                  onEscapeHook={() => {}}
                  triggerButtonSubtle={true}
                  options={[
                    {
                      id: 1,
                      label: 'Send reciept',
                    },
                    {
                      id: 2,
                      label: 'View receipt',
                    },
                    {
                      id: 3,
                      label: 'Refund payment',
                    },
                  ]}
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </>
      )}
    >
      <div>This is the content</div>
    </ExpandableCard>

    {/* <Divider
      className={`${SageClassnames.SPACERS.XS_BOTTOM} ${SageClassnames.SPACERS.XS_TOP}`}
    /> */}


  </>
);
