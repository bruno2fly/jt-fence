export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceType: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Plymouth, MA",
    rating: 5,
    text: "JT Fence installed a beautiful wood privacy fence in my backyard last spring. The entire team was professional and courteous, completing the project exactly on schedule. Three years later, it still looks fantastic with just minimal seasonal maintenance. I highly recommend them to anyone in the Plymouth area.",
    serviceType: "wood-fences",
    date: "2023-08-15",
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Cape Cod, MA",
    rating: 5,
    text: "After dealing with a rotting wood fence near the ocean, I switched to vinyl with JT Fence. The salt air no longer bothers me at all, and I love that I barely have to maintain it. Their team understood the coastal challenges and recommended exactly what I needed. Fantastic company!",
    serviceType: "vinyl-fences",
    date: "2023-10-22",
  },
  {
    id: "3",
    name: "Jennifer Rodriguez",
    location: "Duxbury, MA",
    rating: 5,
    text: "We needed a custom aluminum fence for our contemporary home, and JT Fence delivered a stunning installation. They worked with our architect to ensure perfect specifications, and the final result exceeded our expectations. Their attention to detail is unmatched.",
    serviceType: "aluminum-fences",
    date: "2023-09-08",
  },
  {
    id: "4",
    name: "David Thompson",
    location: "Scituate, MA",
    rating: 5,
    text: "JT Fence installed a pet containment system for our two golden retrievers. They built it to handle serious jumpers, and it's working perfectly. The team was friendly and knowledgeable about dog behavior and escape prevention. Our dogs are happy, and we have peace of mind.",
    serviceType: "pet-dog-fencing",
    date: "2024-01-30",
  },
  {
    id: "5",
    name: "Patricia O'Brien",
    location: "Hanover, MA",
    rating: 5,
    text: "I've used JT Fence twice now—once for a front picket fence and once for a backyard privacy fence. Both installations were excellent quality, and the team made the whole process easy. Their estimates were accurate, and they always cleaned up thoroughly. Excellent customer service!",
    serviceType: "wood-fences",
    date: "2023-11-12",
  },
  {
    id: "6",
    name: "Robert Martindale",
    location: "Norwell, MA",
    rating: 5,
    text: "The vinyl fence they installed around our pool area is perfect. It's incredibly durable, looks great, and requires almost no maintenance. We've had it for two years now, and it still looks brand new. Worth every penny for the peace of mind and appearance.",
    serviceType: "vinyl-fences",
    date: "2023-07-19",
  },
  {
    id: "7",
    name: "Elizabeth Gonzalez",
    location: "Kingston, MA",
    rating: 5,
    text: "JT Fence team was absolutely wonderful from start to finish. They explained all our options clearly, helped us choose the best solution for our property, and executed a perfect installation. The fence looks beautiful, enhances our home's curb appeal, and has held up beautifully to weather.",
    serviceType: "wood-fences",
    date: "2023-06-04",
  },
  {
    id: "8",
    name: "James Richardson",
    location: "Wareham, MA",
    rating: 5,
    text: "Our older wood fence was falling apart, so we called JT Fence to remove it and install new aluminum fencing. They handled the entire job professionally, even dealing with the old fence disposal efficiently. The new aluminum fence looks sleek and modern, and it's nice not to worry about maintenance.",
    serviceType: "aluminum-fences",
    date: "2024-02-14",
  },
];
