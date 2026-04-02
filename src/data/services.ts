export interface Service {
  slug: string;
  name: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  bestUseCases: string[];
  styleOptions: string[];
  durabilityInfo: string;
  maintenanceInfo: string;
  icon: string;
  keywords: string[];
  priceRangeEstimate: string;
}

export const services: Service[] = [
  {
    slug: "wood-fences",
    name: "Wood Fences",
    title: "Premium Wood Fencing Installation Services",
    shortDescription:
      "Classic and versatile wood fencing that adds natural beauty and warmth to any property. Ideal for residential settings, privacy screening, and creating defined outdoor spaces.",
    fullDescription:
      "Wood fencing remains the most popular choice among homeowners throughout Massachusetts, and for good reason. Our wood fence installations combine traditional craftsmanship with premium materials to create stunning barriers that enhance your property's aesthetic appeal while providing lasting functionality. We source only the highest-quality pressure-treated lumber and cedar, ensuring durability and longevity. Each fence is custom-designed to complement your home's architectural style and your landscape, with expert construction that guarantees straight lines, proper spacing, and secure installations. Whether you're looking for a classic privacy fence, decorative picket design, or something in between, our team has the expertise to bring your vision to life.",
    benefits: [
      "Natural aesthetic that enhances property curb appeal and value",
      "Excellent privacy screening for residential and commercial properties",
      "Customizable designs to match any architectural style or landscaping preference",
      "Environmentally friendly option made from renewable resources",
      "Cost-effective compared to vinyl and aluminum alternatives",
      "Warm, inviting appearance that ages beautifully with character and patina",
    ],
    bestUseCases: [
      "Residential privacy fences for single-family homes",
      "Decorative picket fencing for front yards and landscaping features",
      "Windbreak and noise reduction barriers",
      "Pet containment and property boundaries",
      "Privacy screening between properties",
      "Complement to colonial, ranch, and traditional home styles",
    ],
    styleOptions: [
      "Privacy Fencing (Solid or Semi-Solid panels)",
      "Picket Fencing (Traditional or Modern styles)",
      "Split Rail Fencing (Rustic and decorative)",
      "Post and Board Fencing (Ranch or agricultural style)",
      "Lattice Top Fencing (Enhanced aesthetics with airflow)",
      "Mixed Materials (Wood with metal accents)",
    ],
    durabilityInfo:
      "Quality wood fencing with proper maintenance typically lasts 15-20 years. Pressure-treated lumber is specifically engineered to resist rot, decay, and insect damage. Cedar and composite options provide enhanced longevity. Regular sealing and staining every 2-3 years will extend fence life and maintain appearance.",
    maintenanceInfo:
      "Wood fences require regular maintenance to preserve their beauty and longevity. We recommend annual inspections for damage or decay, sealing or staining every 2-3 years to protect against weathering and UV damage, and prompt repair of any rotted or damaged boards. Proper drainage around the fence line helps prevent moisture-related issues.",
    icon: "wood-fence",
    keywords: [
      "wood fence",
      "wooden fencing",
      "privacy fence",
      "picket fence",
      "cedar fence",
      "pressure treated fence",
      "residential wood fence",
      "custom wood fence",
      "wood fence installation",
      "wood fence repair",
    ],
    priceRangeEstimate: "$15-30 per linear foot",
  },
  {
    slug: "vinyl-fences",
    name: "Vinyl Fences",
    title: "Durable Vinyl Fencing for Low-Maintenance Beauty",
    shortDescription:
      "Modern vinyl fencing offers beautiful aesthetics with minimal maintenance requirements. Perfect for homeowners seeking long-lasting durability without ongoing upkeep.",
    fullDescription:
      "Vinyl fencing has revolutionized the fencing industry, providing homeowners with a virtually maintenance-free alternative that doesn't compromise on appearance. Our vinyl fence installations use premium-grade PVC materials that resist fading, cracking, and warping even in New England's challenging climate. Unlike wood, vinyl fences never require painting, sealing, or staining—simply rinse with a hose annually and they'll look as good as the day they were installed. Available in a variety of colors and styles to mimic traditional wood aesthetics or provide contemporary designs, vinyl fencing is the perfect choice for busy homeowners who want a beautiful fence without the ongoing maintenance commitment.",
    benefits: [
      "Virtually maintenance-free—no painting, staining, or sealing required",
      "Exceptional durability with 20-30 year lifespan under normal conditions",
      "Resistant to rot, decay, insects, and harsh New England weather",
      "Won't crack, warp, or split like wood fences over time",
      "Retains color and appearance for decades with minimal care",
      "Superior structural integrity resists high winds and impacts",
      "Eco-friendly option made from recyclable materials",
    ],
    bestUseCases: [
      "Residential privacy fences for low-maintenance homeowners",
      "Pool enclosures and safety fencing for water features",
      "Commercial properties requiring durable long-term solutions",
      "Properties with coastal or salt-air exposure",
      "Homes seeking modern aesthetic with traditional styling options",
      "Ideal for homeowners with busy schedules who want fence worry-free",
    ],
    styleOptions: [
      "Privacy Vinyl Fencing (Solid panels for complete privacy)",
      "Semi-Privacy Vinyl Fencing (Slightly modified designs)",
      "Picket Style Vinyl (Classic appearance without maintenance)",
      "Lattice Top Vinyl (Decorative with modern appeal)",
      "Post and Rail Vinyl (Ranch or agricultural aesthetic)",
      "Decorative Vinyl (Contemporary and custom designs)",
    ],
    durabilityInfo:
      "Premium vinyl fencing is engineered to last 20-30 years or longer with minimal maintenance. High-quality PVC materials resist UV fading, extreme temperatures, moisture, and physical impacts. Vinyl fences maintain structural integrity throughout their lifespan and won't deteriorate like wood or corrode like metal.",
    maintenanceInfo:
      "One of the greatest advantages of vinyl fencing is its minimal maintenance requirements. Occasionally rinse your fence with a hose to remove dirt and dust. For stubborn stains, use mild soap and water with a soft brush. No painting, staining, sealing, or chemical treatments needed. Annual visual inspections for damage are recommended.",
    icon: "vinyl-fence",
    keywords: [
      "vinyl fence",
      "vinyl fencing",
      "maintenance free fence",
      "PVC fence",
      "vinyl privacy fence",
      "vinyl picket fence",
      "white vinyl fence",
      "vinyl fence installation",
      "durable fence",
      "low maintenance fence",
    ],
    priceRangeEstimate: "$25-40 per linear foot",
  },
  {
    slug: "aluminum-fences",
    name: "Aluminum Fences",
    title: "Modern Aluminum Fencing Solutions",
    shortDescription:
      "Sleek and sophisticated aluminum fencing combines contemporary design with exceptional durability. Ideal for properties requiring both style and security.",
    fullDescription:
      "Aluminum fencing represents the perfect marriage of modern aesthetics and practical durability. Our aluminum fence installations feature lightweight yet incredibly strong materials that resist rust, corrosion, and weathering. Perfect for contemporary homes, commercial properties, and high-security applications, aluminum fencing provides a clean, refined appearance that enhances any property's curb appeal. With its sleek vertical lines and minimalist design, aluminum fencing is the choice for homeowners and business owners who value modern architecture and low-maintenance solutions. Unlike steel fencing, aluminum won't rust even in coastal environments, making it an ideal choice throughout Massachusetts.",
    benefits: [
      "Lightweight yet extremely strong and durable construction",
      "Naturally rust-resistant, ideal for coastal Massachusetts properties",
      "Sleek modern aesthetic that complements contemporary architecture",
      "Low maintenance with no painting, staining, or sealing required",
      "Excellent view preservation with transparent design options",
      "Weather-resistant in all New England climate conditions",
      "Environmentally friendly and fully recyclable material",
    ],
    bestUseCases: [
      "Contemporary and modern residential homes",
      "Commercial properties and office parks",
      "Coastal properties requiring rust-resistant solutions",
      "Properties where view preservation is important",
      "High-security applications with elegant design",
      "Properties with minimalist or modern landscaping",
      "Waterfront and salt-air environments",
    ],
    styleOptions: [
      "Modern Vertical Picket (Contemporary straight design)",
      "Horizontal Rail (Modern minimalist appearance)",
      "Ornamental Aluminum (Decorative with scrollwork)",
      "Semi-Privacy Aluminum (Subtle privacy with views)",
      "Modern Flat Top (Clean contemporary lines)",
      "Custom Design Aluminum (Bespoke architectural solutions)",
    ],
    durabilityInfo:
      "Aluminum fencing is engineered to last 20-30+ years even in harsh coastal environments. The material naturally resists rust and corrosion, unlike steel. High-quality powder-coated finishes protect against UV fade and weathering. Proper installation ensures structural integrity in high-wind situations.",
    maintenanceInfo:
      "Aluminum fencing requires minimal maintenance to maintain its pristine appearance. Periodically rinse with water to remove dust and salt spray residue. No painting, staining, or sealing required. Visual inspections for damage and occasional touch-ups of the powder-coat finish are recommended for optimal appearance.",
    icon: "aluminum-fence",
    keywords: [
      "aluminum fence",
      "aluminum fencing",
      "modern fence",
      "contemporary fence",
      "rust resistant fence",
      "metal fence",
      "ornamental aluminum fence",
      "aluminum fence installation",
      "coastal fence",
      "commercial fencing",
    ],
    priceRangeEstimate: "$20-35 per linear foot",
  },
  {
    slug: "pet-dog-fencing",
    name: "Pet & Dog Fencing",
    title: "Specialized Pet-Proof Fencing for Dog Owners",
    shortDescription:
      "Custom-designed pet fencing systems that safely contain your dogs while maintaining your property's aesthetics. Built to withstand jumping, digging, and active play.",
    fullDescription:
      "Your pets deserve a safe space to play, run, and enjoy the outdoors. JT Fence Inc. specializes in custom-designed pet and dog fencing systems that combine safety, durability, and aesthetics. We understand the unique challenges pet owners face and engineer solutions specifically to prevent escapes, contain jumping, and resist digging. Our pet fencing options include reinforced panels, below-ground barrier systems, and specialized gate hardware designed to prevent gate escapes. Whether you have small dogs, large breeds, or a combination of pets, we customize each installation to meet your specific needs and your dogs' jumping ability, digging habits, and behavioral patterns.",
    benefits: [
      "Specialized design to prevent jumping, climbing, and digging escapes",
      "Below-ground barriers available to stop persistent diggers",
      "Reinforced panels and hardware built for active pets",
      "Secure gate latches and catches that pets can't open",
      "Visibility options that allow you to see pets while containing them",
      "Customized height and design for different dog breeds and sizes",
      "Creates safe play area encouraging exercise and outdoor activity",
      "Complete peace of mind knowing your pets are secure",
    ],
    bestUseCases: [
      "Residential backyards for dog owners of all breeds",
      "Small yards requiring maximum containment efficiency",
      "Properties with escape-artist dogs or jumpers",
      "Multi-pet households with different size animals",
      "Homes where pets spend extended time outdoors",
      "Backyards used for dog training and exercise",
      "Properties where aesthetic appeal remains important",
    ],
    styleOptions: [
      "Full Privacy Dog Fencing (Maximum containment and privacy)",
      "Semi-Privacy Pet Fencing (Monitoring sightlines preserved)",
      "Picket Style Pet Fencing (Aesthetic appeal with safety features)",
      "Vinyl Pet Fencing (Low-maintenance pet containment)",
      "Composite Pet Fencing (Durable aesthetic option)",
      "Underground Barrier Systems (For persistent diggers)",
    ],
    durabilityInfo:
      "Pet fencing systems are engineered with reinforced materials to withstand constant contact, jumping, and digging from active dogs. Quality pet fencing typically lasts 15-25 years depending on material choice. Reinforced posts, brackets, and hardware are rated for high-impact use. Regular inspection ensures latches and gates remain secure.",
    maintenanceInfo:
      "Pet fencing requires regular inspection to ensure ongoing security and safety. Monthly checks of latches, hinges, and gates prevent escape opportunities. Inspect for damage from digging or jumping and repair promptly. Maintain vegetation around the fence line to prevent escape routes. Remove any items pets could use to reach the top or climb.",
    icon: "pet-fence",
    keywords: [
      "dog fence",
      "pet fence",
      "dog fencing",
      "pet fencing",
      "dog containment",
      "pet containment fence",
      "jump-proof fence",
      "dog escape prevention",
      "secure dog fence",
      "residential dog fence",
      "small dog fence",
      "large dog fence",
    ],
    priceRangeEstimate: "$18-35 per linear foot",
  },
];
