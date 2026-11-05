class Product {
  id: number;
  title: string;
  location: string;
  company: string;
  type: string;
  category: string;
  salary: string;
  postedAt: string;
  description: string;
  tags: string[];
  experience: string;

  constructor(
    id: number,
    title: string,
    location: string,
    company: string,
    type: string,
    category: string,
    salary: string,
    postedAt: string,
    description: string,
    tags: string[] = [],
    experience: string,
  ) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.company = company;
    this.type = type;
    this.category = category;
    this.salary = salary;
    this.postedAt = postedAt;
    this.description = description;
    this.tags = tags;
    this.experience = experience;
  }
}

const p1 = new Product(
  1,
  "Senior Product Designer",
  "Remote",
  "Nimbus Studio",
  "Full-time",
  "Designer",
  "$85k – $105k / year",
  "2 days ago",
  "Lead end-to-end design for our core product, from discovery workshops to polished, shippable interfaces. You'll partner closely with engineering and product to shape the roadmap.",
  ["Figma", "Design Systems", "UX Research"],
  "Senior",
);

export const products = [p1];
