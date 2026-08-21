export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceType: string;
  date: string;
}

// Real Google Business Profile reviews for JT Fence Boston
// Source: https://www.google.com/maps?cid=5353793838333946389 (4.9★, 40 reviews — verified live)
// Only 5-star reviews are included here by design; homepage additionally filters
// on rating === 5 as a safeguard so a future non-5-star review can never render.
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Justin Gilman",
    location: "Google Review",
    rating: 5,
    text: "We hired Tiago to take away our existing fence and replace it with a new cedar one. Excellent communication from initial contact thru to the end. Was very prompt and did a great job installing the new fence.",
    serviceType: "wood-fences",
    date: "2020-08-01",
  },
  {
    id: "2",
    name: "Tyler Campo",
    location: "Google Review",
    rating: 5,
    text: "Awesome work on a large project which included ~400ft of new fence, two manual doors, an automatic gate, and three different materials (wood, aluminum & vinyl). Overall, good communication, fair pricing, quality work. Highly recommend JT Fence and will absolutely work with them again in the future!",
    serviceType: "general-fencing",
    date: "2025-12-01",
  },
  {
    id: "3",
    name: "Bill K",
    location: "Google Review",
    rating: 5,
    text: "I don't like to write reviews. This time, I had to. Tiago & his men did a great job. They were on time. The job was on budget. It was finished early. They made sure the entire fence line was even. When you hire contractors, you always hope you pick the right one. This time, I hit a bull's-eye.",
    serviceType: "general-fencing",
    date: "2025-09-01",
  },
  {
    id: "4",
    name: "Glenn Dacey",
    location: "Google Review",
    rating: 5,
    text: "Very prompt and courteous during bid process. Came out couple times as my needs changed. Competitive price and accommodated our accelerated timeline by going above and beyond regarding inventory. Highly recommend this company.",
    serviceType: "general-fencing",
    date: "2025-08-01",
  },
  {
    id: "5",
    name: "Mike Masse",
    location: "Google Review",
    rating: 5,
    text: "JT Fence did an amazing job, prompt….professional….courteous!! Highly recommend..will definitely use again if needed in the future!!",
    serviceType: "general-fencing",
    date: "2025-11-01",
  },
  {
    id: "6",
    name: "Lynn Murphy",
    location: "Google Review",
    rating: 5,
    text: "Tiago and JT fence were excellent. Tiago was prompt and very communicative. I received a quote in under 24 hours and work started a week later. When he finished he sent pictures of everything. When I arrived, the fence was exactly what I wanted. Thank you for amazing workmanship for a reasonable price. I would highly recommend JT Fence!",
    serviceType: "general-fencing",
    date: "2025-11-01",
  },
  {
    id: "7",
    name: "tiago Monteiro",
    location: "Google Review",
    rating: 5,
    text: "I hired Tiago's company to build a fence at my home, and they did an excellent job! Since I live near the ocean, I needed something truly resilient because the area gets strong winds. Tiago and his team delivered exactly what I needed. The fence turned out sturdy, reliable, and perfect for my coastal conditions.",
    serviceType: "general-fencing",
    date: "2026-05-01",
  },
  {
    id: "8",
    name: "Edson Viana",
    location: "Google Review",
    rating: 5,
    text: "Super recommend! He was very fast, professional, and did an excellent job. Everything was done perfectly and with great attention to detail. Very friendly and reliable, I'm really happy with the service and would definitely use him again!",
    serviceType: "general-fencing",
    date: "2026-05-01",
  },
  {
    id: "9",
    name: "linda tucker",
    location: "Google Review",
    rating: 5,
    text: "JT fence went above and beyond my expectations with the install of my backyard fence. I will recommend this contractor to others looking for fencing. Tiago is very professional, courteous, and his cost to do the project was very fair.",
    serviceType: "general-fencing",
    date: "2026-04-01",
  },
  {
    id: "10",
    name: "Barbara Hansen",
    location: "Google Review",
    rating: 5,
    text: "My experience with John was absolutely terrific. I had contacted seven different fence companies and chose JT Fence for the job. John was super friendly and kept me informed every step of the way. My yard looks beautiful again. I would highly recommend JT Fence.",
    serviceType: "general-fencing",
    date: "2026-06-01",
  },
];
