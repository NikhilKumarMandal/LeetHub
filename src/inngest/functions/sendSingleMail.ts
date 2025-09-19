import { NonRetriableError } from "inngest";
import { db } from "../../libs/db";
import { inngest } from "../client";
import { Content } from "mailgen";
import { sendMail } from "../../utils/sendMail";

export const sendSingleMail = inngest.createFunction(
  {
    id: "send-single-feedback-email",
    retries: 2,
  },
  { cron: "0 16 * * *" },// remove cron if you want manual trigger
  async ({ step }) => {
    try {
      // Instead of all users, fetch one
      const user = await step.run("get-single-user", async () => {
        return await db.user.findUnique({
          where: { email: "muskansaw2004@gmail.com" }, // <-- target email
          select: { id: true, name: true, email: true },
        });
      });

      if (!user) throw new NonRetriableError("User not found");

      await step.run("send-single-mail", async () => {
        const subject = "Important Update: LeetHub Service Ending Soon";

        const mailgenContent: Content = {
          body: {
            name: `${user.name ?? "User"} `,
            intro: `We want to let you know that LeetHub will be shutting down at the **end of this month**.  
From that point forward, our services will no longer be available.`,
              outro: `We truly appreciate your support and for being part of our journey.  
If we start something new in the future, we’d love to share it with you! 💖`,
          },
        };

        await sendMail({
          email: user.email,
          subject,
          mailgenContent,
        });
      });

      return { success: true };
    } catch (error) {
      console.error("❌ Error running step", error);
      return { success: false };
    }
  }
);
