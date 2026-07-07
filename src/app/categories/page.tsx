import { Suspense } from "react";

import { CategoryPage } from "@/components/catalog/CategoryPage";

export default function CategoriesPage() {
  return (
    <Suspense
      fallback={
        <main
          className="min-h-screen bg-[var(--home-surface)]"
          aria-busy="true"
        />
      }
    >
      <CategoryPage />
    </Suspense>
  );
}
