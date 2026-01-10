export interface Project {
  title: string;
  role: string;
  description: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "Login Module Testing",
    role: "QA Engineer (Practice)",
    description:
      "Performed manual testing on a login module by creating test scenarios, test cases, and identifying validation bugs.",
    tools: ["Excel", "Jira"]
  },
  {
    title: "Smart Potato Farming System",
    role: "QA & BA",
    description:
      "AI-based system to predict potato yield and profitability. Contributed to requirement analysis, API testing, and validation of outputs.",
    tools: ["Postman", "React", "Flask"]
  }
];
