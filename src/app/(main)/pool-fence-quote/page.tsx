import type { Metadata } from 'next';
import PoolFenceLandingClient from './PoolFenceLandingClient';

export const metadata: Metadata = {
  title: 'Pool Fence Installation Massachusetts | Free Quote | JT Fence',
  description: 'Professional pool fence installation across South Shore & Cape Cod MA. Code-compliant, safety-rated barriers. Free estimate. Licensed & insured. Call (781) 420-5858.',
  openGraph: {
    title: 'Pool Fence Installation | JT Fence Inc. — Massachusetts',
    description: 'Keep your family safe this summer. Code-ready pool barriers installed by JT Fence across Plymouth, Cape Cod & South Shore.',
  },
};

export default function PoolFenceQuotePage() {
  return <PoolFenceLandingClient />;
}
