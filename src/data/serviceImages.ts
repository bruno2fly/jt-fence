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

/*
 * Original wood project batch — retained for future gallery use:
 * /images/wood/PHOTO-2026-03-31-09-23-28.jpg through PHOTO-2026-03-31-09-23-32 11.jpg
 * (41 images total in /public/images/wood/)
 */

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

/** Wood style shots — Split Rail, Post and Board, Mixed Materials (Gemini project art) + real project photography */
const WOOD_STYLE = {
  splitRailCape: '/images/wood/gemini/wood-split-rail-cape.png',
  postBoardColonial: '/images/wood/gemini/wood-post-board-colonial.png',
  mixedWoodMetal: '/images/wood/gemini/wood-mixed-materials.png',
  privacyNatural01: '/images/wood/wood-privacy-natural-01.jpg',
  horizontalStainedGate: '/images/wood/wood-horizontal-stained-gate.jpg',
  spindleTop01: '/images/wood/wood-spindle-top-01.jpg',
  spindleTop02: '/images/wood/wood-spindle-top-02.jpg',
  spindleTop03: '/images/wood/wood-spindle-top-03.jpg',
  spindleTop04: '/images/wood/wood-spindle-top-04.jpg',
} as const;

/** Pet & dog fencing — hero + feature photography only (no style grid on page) + real project photography */
const PET_DOG = {
  heroHorizontal:
    '/images/pet/pet-hero-horizontal-fence.png',
  yardVinylSecure:
    '/images/pet/pet-yard-vinyl-secure.png',
  aluminumFenceBackyard:
    '/images/pet/pet-aluminum-fence-backyard.jpg',
} as const;

/** Vinyl category photography — one asset per style on /services/vinyl-fences + real project photography */
const VINYL = {
  privacy: '/images/vinyl/vinyl-privacy.png',
  semiPrivacy: '/images/vinyl/vinyl-semi-privacy.png',
  picket: '/images/vinyl/vinyl-picket.png',
  lattice: '/images/vinyl/vinyl-lattice.png',
  postRail: '/images/vinyl/vinyl-post-rail.png',
  decorative: '/images/vinyl/vinyl-decorative.png',
  privacyWhite01: '/images/vinyl/vinyl-privacy-white-01.jpg',
  privacyWhite02: '/images/vinyl/vinyl-privacy-white-02.jpg',
  privacyWhiteGate: '/images/vinyl/vinyl-privacy-white-gate.jpg',
  semiPrivacyLattice: '/images/vinyl/vinyl-semi-privacy-lattice.jpg',
  postRailHydrangeas: '/images/vinyl/vinyl-post-rail-hydrangeas.jpg',
} as const;

/** Homepage hero — same flagship shot as /services/vinyl-fences for consistent premium vinyl branding */
export const homeHeroBackgroundSrc: string = VINYL.privacy;

/** About page hero — yard sign & on-site branding (public/images/about/) */
export const aboutPageHeroBackgroundSrc = '/images/about/yard-sign-banner.png';

/** Aluminum fencing — real project photography */
const ALUMINUM = {
  drivewayGateArched: '/images/aluminum/aluminum-driveway-gate-arched.jpg',
  railingUnderDeck: '/images/aluminum/aluminum-railing-under-deck.jpg',
  fenceBackyardPet: '/images/aluminum/aluminum-fence-backyard-pet.jpg',
  vinylMixedCombo: '/images/aluminum/aluminum-vinyl-mixed-combo.jpg',
  vinylPropertyLine: '/images/aluminum/aluminum-vinyl-property-line.jpg',
  cableRailingStairs: '/images/aluminum/aluminum-cable-railing-stairs.jpg',
  vinylMixedYard: '/images/aluminum/aluminum-vinyl-mixed-yard.jpg',
} as const;

/** Pool & spa barrier projects — public/images/pool/ + real project photography */
const POOL = {
  aerialHome: '/images/pool/pool-01-aerial-home.png',
  paversInstall: '/images/pool/pool-02-pavers-install.png',
  metalVinyl: '/images/pool/pool-03-metal-vinyl.png',
  poolSpaWide: '/images/pool/pool-04-pool-spa-wide.png',
  woodedPool: '/images/pool/pool-05-wooded-pool.png',
  promoEstimate: '/images/pool/pool-06-promo-estimate.png',
  residentialPromo: '/images/pool/pool-07-residential-promo.png',
  aluminumBackyard01: '/images/pool/pool-aluminum-backyard-01.jpg',
  aluminumPatioUmbrella: '/images/pool/pool-aluminum-patio-umbrella.jpg',
  aluminumWoodedNew: '/images/pool/pool-aluminum-wooded-new.jpg',
  aluminumJtSign01: '/images/pool/pool-aluminum-jt-sign-01.jpg',
  aluminumJtSign02: '/images/pool/pool-aluminum-jt-sign-02.jpg',
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

/* --- wood-fences: FB_WOOD[0–8] — Facebook project photography, nine images across hero → styles + real project photos --- */
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
    asset(
      WOOD_STYLE.spindleTop01,
      'Natural wood fence with decorative spindle top detail — residential project by JT Fence Inc.',
      'style',
      'Spindle Top',
      'Decorative wood detail'
    ),
    asset(
      WOOD_STYLE.spindleTop02,
      'Natural wood fence with spindle top detail among landscaping and trees',
      'style',
      'Spindle Top (Landscape)',
      'Garden integration'
    ),
    asset(
      WOOD_STYLE.spindleTop03,
      'Natural wood fence with spindle top detail along street view',
      'style',
      'Spindle Top (Street View)',
      'Curb appeal with detail'
    ),
    asset(
      WOOD_STYLE.spindleTop04,
      'Natural wood fence with spindle top detail in garden setting',
      'style',
      'Spindle Top (Garden)',
      'Ornamental fencing'
    ),
  ],
  detailStrip: [
    asset(
      WOOD_STYLE.privacyNatural01,
      'Natural cedar/wood privacy fence along landscaped residential yard',
      'detail',
      'Natural Cedar Privacy',
      'Real project photography'
    ),
    asset(
      WOOD_STYLE.horizontalStainedGate,
      'Dark stained horizontal wood fence with gate, JT Fence Boston branded',
      'detail',
      'Stained Horizontal Fence',
      'Professional finish'
    ),
  ],
};

