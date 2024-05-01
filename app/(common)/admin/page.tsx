import React from 'react';
import { setMeta } from '@/src/utils';
import { AdminBlock } from '@/src/components';

interface Props {
  //
}

export const metadata = setMeta({
  title: '관리자 페이지',
  url: '/admin',
});

export default function AdminPage() {
  return (
    <>
      <AdminBlock />
    </>
  );
}
