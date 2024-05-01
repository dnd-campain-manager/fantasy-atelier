'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { ExtendedCampain } from '@/src/entities';
import { CustomButton } from '@/src/components';

interface Props {
  campain: ExtendedCampain;
  styles?: ClassNameValue;
}

export function CampainDetailContent({ campain, styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <Link href={`/campains/${campain.id}/masters`} className='block mt-5'>
        <CustomButton full icon='mdi:alpha-m-circle'>마스터 목록</CustomButton>
      </Link>
      <Link href={`/campains/${campain.id}/pcs`} className='mt-5 block'>
        <CustomButton full icon='fluent:people-community-24-filled'>PC 목록</CustomButton>
      </Link>
      <Link href={`/campains/${campain.id}/sessions`} className='mt-5 block'>
        <CustomButton full icon='mingcute:paper-fill'>세션 목록</CustomButton>
      </Link>
    </>
  );
}
