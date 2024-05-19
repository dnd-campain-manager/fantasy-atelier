'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue;
}

export function TimePicker({ styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <div className={css.default}>content</div>
    </>
  );
}
