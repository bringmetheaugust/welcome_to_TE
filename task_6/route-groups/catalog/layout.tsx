import React from 'react';

import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import { categories } from '#/lib/route-groups';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Boundary
      labels={['catalog layout']}
      color="cyan"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/route-groups/catalog"
            items={categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            }))}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
