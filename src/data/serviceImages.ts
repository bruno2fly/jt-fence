/**
 * Service-specific photography for /services/[slug] pages.
 * Images are partitioned by service — the same file is never reused on two different service URLs.
 *
 * Source assets: /public/images/wood/ (project batch), /public/images/wood/fb/, and /public/images/wood/gemini/ (style-specific wood photography).
 * For wood-fences, alt text describes wood fencing only.
 * For vinyl / aluminum / pet pages, alts describe the product line sold; when you add true material-specific
 * photography, place files under e.g. /public/images/vinyl/ and replace the matching `src` strings below.
 *
 * Photo sets are disjoint by service URL — the same `src` is never used on two different /services/* pages.
 */

export type ServiceImageCategory =
  | 'hero'
  | 'intro'
  | 'benefit'
  | 'gallery'
  | 'detail'
  | 'style'
  | 'application';

export interface ServiceImageAsset {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  category: ServiceImageCategory;
}

/** Sorted list — disjoint slices per service (no URL reused across slugs) */
const W = [
  '/images/wood/PHOTO-2026-03-31-09-23-28.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 10.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 2.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 3.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 4.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 5.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 6.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 7.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 8.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29 9.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-29.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 10.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 11.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 12.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 13.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 14.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 15.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 16.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 2.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 3.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 4.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 5.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 6.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 7.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 8.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30 9.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-30.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-31 2.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-31 3.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-31 4.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-31.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 10.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 11.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 2.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 3.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 4.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 5.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 6.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 7.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 8.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32 9.jpg',
  '/images/wood/PHOTO-2026-03-31-09-23-32.jpg',
] as const;

/** JT Fence Facebook wood fence photography — used for /services/wood-fences and homepage hero */
const FB_WOOD = [
  '/images/wood/fb/fb-01.jpg',
  '/images/wood/fb/fb-02.jpg',
  '/images/wood/fb/fb-03.jpg',
  '/images/wood/fb/fb-04.jpg',
  '/images/wood/fb/fb-05.jpg',
  '/images/wood/fb/fb-06.jpg',
  '/images/wood/fb/fb-07.jpg',
  '/images/wood/fb/fb-08.jpg',
  '/images/wood/fb/fb-09.jpg',
] as const;

/** Wood style shots — Split Rail, Post and Board, Mixed Materials (Gemini project art) */
const WOOD_STYLE = {
  splitRailCape: '/images/wood/gemini/wood-split-rail-cape.png',
  postBoardColonial: '/images/wood/gemini/wood-post-board-colonial.png',
  mixedWoodMetal: '/images/wood/gemini/wood-mixed-materials.png',
} as const;

/** Pet & dog fencing — hero + feature photography only (no style grid on page) */
const PET_DOG = {
  heroHorizontal:
    '/images/pet/pet-hero-horizontal-fence.png',
  yardVinylSecure:
    '/images/pet/pet-yard-vinyl-secure.png',
} as const;

/** Vinyl category photography — one asset per style on /services/vinyl-fences */
const VINYL = {
  privacy: '/images/vinyl/vinyl-privacy.png',
  semiPrivacy: '/images/vinyl/vinyl-semi-privacy.png',
  picket: '/images/vinyl/vinyl-picket.png',
  lattice: '/images/vinyl/vinyl-lattice.png',
  postRail: '/images/vinyl/vinyl-post-rail.png',
  decorative: '/images/vinyl/vinyl-decorative.png',
} as const;

/** Homepage hero — same flagship shot as the wood-fences service hero */
export const homeHeroBackgroundSrc: string = FB_WOOD[0];

/** About page hero — yard sign & on-site branding (public/images/about/) */
export const aboutPageHeroBackgroundSrc = '/images/about/yard-sign-banner.png';

/** Pool & spa barrier projects — public/images/pool/ */
const POOL = {
  aerialHome: '/images/pool/pool-01-aerial-home.png',
  paversInstall: '/images/pool/pool-02-pavers-install.png',
  metalVinyl: '/images/pool/pool-03-metal-vinyl.png',
  poolSpaWide: '/images/pool/pool-04-pool-spa-wide.png',
  woodedPool: '/images/pool/pool-05-wooded-pool.png',
  promoEstimate: '/images/pool/pool-06-promo-estimate.png',
  residentialPromo: '/images/pool/pool-07-residential-promo.png',
} as const;

