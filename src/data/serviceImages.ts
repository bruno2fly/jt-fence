/**
 * Service-specific photography for /services/[slug] pages.
 * Images are partitioned by service — the same file is never reused on two different service URLs.
 *
 * Source assets: /public/images/wood/ (project batch). For wood-fences, alt text describes wood fencing.
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

export type ServiceSlugKey =
  | 'wood-fences'
  | 'vinyl-fences'
  | 'aluminum-fences'
  | 'pet-dog-fencing';

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

/* --- wood-fences: indices 0–11 — descriptive wood-specific alts --- */
const wood: ServiceImageSet = {
  hero: asset(
    W[0],
    'Cedar wood privacy fence with natural grain installed along a backyard in Plymouth, MA by JT Fence Inc.',
    'hero'
  ),
  intro: asset(
    W[1],
    'Pressure-treated wood fence panels showing clean vertical lines and professional post setting, South Shore Massachusetts',
    'intro'
  ),
  benefitsHighlight: asset(
    W[2],
    'Close-up of wood fence construction and hardware detail on a residential property in Massachusetts',
    'benefit',
    'Craftsmanship detail'
  ),
  styleImages: [
    asset(
      W[3],
      'Solid wood privacy fencing with tight board spacing for backyard screening in Plymouth, MA',
      'style',
      'Privacy Fencing',
      'Solid or semi-solid panels'
    ),
    asset(
      W[4],
      'Traditional wood picket fence with pointed tops along a front yard, installed by JT Fence in South Shore MA',
      'style',
      'Picket Fencing',
      'Classic curb appeal'
    ),
    asset(
      W[5],
      'Rustic split rail wood fence defining property lines on a Massachusetts residential lot',
      'style',
      'Split Rail',
      'Rustic and open'
    ),
    asset(
      W[6],
      'Post and board wood fence in a ranch style along a wide yard perimeter',
      'style',
      'Post and Board',
      'Ranch / agricultural look'
    ),
    asset(
      W[7],
      'Wood privacy fence with lattice top section for airflow and decorative detail',
      'style',
      'Lattice Top',
      'Airflow + style'
    ),
    asset(
      W[8],
      'Custom wood fence line with metal post accents and natural wood finish, JT Fence Inc. installation',
      'style',
      'Mixed Materials',
      'Wood with metal accents'
    ),
  ],
  detailStrip: [
    asset(
      W[9],
      'Ground-level view of wood fence posts set in concrete for long-term stability in New England weather',
      'detail'
    ),
    asset(
      W[10],
      'Residential backyard wood fence installation showing straight runs and finished gate opening',
      'application'
    ),
  ],
};

/* --- vinyl-fences: indices 12–20 — alts match vinyl product line (TODO:ASSET replace with true vinyl JPGs) --- */
const vinyl: ServiceImageSet = {
  hero: asset(
    W[12],
    'White vinyl privacy fence along a residential lot in South Shore Massachusetts — low-maintenance PVC fencing by JT Fence Inc.',
    'hero'
  ),
  intro: asset(
    W[13],
    'Vinyl fence panels with clean routed lines and consistent color, professional installation in MA',
    'intro'
  ),
  benefitsHighlight: asset(
    W[14],
    'Vinyl fence corner and post detail showing durable PVC construction and UV-stable finish',
    'benefit'
  ),
  styleImages: [
    asset(
      W[15],
      'Privacy vinyl fencing with full-height solid panels for backyard seclusion in Plymouth, MA',
      'style',
      'Privacy Vinyl Fencing'
    ),
    asset(
      W[16],
      'Semi-privacy vinyl fencing with subtle spacing for light and airflow on a Massachusetts home',
      'style',
      'Semi-Privacy Vinyl Fencing'
    ),
    asset(
      W[17],
      'Picket-style vinyl fence in classic white along a front landscape bed, South Shore MA',
      'style',
      'Picket Style Vinyl'
    ),
    asset(
      W[18],
      'Vinyl privacy fence with decorative lattice top section for a finished, custom look',
      'style',
      'Lattice Top Vinyl'
    ),
    asset(
      W[19],
      'Post and rail vinyl fence in a ranch profile for large yards and open properties',
      'style',
      'Post and Rail Vinyl'
    ),
    asset(
      W[20],
      'Decorative vinyl fence line with contemporary profile and durable PVC construction',
      'style',
      'Decorative Vinyl'
    ),
  ],
  detailStrip: [
    asset(
      W[11],
      'Vinyl fence gate and latch hardware installed for smooth operation and long service life',
      'detail'
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

/* --- pet-dog-fencing: indices 30–38 --- */
const pet: ServiceImageSet = {
  hero: asset(
    W[30],
    'Tall backyard dog fence enclosing a green lawn for safe pet play in Wareham, MA — JT Fence Inc.',
    'hero'
  ),
  intro: asset(
    W[31],
    'Secure residential pet fencing with reinforced height for active dogs, South Shore Massachusetts',
    'intro'
  ),
  benefitsHighlight: asset(
    W[32],
    'Pet-safe gate hardware and latch installed to prevent clever dogs from opening the fence',
    'benefit'
  ),
  styleImages: [
    asset(
      W[33],
      'Full privacy pet fencing for maximum containment along a backyard tree line',
      'style',
      'Full Privacy Dog Fencing'
    ),
    asset(
      W[34],
      'Semi-privacy pet fence allowing you to see your dog while keeping them safely contained',
      'style',
      'Semi-Privacy Pet Fencing'
    ),
    asset(
      W[35],
      'Picket-style pet fencing that blends curb appeal with secure dog containment',
      'style',
      'Picket Style Pet Fencing'
    ),
    asset(
      W[36],
      'Low-maintenance vinyl-style pet fencing option for busy dog owners',
      'style',
      'Vinyl Pet Fencing'
    ),
    asset(
      W[37],
      'Composite-look pet fencing for durability where dogs play along the fence daily',
      'style',
      'Composite Pet Fencing'
    ),
    asset(
      W[38],
      'Fence line prepared for below-ground barrier systems to stop persistent diggers',
      'style',
      'Underground Barrier Systems'
    ),
  ],
  detailStrip: [
    asset(
      W[39],
      'Wide backyard view of continuous pet fencing securing the full yard perimeter',
      'application'
    ),
  ],
};

export const serviceImageSets: Record<ServiceSlugKey, ServiceImageSet> = {
  'wood-fences': wood,
  'vinyl-fences': vinyl,
  'aluminum-fences': aluminum,
  'pet-dog-fencing': pet,
};

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
