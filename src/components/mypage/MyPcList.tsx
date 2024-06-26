'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { authStore } from '@/src/entities';
import {
  EmptyContent, LoadingCircle, MoreDataButton, PcListItem
} from '@/src/components';
import { useIQGetPcByUserId } from '@/src/hooks';

interface Props {
  styles?: ClassNameValue;
}

export function MyPcList({ styles, }: Props) {
  const { session, } = authStore();

  const {
    data: pcs,
    isLoading,
    isFetching,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  } = useIQGetPcByUserId(session?.userId);

  const onClickNextData = useCallback(
    () => {
      fetchNextPage();
    },
    []
  );

  const css = {
    default: twJoin([
      `flex flex-col gap-3 text-middle font-500 mb-5`,
      styles,
    ]),
  };

  if (isLoading || isFetching) {
    return (
      <LoadingCircle />
    );
  }

  return (
    isSuccess && (
      <>
        <div className={css.default}>
          {pcs.pages[0].data.pcs.length === 0 && (
            <EmptyContent>
              생성한 PC가 없습니다.
            </EmptyContent>
          )}

          {pcs.pages.map((page) => (
            page.data.pcs.map((pc) => (
              <PcListItem key={pc.id} pc={pc} />
            ))
          ))}
        </div>

        {hasNextPage && (
          <MoreDataButton moreData={onClickNextData} />
        )}
      </>
    )
  );
}