export type ServiceSlugKey =
  | 'wood-fences'
  | 'vinyl-fences'
  | 'aluminum-fences'
  | 'pet-dog-fencing'
  | 'pool-fence';

export interface ServiceImageSet {
  hero: ServiceImageAsset;
  intro: ServiceImageAsset;
  benefitsHighlight: ServiceImageAsset;
  styleImages: ServiceImageAsset[];
  /** Optional extra context shots (material / install detail) */
  detailStrip?: ServiceImageAsset[];
}

function asset(
  src: string,
  alt: string,
  category: ServiceImageCategory,
  title?: string,
  caption?: string
): ServiceImageAsset {
  return { src, alt, category, title, caption };
}

/* --- wood-fences: FB_WOOD[0–8] — Facebook project photography, nine images across hero → styles --- */
const wood: ServiceImageSet = {
  hero: asset(
    FB_WOOD[0],
    'Wood privacy fence installation by JT Fence Inc. — natural cedar-toned boards along a Massachusetts residential property',
    'hero'
  ),
  intro: asset(
    FB_WOOD[1],
    'Custom wood fencing with professional post setting and straight fence line, South Shore Massachusetts',
    'intro'
  ),
  benefitsHighlight: asset(
    FB_WOOD[2],
    'Quality wood fence craftsmanship and materials on a residential lot — JT Fence Inc.',
    'benefit',
    'Craftsmanship detail'
  ),
  styleImages: [
    asset(
      FB_WOOD[3],
      'Solid wood privacy fencing for backyard screening — JT Fence installation in Massachusetts',
      'style',
      'Privacy Fencing',
      'Solid or semi-solid panels'
    ),
    asset(
      FB_WOOD[4],
      'Traditional wood picket or privacy fence along a residential front or side yard, South Shore MA',
      'style',
      'Picket Fencing',
      'Classic curb appeal'
    ),
    asset(
      WOOD_STYLE.splitRailCape,
      'Rustic wood post-and-rail fence along a green hillside with a gray cedar-shake Cape Cod home, dormers, and central chimney',
      'style',
      'Split Rail',
      'Rustic and open'
    ),
    asset(
      WOOD_STYLE.postBoardColonial,
      'Natural wood post-and-rail fence beside a gravel driveway leading to a white clapboard Colonial with black shutters and a red front door',
      'style',
      'Post and Board',
      'Ranch / agricultural look'
    ),
    asset(
      FB_WOOD[7],
      'Wood fence with decorative top detail or lattice-style finish for airflow and curb appeal',
      'style',
      'Lattice Top',
      'Airflow + style'
    ),
    asset(
      WOOD_STYLE.mixedWoodMetal,
      'Horizontal wood privacy fence with black metal lattice topper, stone patio, and gray cedar-shake Cape Cod style home — wood and metal accents by JT Fence Inc.',
      'style',
      'Mixed Materials',
      'Wood with metal accents'
    ),
  ],
};

