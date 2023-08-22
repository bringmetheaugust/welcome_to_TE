import { SkeletonCard } from '#/ui/skeleton-card';
import { categories, Category } from '#/lib/route-groups';

function getCategoryBySlug(slug: string): Category {
  return categories.find((category) => category.slug === slug);
}

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = getCategoryBySlug(params.categorySlug);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        {category.name} tiles
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