/* --- vinyl-fences: VINYL.* — category-matched project photography per style option + real project photos --- */
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
  detailStrip: [
    asset(
      VINYL.privacyWhite01,
      'White vinyl privacy fence on bright green lawn, sunny residential setting',
      'detail',
      'White Vinyl Privacy',
      'Real project photography'
    ),
    asset(
      VINYL.privacyWhite02,
      'White vinyl privacy fence near residential buildings',
      'detail',
      'Vinyl Privacy Installation',
      'Urban residential'
    ),
    asset(
      VINYL.privacyWhiteGate,
      'White vinyl privacy fence with gate section',
      'detail',
      'Vinyl Privacy Gate',
      'Functional access'
    ),
    asset(
      VINYL.semiPrivacyLattice,
      'White vinyl semi-privacy fence with lattice top',
      'detail',
      'Vinyl Lattice Top',
      'Light and airflow'
    ),
    asset(
      VINYL.postRailHydrangeas,
      'White vinyl post-and-rail fence with blue hydrangeas, Cape Cod setting',
      'detail',
      'Vinyl Post-and-Rail',
      'Landscaping integration'
    ),
  ],
};

/* --- aluminum-fences: real project photography --- */
const aluminum: ServiceImageSet = {
  hero: asset(
    ALUMINUM.drivewayGateArched,
    'Black aluminum arched driveway gate with wood fence wings — elegant entryway',
    'hero'
  ),
  intro: asset(
    ALUMINUM.fenceBackyardPet,
    'Black aluminum fence around backyard with pet containment visible',
    'intro'
  ),
  benefitsHighlight: asset(
    ALUMINUM.railingUnderDeck,
    'Black aluminum railing under white deck and stairs — precision installation',
    'benefit',
    'Quality metalwork'
  ),
  styleImages: [
    asset(
      ALUMINUM.drivewayGateArched,
      'Black aluminum arched driveway gate with wood fence wings — elegant residential entryway',
      'style',
      'Driveway Gates',
      'Decorative and functional'
    ),
    asset(
      ALUMINUM.fenceBackyardPet,
      'Black aluminum fence around backyard for pet containment and security',
      'style',
      'Aluminum Fencing',
      'Durable and low-maintenance'
    ),
    asset(
      ALUMINUM.railingUnderDeck,
      'Black aluminum railing under white deck and stairs — sleek contemporary design',
      'style',
      'Aluminum Railings',
      'Safety and style'
    ),
    asset(
      ALUMINUM.vinylMixedCombo,
      'Black aluminum and white vinyl mixed fence installation — complementary materials',
      'style',
      'Mixed Materials',
      'Aluminum with vinyl accents'
    ),
    asset(
      ALUMINUM.vinylPropertyLine,
      'Black aluminum with white vinyl along property line — hybrid design',
      'style',
      'Aluminum & Vinyl Combo',
      'Design flexibility'
    ),
    asset(
      ALUMINUM.cableRailingStairs,
      'White aluminum cable railing along stone staircase — modern minimalist lines',
      'style',
      'Cable Railing',
      'Contemporary aesthetic'
    ),
    asset(
      ALUMINUM.vinylMixedYard,
      'Black aluminum and vinyl mixed fencing in landscaped yard — professional installation',
      'style',
      'Landscaped Integration',
      'Coordinated design'
    ),
  ],
};

/* --- pet-dog-fencing: PET_DOG — dog- & safety-focused page (no material “categories” grid) + real project photos --- */
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
  detailStrip: [
    asset(
      PET_DOG.aluminumFenceBackyard,
      'Black aluminum fence around backyard for pet containment — safe and secure',
      'detail',
      'Aluminum Pet Fence',
      'Real project photography'
    ),
  ],
};

/* --- pool-fence: full project photography — barrier + perimeter + promo + real project photos --- */
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
    asset(
      POOL.aluminumBackyard01,
      'Black aluminum pool fence around backyard pool area near upscale home',
      'style',
      'Aluminum Pool Fencing',
      'Modern security'
    ),
    asset(
      POOL.aluminumPatioUmbrella,
      'Black aluminum pool fence with patio furniture and umbrella',
      'style',
      'Poolside Entertainment',
      'Integrated design'
    ),
    asset(
      POOL.aluminumWoodedNew,
      'Black aluminum pool fence in wooded new construction setting',
      'style',
      'New Construction Pools',
      'Fresh installations'
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
  asset(
    POOL.aluminumBackyard01,
    'Black aluminum pool fence around backyard pool area near upscale home',
    'gallery'
  ),
  asset(
    POOL.aluminumPatioUmbrella,
    'Black aluminum pool fence with patio furniture and umbrella',
    'gallery'
  ),
  asset(
    POOL.aluminumWoodedNew,
    'Black aluminum pool fence in wooded new construction setting',
    'gallery'
  ),
  asset(
    POOL.aluminumJtSign01,
    'Black aluminum pool fence with JT Fence yard sign visible',
    'gallery'
  ),
  asset(
    POOL.aluminumJtSign02,
    'Another angle of pool fence with JT Fence sign',
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