/* --- vinyl-fences: VINYL.* — category-matched project photography per style option --- */
const vinyl: ServiceImageSet = {
  hero: asset(
    VINYL.privacy,
    'Privacy vinyl fence enclosing a gray cedar-shake Cape Cod home with dormers and a central chimney — JT Fence Inc., South Shore Massachusetts',
    'hero'
  ),
  intro: asset(
    VINYL.semiPrivacy,
    'Semi-privacy vinyl fence along a white clapboard Colonial with black shutters and a red front door',
    'intro'
  ),
  benefitsHighlight: asset(
    VINYL.lattice,
    'Lattice-top vinyl fence at a tan shingled Craftsman bungalow with tapered columns and a wide porch',
    'benefit',
    'Low-maintenance PVC'
  ),
  styleImages: [
    asset(
      VINYL.privacy,
      'Privacy vinyl fence enclosing a gray cedar-shake Cape Cod home with dormers and a central chimney',
      'style',
      'Privacy Vinyl Fencing',
      'Solid panels for complete privacy'
    ),
    asset(
      VINYL.semiPrivacy,
      'Semi-privacy vinyl fence along a white clapboard Colonial with black shutters and a red front door',
      'style',
      'Semi-Privacy Vinyl Fencing',
      'Light and airflow with screening'
    ),
    asset(
      VINYL.picket,
      'Picket-style vinyl fence at a light blue Nantucket cottage with window boxes and a covered porch',
      'style',
      'Picket Style Vinyl',
      'Classic appearance without maintenance'
    ),
    asset(
      VINYL.lattice,
      'Lattice-top vinyl fence at a tan shingled Craftsman bungalow with tapered columns and a wide porch',
      'style',
      'Lattice Top Vinyl',
      'Decorative with modern appeal'
    ),
    asset(
      VINYL.postRail,
      'Post-and-rail vinyl fence along a red New England farmhouse with gambrel roof and attached barn',
      'style',
      'Post and Rail Vinyl',
      'Ranch or agricultural aesthetic'
    ),
    asset(
      VINYL.decorative,
      'Decorative vinyl fence with arbor at a dove-gray Victorian with turret, gingerbread trim, and wrap-around porch',
      'style',
      'Decorative Vinyl',
      'Contemporary and custom designs'
    ),
  ],
};

/* --- aluminum-fences: indices 21–29 --- */
const aluminum: ServiceImageSet = {
  hero: asset(
    W[21],
    'Black aluminum picket fence with sleek vertical rails on a modern Massachusetts residential property',
    'hero'
  ),
  intro: asset(
    W[22],
    'Aluminum fence line with powder-coated finish resisting rust and salt air near the South Shore coast',
    'intro'
  ),
  benefitsHighlight: asset(
    W[23],
    'Close-up of aluminum fence rail and picket connection showing precision metalwork by JT Fence Inc.',
    'benefit'
  ),
  styleImages: [
    asset(
      W[24],
      'Modern vertical picket aluminum fence with even spacing for security and curb appeal',
      'style',
      'Modern Vertical Picket'
    ),
    asset(
      W[25],
      'Horizontal rail aluminum fence for a minimalist contemporary look',
      'style',
      'Horizontal Rail'
    ),
    asset(
      W[26],
      'Ornamental aluminum fencing with decorative details at a residential entrance',
      'style',
      'Ornamental Aluminum'
    ),
    asset(
      W[27],
      'Semi-privacy aluminum fence balancing sight lines with airflow',
      'style',
      'Semi-Privacy Aluminum'
    ),
    asset(
      W[28],
      'Flat-top aluminum fence with straight clean lines along a property perimeter',
      'style',
      'Modern Flat Top'
    ),
    asset(
      W[29],
      'Custom aluminum fence layout following grade changes on a landscaped lot',
      'style',
      'Custom Design Aluminum'
    ),
  ],
};

/* --- pet-dog-fencing: PET_DOG — dog- & safety-focused page (no material “categories” grid) --- */
const pet: ServiceImageSet = {
  hero: asset(
    PET_DOG.heroHorizontal,
    'Border Collie on a green lawn inside a modern dark horizontal-slat dog fence with secure gate, gray Cape-style home beyond — JT Fence Inc.',
    'hero'
  ),
  intro: asset(
    PET_DOG.yardVinylSecure,
    'Bernese Mountain Dog in a landscaped yard secured by tall white vinyl privacy fencing with heavy-duty gate hardware — safe containment, South Shore Massachusetts',
    'intro'
  ),
  benefitsHighlight: asset(
    PET_DOG.heroHorizontal,
    'Modern horizontal pet fence and gate keeping a dog safely in the yard — jump and climb resistance designed for your breed',
    'benefit',
    'Gates & containment'
  ),
  styleImages: [],
};

