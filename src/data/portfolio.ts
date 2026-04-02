export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  serviceType: string;
  location: string;
  imageAlt: string;
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Classic Privacy Fence Installation in Plymouth",
    description:
      "This elegant wood privacy fence installation provides complete seclusion for a waterfront property in Plymouth. Using premium pressure-treated lumber with clean lines and professional finishing, this fence enhances the property's curb appeal while creating a private outdoor retreat. The homeowner chose a solid panel design to maximize privacy while maintaining the natural wood aesthetic that complements the historic neighborhood.",
    serviceType: "wood-fences",
    location: "Plymouth, MA",
    imageAlt:
      "Classic wood privacy fence with clean lines installed along residential property in Plymouth",
    featured: true,
  },
  {
    id: "2",
    title: "Vinyl Pool Fencing in Duxbury Estate",
    description:
      "This expansive vinyl fence installation surrounds a residential pool area in an upscale Duxbury property. The homeowners selected white vinyl fencing for its clean contemporary appearance, durability, and low-maintenance characteristics. The installation includes specialized pool gates, proper spacing for safety compliance, and expert finishing that creates a resort-like appearance while providing secure containment.",
    serviceType: "vinyl-fences",
    location: "Duxbury, MA",
    imageAlt:
      "White vinyl pool fencing surrounding residential swimming pool in luxury Duxbury estate",
    featured: true,
  },
  {
    id: "3",
    title: "Aluminum Coastal Fence in Scituate",
    description:
      "This striking aluminum fence installation along a coastal Scituate property showcases modern design paired with superior salt-air corrosion resistance. The vertical picket aluminum design creates elegant visual lines while allowing ocean views. The professional installation ensures structural integrity against coastal winds while requiring minimal maintenance despite the challenging marine environment.",
    serviceType: "aluminum-fences",
    location: "Scituate, MA",
    imageAlt:
      "Modern aluminum vertical picket fence installed on coastal property in Scituate overlooking ocean",
    featured: true,
  },
  {
    id: "4",
    title: "Pet-Proof Fencing in Cape Cod",
    description:
      "This custom-engineered pet fencing installation in Cape Cod was specifically designed to contain two energetic golden retrievers. The fence features reinforced panels, below-ground barriers to prevent digging, and specially designed latches that prevent dogs from opening gates. The homeowners appreciate the semi-privacy design that allows them to monitor their pets while providing secure containment.",
    serviceType: "pet-dog-fencing",
    location: "Cape Cod, MA",
    imageAlt:
      "Semi-privacy pet fencing installation with reinforced panels designed for active dogs in Cape Cod backyard",
    featured: false,
  },
  {
    id: "5",
    title: "Picket Fence Restoration in Norwell",
    description:
      "This charming picket fence in Norwell was fully restored by JT Fence Inc. after years of weather exposure. We replaced damaged boards, reinforced weak posts, refreshed the finish, and restored the fence to its original beautiful condition. The picket design perfectly complements the home's colonial architecture while the restoration preserved the property's historic character.",
    serviceType: "wood-fences",
    location: "Norwell, MA",
    imageAlt:
      "Restored traditional picket fence with white finish on colonial-style home in Norwell",
    featured: false,
  },
  {
    id: "6",
    title: "Commercial Vinyl Fencing in Wareham",
    description:
      "This substantial vinyl fence installation along a commercial property in Wareham provides professional appearance with practical durability. The white vinyl fencing creates a clean, well-maintained appearance befitting a commercial establishment while requiring virtually no maintenance. The installation demonstrates our expertise in large-scale projects and commercial applications.",
    serviceType: "vinyl-fences",
    location: "Wareham, MA",
    imageAlt:
      "Commercial white vinyl fencing along business property in Wareham providing professional appearance",
    featured: false,
  },
  {
    id: "7",
    title: "Ornamental Aluminum Fence in Hanover",
    description:
      "This decorative aluminum fence installation in Hanover combines sophisticated design with practical functionality. The ornamental aluminum features scrollwork details and a contemporary design that frames the property entrance beautifully. The fence provides security while maintaining elegant sight lines, demonstrating how aluminum can be both beautiful and functional.",
    serviceType: "aluminum-fences",
    location: "Hanover, MA",
    imageAlt:
      "Ornamental aluminum fence with scrollwork details at residential property entrance in Hanover",
    featured: false,
  },
  {
    id: "8",
    title: "Mixed-Material Fence Design in Kingston",
    description:
      "This creative fence installation in Kingston combines wood panels with aluminum post accents, creating a unique aesthetic that blends traditional and contemporary elements. The design provides the warmth of wood with the durability benefits of aluminum reinforcement. This project showcases our ability to customize designs that meet specific aesthetic and functional requirements.",
    serviceType: "wood-fences",
    location: "Kingston, MA",
    imageAlt:
      "Custom wood and aluminum mixed-material fence design with contemporary styling in Kingston",
    featured: false,
  },
];
