import {
  FoundingProgram,
  HomeFooter,
  NewsletterSignup,
} from "@/components/shared/homepage/components";
import {
  footerColumns,
  foundingBenefits,
} from "@/components/shared/homepage/homepage.data";
import { SiteHeader } from "@/components/shared/site/SiteHeader";
import type { Product } from "@/data/catalog";

import { ProductHero } from "./ProductHero";
import {
  AboutBookSection,
  AuthorSpotlightSection,
  RecommendationsSection,
  ReviewsSection,
  SpecificationsSection,
} from "./ProductSections";

export function ProductDetailPage({ product }: { product: Product }) {
  return (
    <main className="bg-[var(--home-surface)] text-[var(--home-green-deep)]">
      <SiteHeader />
      <ProductHero product={product} />
      <AboutBookSection product={product} />
      <SpecificationsSection product={product} />
      <AuthorSpotlightSection product={product} />
      <ReviewsSection product={product} />
      <RecommendationsSection />
      <FoundingProgram benefits={foundingBenefits} />
      <NewsletterSignup />
      <HomeFooter columns={footerColumns} />
    </main>
  );
}