/* --- pool-fence: full project photography — barrier + perimeter + promo --- */
const poolFence: ServiceImageSet = {
  hero: asset(
    POOL.poolSpaWide,
    'In-ground pool and spa with white vinyl privacy fence and black ornamental metal pool barrier on a Massachusetts residential property — JT Fence Inc.',
    'hero'
  ),
  intro: asset(
    POOL.aerialHome,
    'Aerial view of grey shingle Cape-style home with black metal pool fence enclosing the pool and manicured lawn — South Shore Massachusetts',
    'intro'
  ),
  benefitsHighlight: asset(
    POOL.metalVinyl,
    'Black ornamental metal pool safety fence with white vinyl privacy perimeter fencing — professional installation by JT Fence Boston',
    'benefit',
    'Safety + privacy together'
  ),
  styleImages: [
    asset(
      POOL.paversInstall,
      'Stone paver pool deck under construction with white vinyl privacy fence and black metal pool barrier — JT Fence Inc.',
      'style',
      'New builds & remodels',
      'Integrated with pavers and coping'
    ),
    asset(
      POOL.woodedPool,
      'Black metal pool fence around rectangular pool in a wooded backyard with stone patio — secure barrier, natural setting',
      'style',
      'Wooded & sloped lots',
      'Grade changes and tree lines'
    ),
    asset(
      POOL.promoEstimate,
      'Black metal pool fence enclosing a residential pool with autumn trees — JT Fence Boston pool safety projects',
      'style',
      'Code-ready layouts',
      'Spacing and height for MA requirements'
    ),
    asset(
      POOL.residentialPromo,
      'Pool deck enclosed by black ornamental fence at a blue-sided Massachusetts home — professional pool barrier installation',
      'style',
      'Premium backyards',
      'Gates, corners, and long runs'
    ),
    asset(
      POOL.aerialHome,
      'Two-story Cape home with pool area fenced for safety — aerial perspective of full backyard layout',
      'style',
      'Whole-property planning',
      'Pool zone + perimeter together'
    ),
    asset(
      POOL.poolSpaWide,
      'Pool and spa with waterfall, lounge area, and mixed vinyl privacy plus metal pool fence — resort-style backyard',
      'style',
      'Pool + spa combinations',
      'Mixed materials on one project'
    ),
  ],
};

export const serviceImageSets: Record<ServiceSlugKey, ServiceImageSet> = {
  'wood-fences': wood,
  'vinyl-fences': vinyl,
  'aluminum-fences': aluminum,
  'pet-dog-fencing': pet,
  'pool-fence': poolFence,
};

/** All pool project photos — full-width gallery on /services/pool-fence */
export const poolFenceAllGalleryImages: ServiceImageAsset[] = [
  asset(
    POOL.poolSpaWide,
    'Pool and spa with waterfall, mixed white vinyl privacy and black metal pool fencing on a bright day — Massachusetts',
    'gallery'
  ),
  asset(
    POOL.aerialHome,
    'Aerial view of Cape-style home with black metal fence around pool and green lawn — JT Fence Inc.',
    'gallery'
  ),
  asset(
    POOL.paversInstall,
    'Stone paver deck under construction with white vinyl and black metal pool fencing — professional install',
    'gallery'
  ),
  asset(
    POOL.metalVinyl,
    'Black ornamental pool fence with white vinyl privacy fence in background — South Shore backyard',
    'gallery'
  ),
  asset(
    POOL.woodedPool,
    'Wooded backyard with rectangular pool enclosed by black metal fence and grey stone patio',
    'gallery'
  ),
  asset(
    POOL.promoEstimate,
    'Black pool barrier around blue pool with autumn trees — JT Fence Boston pool projects',
    'gallery'
  ),
  asset(
    POOL.residentialPromo,
    'Residential pool enclosed by black metal fence with blue home and pergola — Massachusetts',
    'gallery'
  ),
];

export function getServiceImageSet(slug: string): ServiceImageSet | null {
  if (slug in serviceImageSets) {
    return serviceImageSets[slug as ServiceSlugKey];
  }
  return null;
}

/** Encode paths for URLs that contain spaces */
export function encodeImageSrc(src: string): string {
  return encodeURI(src);
}
