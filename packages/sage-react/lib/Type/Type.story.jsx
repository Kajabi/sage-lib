import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Grid, Link } from '../index';
import Type from './Type';
import TypeNotes from './TypeNotes.md';

storiesOf('Sage/Type', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Grid container={Grid.CONTAINER_SIZES.SM}>
      <Type>
        <h1>Lorem ipsum dolor sit</h1>
        <h2>Consectetur adipiscing elit</h2>
        <h3>Praesent ac cursus lacus</h3>
        <h4>Donec imperdiet nisi a sodales</h4>
        <h5>Etiam suscipit ullamcorper</h5>
        <h6>Class aptent taciti sociosqu</h6>
        <p>
          Nunc egestas nunc sapien, non laoreet mi dictum aliquam.
          Vivamus vehicula sapien{' '}
          <Link href="//example.com" target="_blank" referrer="no-referrer">
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
      </Type>
    </Grid>
  ), {
    notes: { markdown: TypeNotes }
  });
