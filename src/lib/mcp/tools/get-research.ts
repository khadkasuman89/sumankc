import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_research",
  title: "Get research publications",
  description: "Return Er. Suman Khadka's published research work with citation details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const publications = [
      {
        title:
          "Ranking of Public Bus Alternatives Using Hybrid Multi-Criteria Decision Making Approach Under Fuzzy Environment: A Case Study of Kathmandu",
        author: "Khadka, S.",
        year: 2018,
        venue: "Institute of Engineering, Pulchowk Campus, Tribhuvan University",
        field: "Transportation Engineering",
        abstract:
          "Proposes a hybrid Fuzzy AHP–TOPSIS framework to evaluate public bus alternatives in Kathmandu, balancing economic, environmental, comfort, and operational criteria to support transit decision making.",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(publications, null, 2) }],
      structuredContent: { publications },
    };
  },
});
