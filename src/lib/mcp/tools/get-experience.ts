import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_experience",
  title: "Get work experience",
  description: "Return Er. Suman Khadka's professional experience with employers, roles, periods, and responsibilities.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const experience = [
      {
        org: "Government of Nepal — DWSSM",
        role: "Civil Engineer · Integrated Water Supply & Sewerage Management Project, Itahari",
        period: "2019 – Present",
        bullets: [
          "Ministry of Infrastructure Development, Department of Water Supply and Sewerage Management",
          "Planning, design and supervision of water supply and sewerage infrastructure",
          "Project management and contract administration for public infrastructure",
          "Site supervision, quality assurance and progress monitoring",
          "Coordination with stakeholders, contractors and local authorities",
        ],
      },
      {
        org: "Design Core Pvt. Ltd.",
        role: "Civil Engineer",
        period: "2019",
        bullets: [
          "Structural design and analysis of residential buildings",
          "Quantity surveying and estimation",
          "Road project valuation",
          "Hydraulic component design",
          "Building and road drafting",
        ],
      },
      {
        org: "Himalayan Prefab Pvt. Ltd.",
        role: "Civil Engineer",
        period: "2018 – 2019",
        bullets: [
          "Steel and prefab structure design",
          "Cost estimation and valuation",
          "Site supervision",
          "BOQ preparation",
          "Project coordination",
        ],
      },
      {
        org: "IOE Pulchowk Campus",
        role: "Research Fellow",
        period: "2018",
        bullets: [
          "Transportation engineering research",
          "Research publication",
          "Data analysis and reporting",
        ],
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
      structuredContent: { experience },
    };
  },
});
