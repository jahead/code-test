import React from 'react';
import { Pill } from '../../Pill';

export type PublishPillProps = {
  published: boolean;
};

export const PublishPill = (props: PublishPillProps) => {
  return props?.published ? (
    <Pill colour={'green'} text="Published" />
  ) : (
    <Pill colour={'red'} text="Unpublished" />
  );
};
