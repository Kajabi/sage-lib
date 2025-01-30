import React from 'react';
import { SageClassnames } from '../configs';
import { Grid } from '../Grid';
import { Link } from '../Link';
import { Type } from './Type';

export default {
  title: 'Sage/Type',
  component: Type,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Sage provides a constrained, purposeful set of typographic styles.'
      },
    },
  },
  args: {
    children: (
      <>
        <h1>Lorem ipsum dolor sit</h1>
        <h2>Consectetur adipiscing elit</h2>
        <h3>Praesent ac cursus lacus</h3>
        <h4>Donec imperdiet nisi a sodales</h4>
        <h5>Etiam suscipit ullamcorper</h5>
        <h6>Class aptent taciti sociosqu</h6>
        <p>
          Nunc egestas nunc sapien, non laoreet mi dictum aliquam.
          Vivamus vehicula sapien{' '}
          <Link href="//example.com" target="_blank" rel="noopener">
            amolestie gravida
          </Link>.
          Praesent <strong>congue feugiat ipsum</strong>, in venenatis nunc tempor vitae.
        </p>
        <p>
          Vivamus enim quam, <em>commodo eget posuere eu</em>, venenatis eu eros.
          Mauris ipsum diam, pulvinar vitae porttitor et, facilisis a eros.
          Sed eu orci nec lacus aliquet fermentum. Nam et libero dui.
          Quisque auctor tortor vel purus vestibulum suscipit.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <ul>
          <li>Quisque eu quam libero.</li>
          <li>
            Pellentesque accumsan maximus neque, viverra semper risus faucibus tincidunt.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </li>
          <li>
            In hac habitasse platea dictumst.
            Nulla neque nulla, fringilla at euismod a, pellentesque et velit.
            Suspendisse pulvinar rhoncus fermentum.
          </li>
          <li>Vivamus at suscipit odio. Proin at purus vel ante suscipit porttitor.</li>
        </ul>
        <ol>
          <li>Quisque eu quam libero.</li>
          <li>
            Pellentesque accumsan maximus neque, viverra semper risus faucibus tincidunt.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </li>
          <li>
            In hac habitasse platea dictumst.
            Nulla neque nulla, fringilla at euismod a, pellentesque et velit.
            Suspendisse pulvinar rhoncus fermentum.
          </li>
          <li>Vivamus at suscipit odio. Proin at purus vel ante suscipit porttitor.</li>
        </ol>

        <h2>Additional Type Features</h2>

        <h3>Trunction</h3>
        <p className={`${SageClassnames.TRUNCATE_TEXT}`}>Text truncation for extra long strings of text will get cut off if it&apos;s longer than its container and an ellipsis will be added</p>

        <h3>Alignment</h3>
        <p>Text can be left aligned.</p>
        <p className={`${SageClassnames.TYPE_ALIGN_CENTER}`}>Text can be center aligned.</p>
        <p className={`${SageClassnames.TYPE_ALIGN_RIGHT}`}>Text can be right aligned.</p>

        <h3>Strikethrough</h3>
        <p className={`${SageClassnames.TYPE_STRIKETHROUGH}`}>Strikethough can be applied to text.</p>

        <h3>Underline</h3>
        <p className={`${SageClassnames.TYPE_UNDERLINE_DOTTED}`}>Dotted underline can be applied to text.</p>
      </>
    )
  }
};

const Template = (args) => <Type {...args} />;
export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Grid container={Grid.CONTAINER_SIZES.SM}>
        {Story()}
      </Grid>
    </>
  )
];
