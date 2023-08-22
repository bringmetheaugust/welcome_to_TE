import React from 'react';

import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import { HeaderNav } from '#/ui/header-nav';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Boundary
      labels={['main layout']}
      color="orange"
      animateRerendering={false}
    >
      <div className="flex justify-between">
        <HeaderNav />
        <div className="self-start">
          <ClickCounter />
        </div>
      </div>
      <div>{children}</div>
    </Boundary>
  );
}
