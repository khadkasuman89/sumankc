import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_education",
  title: "Get education",
  description: "Return Er. Suman Khadka's academic background: schools, programs, and results.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const education = [
      {
        school: "Mid-West University, Surkhet",
        program: "Master in Construction Management",
        score: "2024 – 2026",
      },
      {
        school: "Pulchowk Engineering Campus, IOE",
        program: "Bachelor in Civil Engineering",
        score: "79.65%",
      },
      { school: "Pinnacle Academy", program: "+2 Science", score: "84.10%" },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(education, null, 2) }],
      structuredContent: { education },
    };
  },
});
