import React from 'react';
import Timer from '../src/components/Timer.js';
import Echo from '../src/components/Echo.js';
import { storiesOf } from '@storybook/react';

storiesOf('Timer', module).add('Show', () => <Timer />);
storiesOf('Echo', module).add('Show', () => <Echo />);
