'use client';

import React, { useEffect } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';
import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';
import {
  Jwt, Nihil, useTokenRefresh
} from '@/src/common';
import { logo } from '@/src/images';
import { authStore } from '@/src/entities';

interface Props {
  styles?: ClassNameValue;
}

export function Logo({ styles, }: Props) {
  const { session, updateSession, } = authStore();

  const qc = useQueryClient();
  const tokenRefresh = useTokenRefresh();

  useEffect(() => {
    if (session) {
      const isExpired = Jwt.isExpired(session.accessExp);

      if (isExpired) {
        console.log('?');

        tokenRefresh.mutate({
          userId: session.id,
          signInId: session.signInId,
          refreshToken: session.refreshToken,
        }, {
          onSuccess(res) {
            qc.invalidateQueries();

            const { data, } = res;

            updateSession(data);

            Nihil.toast({
              type: 'success',
              text: '액세스 토큰이 재발급 되었습니다.',
            });
          },
        });
      }
    }
  }, [ session, ]);

  const css = {
    default: twJoin([
      `text-center select-none`,
      styles,
    ]),
    image: twJoin([
      `w-[200px] h-auto`,
    ]),
  };

  return (
    <>
      <h1 className={css.default}>
        <Link href='/' as='/' className='inline-block'>
          <Image
            src={logo.src}
            alt='logo'
            width={logo.width}
            height={logo.height}
            priority
            className={css.image}
          />
        </Link>
      </h1>
    </>
  );
}
