import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Description } from './Description';
import { Badge } from '../Badge';
import { Label } from '../Label';

export default {
  title: 'Sage/Description',
  component: Description,
  args: {
    actionWidth: null,
    items: [
      {
        title: 'Name',
        data: 'John Doe',
      }
    ]
  },
  argTypes: {
    ...selectArgs({
      layout: Description.LAYOUT,
    })
  }
};

const Template = (args) => <Description {...args} />;
export const Default = Template.bind({});

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  items: [
    {
      title: 'Short item',
      data: 'John Doe',
    },
    {
      title: 'Wrapping item',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim fringilla eros, at faucibus mauris aliquam at.',
    },
    {
      title: 'Item with hidden title',
      hide_title: true,
      data: 'This item\'s title is hidden. Suspendisse potenti. Pellentesque rhoncus nisi ut ultricies facilisis. Praesent facilisis pretium posuere. Sed odio risus, dignissim et augue sed, dapibus suscipit nisl. Donec sed auctor lorem. Curabitur ac fermentum est. Donec eget ultrices nisl, non rutrum sapien. Maecenas tempus aliquet mollis. Etiam efficitur sit amet ligula nec tincidunt. Nulla faucibus nunc ac odio facilisis, sollicitudin consequat augue euismod.',
    },
    {
      title: 'Item with HTML content',
      data: (
        <Label.Group>
          <Badge value="Lorem" color="draft" />
          <Badge value="Ipsum" color="draft" />
          <Badge value="Dolor" color="draft" />
          <Badge value="Sit" color="draft" />
          <Badge value="Amet" color="draft" />
          <Badge value="consectetur" color="draft" />
          <Badge value="adipiscing" color="draft" />
          <Badge value="elit" color="draft" />
          <Badge value="Duis" color="draft" />
          <Badge value="dignissim" color="draft" />
          <Badge value="fringilla" color="draft" />
          <Badge value="eros" color="draft" />
        </Label.Group>
      ),
    }
  ]
};

export const MultipleItemsWithActionButton = Template.bind({});
MultipleItemsWithActionButton.args = {
  items: [
    {
      title: 'No action',
      data: 'Action buttons are not required in every row.',
    },
    {
      title: 'Default action',
      data: 'Default actions show just an arrow icon.',
      action: {
        attributes: { href: '#' }
      }
    },
    {
      title: 'Default action showing label',
      data: 'Set `icon_only: false` to show the default label.',
      action: {
        iconOnly: false,
        attributes: { href: '#' }
      }
    },
    {
      title: 'Custom labeled action',
      data: 'Actions can be set to use a label. In such cases an custom action width may also be needed.',
      action: {
        value: 'Details',
        attributes: { href: '#' }
      }
    },
    {
      title: 'Custom labeled action visually hidden',
      data: 'Custom labels can also be made visually hidden with `value` set but `icon_only: true`',
      action: {
        value: 'Details',
        iconOnly: true,
        attributes: { href: '#' }
      }
    },
  ]
};

export const StackedLayout = Template.bind({});
StackedLayout.args = {
  layout: Description.LAYOUT.STACKED,
  items: [
    {
      title: 'Short item',
      data: 'John Doe',
    },
    {
      title: 'Wrapping item',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim fringilla eros, at faucibus mauris aliquam at.',
      action: { value: 'More' },
    },
    {
      title: 'Item with hidden title',
      hide_title: true,
      data: 'This item\'s title is hidden. Suspendisse potenti. Pellentesque rhoncus nisi ut ultricies facilisis. Praesent facilisis pretium posuere. Sed odio risus, dignissim et augue sed, dapibus suscipit nisl. Donec sed auctor lorem. Curabitur ac fermentum est. Donec eget ultrices nisl, non rutrum sapien. Maecenas tempus aliquet mollis. Etiam efficitur sit amet ligula nec tincidunt. Nulla faucibus nunc ac odio facilisis, sollicitudin consequat augue euismod.',
    },
    {
      title: 'Item with HTML content',
      data: (
        <Label.Group>
          <Badge value="Lorem" color="draft" />
          <Badge value="Ipsum" color="draft" />
          <Badge value="Dolor" color="draft" />
          <Badge value="Sit" color="draft" />
          <Badge value="Amet" color="draft" />
          <Badge value="consectetur" color="draft" />
          <Badge value="adipiscing" color="draft" />
          <Badge value="elit" color="draft" />
          <Badge value="Duis" color="draft" />
          <Badge value="dignissim" color="draft" />
          <Badge value="fringilla" color="draft" />
          <Badge value="eros" color="draft" />
        </Label.Group>
      ),
      action: { value: 'More tags' },
    }
  ]
};

export const CustomTitleAndActionWidths = Template.bind({});
CustomTitleAndActionWidths.args = {
  actionWidth: '88px',
  titleWidth: '128px',
  items: [
    {
      title: 'Very Long Title',
      data: 'John Doe',
      action: { value: 'More' }
    },
    {
      title: 'Name',
      data: 'John Doe',
      action: { value: 'Preview' }
    },
  ]
};
