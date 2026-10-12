import { defineEval, includes } from "@cursor/bdk/evals";

export default defineEval({
  tags: ["smoke"],
  cases: [
    {
      id: "what-is",
      description: "Fixed question calls hello_fact and echoes the fact.",
      async test(t) {
        await t.send("What is hello-bdk?");
        t.succeeded();
        t.calledTool("hello_fact");
        t.check(t.reply, includes(/Hello BDK|educational|scaffold/i));
      },
    },
  ],
});
