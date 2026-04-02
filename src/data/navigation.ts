export interface NavLink {
  name: string;
  href: string;
  children?: NavLink[];
}

export interface Navigation {
  main: NavLink[];
  footer: {
    company: NavLink[];
    services: NavLink[];
    areas: NavLink[];
    resources: NavLink[];
  };
}

export const navigation: Navigation = {
  main: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
      children: [
        {
          name: "Wood Fences",
          href: "/services/wood-fences",
        },
        {
          name: "Vinyl Fences",
          href: "/services/vinyl-fences",
        },
        {
          name: "Aluminum Fences",
          href: "/services/aluminum-fences",
        },
        {
          name: "Pet & Dog Fencing",
          href: "/services/pet-dog-fencing",
        },
      ],
    },
    {
      name: "Service Areas",
      href: "/service-areas",
      children: [
        {
          name: "Plymouth, MA",
          href: "/service-areas/plymouth-ma",
        },
        {
          name: "Cape Cod, MA",
          href: "/service-areas/cape-cod-ma",
        },
        {
          name: "Wareham, MA",
          href: "/service-areas/wareham-ma",
        },
        {
          name: "Duxbury, MA",
          href: "/service-areas/duxbury-ma",
        },
        {
          name: "Kingston, MA",
          href: "/service-areas/kingston-ma",
        },
        {
          name: "Scituate, MA",
          href: "/service-areas/scituate-ma",
        },
        {
          name: "Norwell, MA",
          href: "/service-areas/norwell-ma",
        },
        {
          name: "Hanover, MA",
          href: "/service-areas/hanover-ma",
        },
        {
          name: "Pembroke, MA",
          href: "/service-areas/pembroke-ma",
        },
      ],
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Reviews",
      href: "/reviews",
    },
    {
      name: "Process",
      href: "/process",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
  footer: {
    company: [
      {
        name: "About JT Fence Inc.",
        href: "/about",
      },
      {
        name: "Our Team",
        href: "/about",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
      {
        name: "Privacy Policy",
        href: "/privacy",
      },
      {
        name: "Terms of Service",
        href: "/terms",
      },
    ],
    services: [
      {
        name: "Wood Fences",
        href: "/services/wood-fences",
      },
      {
        name: "Vinyl Fences",
        href: "/services/vinyl-fences",
      },
      {
        name: "Aluminum Fences",
        href: "/services/aluminum-fences",
      },
      {
        name: "Pet & Dog Fencing",
        href: "/services/pet-dog-fencing",
      },
      {
        name: "Fence Repair",
        href: "/services#repair",
      },
    ],
    areas: [
      {
        name: "Plymouth",
        href: "/service-areas/plymouth-ma",
      },
      {
        name: "Cape Cod",
        href: "/service-areas/cape-cod-ma",
      },
      {
        name: "Wareham",
        href: "/service-areas/wareham-ma",
      },
      {
        name: "Duxbury",
        href: "/service-areas/duxbury-ma",
      },
      {
        name: "View All Service Areas",
        href: "/service-areas",
      },
    ],
    resources: [
      {
        name: "Our Process",
        href: "/process",
      },
      {
        name: "Customer Reviews",
        href: "/reviews",
      },
      {
        name: "Portfolio",
        href: "/portfolio",
      },
      {
        name: "FAQ",
        href: "/faq",
      },
      {
        name: "Blog",
        href: "/blog",
      },
    ],
  },
};
