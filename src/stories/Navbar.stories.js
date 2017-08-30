import React from 'react';
import { storiesOf } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import withReadme from 'storybook-readme/with-readme';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';
import backgrounds from "@storybook/addon-backgrounds";

import Navbar from '../components/test-Navbar/Navbar';
import NavbarReadMe from '../components/test-Navbar/README.md';


const styles = {
  textAlign: 'center',
};
const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

storiesOf('Navbar', module)
  	.addDecorator(CenterDecorator)
    .addDecorator(backgrounds([
      { name: "white", value: "#FFFFFF", default: true },
      { name: "light gray", value: "#e7e7e7" },
      { name: "dark gray", value: "#A9A9A9" }
    ]))

  	.add('default navbar', withReadme(NavbarReadMe, () => (
  	    <Navbar />
  	)))

  ;