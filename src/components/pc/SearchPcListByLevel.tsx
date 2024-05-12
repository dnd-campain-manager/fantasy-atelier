'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { useIQGetPcByLevel } from '@/src/hooks';
import {
  EmptyContent, LoadingCircle, MoreDataButton, PcListItem
} from '@/src/components';

interface Props {
  keyword: string;
  styles?: ClassNameValue;
}

export function SearchPcListByLevel({ keyword, styles, }: Props) {
  const {
    data: pcs,
    isLoading,
    isFetching,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  } = useIQGetPcByLevel(+keyword);

  const onClickNextData = useCallback(
    () => {
      fetchNextPage();
    },
    []
  );

  const css = {
    default: twJoin([
      `flex flex-col gap-5`,
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
              {`"${keyword}레벨"`} PC가 없습니다.
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
