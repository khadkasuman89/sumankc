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
      title: "Gazetted (Class III), Engineer (Civil)",
      employer: "Government of Nepal — Department of Water Supply and Sewerage Management (DWSSM)",
      currentPosting: "Government of Nepal",
      location: "Myanglung, Terhathum, Koshi Province, Nepal",
      spouse: "Mrs. Baneeka Thapa Khadka",
      email: "khadkasuman89@gmail.com",
      officialEmail: "suman.khadka1@nepal.gov.np",
      phone: "+977 9818486399",
      website: "https://sumankc.lovable.app",
      socials: {
        facebook: "https://www.facebook.com/er.sumankhadka",
        instagram: "https://www.instagram.com/Er.sumankhadka",
        tiktok: "https://www.tiktok.com/@er.sumankhadka",
      },
      summary:
        "Gazetted Civil Engineer with more than seven years of experience in public infrastructure, contract administration, procurement, and construction supervision. M.Sc. in Construction Management with distinction (CGPA 3.77).",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
