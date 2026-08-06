import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";

const AudioComparisonPlayer = lazy(() => import("@/components/home/AudioComparisonPlayer"));
const StatBand = lazy(() => import("@/components/home/StatBand"));
const CompareTable = lazy(() => import("@/components/home/CompareTable"));
const MatrixSection = lazy(() => import("@/components/home/MatrixSection"));
const UseCasesSection = lazy(() => import("@/components/home/UseCasesSection"));
const AgentsAPISection = lazy(() => import("@/components/home/AgentsAPISection"));
const PricingSection = lazy(() => import("@/components/home/PricingSection"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const SectionLoader = () => null;

const Index = () => (
  <>
    <Helmet>
      <title>Accentio — Accented Speech on Demand</title>
      <meta
        name="description"
        content="A voice engine that generates any target language with any specified native accent, at controllable intensity, verified to match real speakers."
      />
      <link rel="canonical" href="https://accentio.ai" />
      <meta property="og:title" content="Accentio — Accented Speech on Demand" />
      <meta
        property="og:description"
        content="Accent match — statistically indistinguishable from real speakers."
      />
      <meta property="og:url" content="https://accentio.ai" />
    </Helmet>
    <Hero />
    <Suspense fallback={<SectionLoader />}>
      <AudioComparisonPlayer />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <StatBand />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <CompareTable />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <MatrixSection />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <UseCasesSection />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <AgentsAPISection />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <PricingSection />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <FAQSection />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <CTASection />
    </Suspense>
  </>
);

export default Index;
