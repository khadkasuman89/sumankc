import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return Er. Suman Khadka's public profile: name, role, employer, location, spouse, and contact details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Er. Suman Khadka",
      title: "Civil Engineer",
      employer: "Government of Nepal — Department of Water Supply and Sewerage Management (DWSSM)",
      currentPosting: "Integrated Water Supply and Sewerage Management Project, Itahari",
      location: "Itahari, Sunsari, Nepal",
      spouse: "Mrs. Baneeka Thapa Khadka",
      email: "khadkasuman89@gmail.com",
      phone: "+977 9818486399",
      website: "https://sumankc.lovable.app",
      socials: {
        facebook: "https://www.facebook.com/er.sumankhadka",
        instagram: "https://www.instagram.com/Er.sumankhadka",
        tiktok: "https://www.tiktok.com/@er.sumankhadka",
      },
      summary:
        "Civil Engineer serving the Government of Nepal since 2019, focused on water supply, sewerage, and construction management. Bachelor's from Pulchowk Campus (IOE); Master's in Construction Management from Mid-West University, Surkhet (2024–2026).",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
