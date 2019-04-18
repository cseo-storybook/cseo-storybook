import * as React from 'react';
import { storiesOf } from '@storybook/react';
import GettingStarted from '../components/guidelines/GettingStarted';
import NonReactApps from '../components/guidelines/NonReactApps';
import DesignHandoffs from '../components/guidelines/DesignHandoffs';
import Layouts from '../components/guidelines/Layouts';
import Spacing from '../components/guidelines/Spacing';
import Typography from '../components/guidelines/Typography';
import Iconography from '../components/guidelines/Iconography';
import Colors from '../components/guidelines/Colors';
import Accessibility from '../components/guidelines/Accessibility';
import Contribution from '../components/guidelines/Contribution';
import CodingStandards from '../components/guidelines/CodingStandards';


storiesOf('Guidelines', module).add(
  'Getting Started',
  () => <GettingStarted/>)
  .add(
    'Non ReactJS Applications',
  () => <NonReactApps/>)
  .add(
    'Handoffs from designers',
  () => <DesignHandoffs/>)
  .add(
    'Layouts',
  () => <Layouts/>)
  .add(
    'Typography',
  () => <Typography/>)
  .add(
    'Spacing',
  () => <Spacing/>)
  .add(
    'Colors',
  () => <Colors/>)
  .add(
    'Iconography',
  () => <Iconography/>)
  .add(
    'Accessibility',
  () => <Accessibility/>)
  .add(
    'Contribution',
  () => <Contribution/>)
  .add(
    'Coding Standards',
  () => <CodingStandards/>)
  ;