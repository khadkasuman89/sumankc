import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description: "Return Er. Suman Khadka's engineering software, technical, and computer skills with self-rated proficiency (0-100).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const skills = {
      engineeringSoftware: [
        { name: "AutoCAD", proficiency: 95 },
        { name: "Civil 3D", proficiency: 88 },
        { name: "ETABS", proficiency: 90 },
        { name: "SAP2000", proficiency: 85 },
        { name: "HEC-RAS", proficiency: 80 },
        { name: "SketchUp", proficiency: 78 },
        { name: "Smart Road", proficiency: 82 },
      ],
      technical: [
        { name: "Structural Analysis", proficiency: 92 },
        { name: "Quantity Surveying", proficiency: 90 },
        { name: "Cost Estimation", proficiency: 88 },
        { name: "Transportation Engineering", proficiency: 87 },
        { name: "Construction Management", proficiency: 85 },
        { name: "Hydrology", proficiency: 78 },
        { name: "Surveying", proficiency: 90 },
      ],
      webAndComputer: [
        { name: "Website Design", proficiency: 80 },
        { name: "Web Hosting", proficiency: 75 },
        { name: "HTML / CSS", proficiency: 78 },
        { name: "MS Office", proficiency: 95 },
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
      structuredContent: skills,
    };
  },
});
