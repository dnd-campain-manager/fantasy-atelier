'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import {
  Calendar, LoadingCircle, Nihil, useGetCampains
} from '@/src/common';

interface Props {
  styles?: ClassNameValue;
}

export function SessionCalendar({ styles, }: Props) {
  const {
    data: campains,
    isLoading,
    isFetching,
  } = useGetCampains();

  console.log(Calendar.monthData());
  console.log(Calendar.monthData(null, 1));

  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  if (isLoading || isFetching) {
    return <LoadingCircle />;
  }

  return (
    <>
      {Nihil.string(campains.data)}
      <div>content</div>
    </>
  );
}
