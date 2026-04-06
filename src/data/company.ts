export interface Company {
  name: string;
  phone: string;
  email: string;
  location: string;
  founded: number;
  yearsExperience: string;
  tagline: string;
  description: string;
  longDescription: string;
  social: {
    facebook: string;
    instagram: string;
  };
  certifications: string[];
  serviceRadius: string;
}

export const company: Company = {
  name: "JT Fence Inc.",
  phone: "(781) 420-5858",
  email: "contact@jtfenceboston.com",
  location: "Plymouth, MA",
  founded: 2008,
  yearsExperience: "15+",
  tagline: "Quality Fencing Solutions for South Shore Massachusetts",
  description:
    "JT Fence Inc. is the trusted choice for residential and commercial fencing throughout the South Shore of Massachusetts. With over 15 years of experience, we deliver exceptional craftsmanship and customer service on every project.",
  longDescription:
    "JT Fence Inc. has been serving the South Shore community since 2008, establishing ourselves as the premier fencing contractor in Plymouth, Cape Cod, and surrounding areas. Our team of skilled professionals combines decades of combined experience with a commitment to excellence and customer satisfaction. We specialize in wood, vinyl, and aluminum fencing solutions, as well as specialized pet and dog fencing systems. Whether you're looking to enhance your property's curb appeal, increase privacy and security, or create a safe space for your pets, JT Fence Inc. delivers superior results on time and within budget. Our meticulous attention to detail, high-quality materials, and proven installation techniques have earned us the trust of hundreds of satisfied homeowners and business owners throughout Massachusetts.",
  social: {
    facebook: "https://facebook.com/jtfenceboston",
    instagram: "https://instagram.com/jtfenceboston",
  },
  certifications: [
    "Licensed & Insured",
    "BBB Accredited",
    "Massachusetts Home Improvement Contractor",
  ],
  serviceRadius:
    "South Shore MA and Cape Cod including Plymouth, Marshfield, Hingham, Cohasset, Carver, Duxbury, Kingston, Scituate, Norwell, Hanover, Pembroke, Wareham, Sagamore, Buzzards Bay, Sandwich, Mashpee, Falmouth, Pocasset, Hyannis, Centerville, Osterville, Marstons Mills, Dennis, Dennis Port, Chatham, Orleans, Brewster, Harwich, Harwich Port, and New Seabury",
};
