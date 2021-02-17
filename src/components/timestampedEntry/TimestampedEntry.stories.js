import React from 'react';
import TimestampedEntry from './TimestampedEntry';

export default {
  component: TimestampedEntry,
  title: 'TimestampedEntry',
}

export const Default = () =>
  <TimestampedEntry entryTitle="Meeting Title">
    <span>May 29,<br />2020</span>
  </TimestampedEntry>