import React from 'react';

import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Boundary
      labels={['centered content layout']}
      color="violet"
      animateRerendering={false}
    >
      <main className="grid h-[60vh] place-items-center">
        <div className="absolute right-2 top-2">
          <ClickCounter />
        </div>

        {children}
      </main>
    </Boundary>
  );
}
