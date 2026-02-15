// lib/data/stories.ts
export interface PatientStory {
  id: string;
  slug: string;
  name: string;
  age: number;
  location?: string;
  story: string;
  fullStory?: string; // for detail page
  imageUrl?: string;
  fundingGoal: number;
  currentFunding: number;
  diagnosisAge?: string;
  treatmentNeeds?: string;
}

export const patientStories: PatientStory[] = [
  {
    id: "1",
    slug: "xyz",
    name: "Xyz",
    age: 7,
    location: "Karachi",
    story:
      "Xyz dreams of becoming a doctor. Diagnosed with thalassemia major at 6 months, she needs bi-weekly blood transfusions and daily chelation therapy. Her father is a daily wage worker and struggles to afford the treatment.",
    fullStory:
      "Xyz was only six months old when her parents noticed she was pale, weak, and not growing like other babies. After several tests, she was diagnosed with thalassemia major. Since then, her life has revolved around regular blood transfusions at HSDF's care unit. Despite the challenges, Xyz is a bright and cheerful child who loves school and dreams of becoming a doctor to help other children like her. Her father works as a laborer, earning around Rs. 15,000 per month, which is barely enough to cover the family's basic needs, let alone the expensive medical costs. HSDF has been a lifeline for Xyz, providing transfusions and medicines at subsidized rates, but they need ongoing support to continue. Your donation can help Xyz stay healthy and chase her dreams.",
    fundingGoal: 540000,
    currentFunding: 120000,
    diagnosisAge: "6 months",
    treatmentNeeds: "Bi-weekly transfusions, daily chelation",
  },
  {
    id: "2",
    slug: "aisha",
    name: "Aisha",
    age: 5,
    location: "Karachi",
    story:
      "Aisha loves playing with dolls. She needs regular transfusions but her family cannot always afford them. Help Aisha smile again.",
    fullStory:
      "Aisha is a bubbly 5-year-old who loves pink dresses and playing with her dolls. She was diagnosed with thalassemia at age 2. Her mother stays home to care for her, while her father works as a rickshaw driver. The irregular income makes it hard to afford the monthly transfusions and medicines. Aisha often misses school because of weakness and hospital visits. With your support, we can ensure Aisha gets her transfusions on time, chelation medicines, and the chance to attend school regularly. She deserves a childhood filled with laughter, not hospital beds.",
    fundingGoal: 540000,
    currentFunding: 85000,
    diagnosisAge: "2 years",
    treatmentNeeds: "Monthly transfusions, oral chelation",
  },
  {
    id: "3",
    slug: "usman",
    name: "Usman",
    age: 10,
    location: "Karachi",
    story:
      "Usman is a talented cricket player. He never misses a match despite his condition. Your support keeps him in the game.",
    fullStory:
      "Usman is a spirited 10-year-old who loves cricket and dreams of playing for Pakistan. He was diagnosed with thalassemia at birth. His parents run a small roadside tea stall, earning barely enough to survive. Despite his condition, Usman is energetic and passionate about sports. He needs regular transfusions and chelation to stay healthy. HSDF has been supporting him for years, but the cost of treatment is rising. With your help, Usman can continue to play cricket and pursue his dreams. Every donation gives him a chance to hit another six.",
    fundingGoal: 540000,
    currentFunding: 210000,
    diagnosisAge: "At birth",
    treatmentNeeds: "Bi-weekly transfusions, IV chelation",
  },
];