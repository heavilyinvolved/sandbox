import { defineTool } from "@cursor/bdk/tools";
import { z } from "zod";

/** Fixed educational answer so a smoke turn is easy to confirm. */
const HELLO_ANSWER =
  "Hello BDK! hello-bdk is a minimal educational agent scaffold. It answers one fixed question so you can confirm a turn works.";

export default defineTool({
  description:
    "Return the fixed hello-bdk fact. Use when the user asks what hello-bdk is, who you are, or to confirm the agent works.",
  effect: "read",
  inputSchema: z.object({}),
  async execute() {
    return { answer: HELLO_ANSWER };
  },
});
