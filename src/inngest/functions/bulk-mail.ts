import { db } from "../../libs/db";
import { inngest } from "../client";
import { sendMail } from "../../utils/sendMail";
import { NonRetriableError } from "inngest";
import { Content } from "mailgen";

export const sendBulkFeedbackMail = inngest.createFunction(
  {
    id: "send-feedback-emails",
    retries: 2,
  },
  {
    cron: "30 3 * * *",
  },

  async ({ step }) => {
    try {
      const users = await step.run("get-all-users", async () => {
        const users = await db.user.findMany({
          where: {
            email: {
              not: undefined,
            },
          },
          select: {
            id: true,
            name: true,
            email: true,
          },
        });

        if (!users) {
          throw new NonRetriableError("User no longer exists in our database");
        }
        return users;
      });

      for (const user of users) {
        await step.run("send-bulk-mail", async () => {
          const subject = "Celebrating Our First 100 Users 🎉";

          const mailgenContent = {
            body: {
              name: `${user.name ?? "User"} 💖`,
              intro: `Just wanted to take a moment to say a big thank you we recently hit 100 users on LeetHub, 
  and you’re one of them! We're so grateful to have you with us on this journey.

  If you’ve been enjoying LeetHub, it would mean a lot if you shared it with a friend who might find it helpful too. 
  Every little bit helps as we grow this together`,
              outro:
                "Thanks again for being part of this early journey. Your support means more than you know.",
            },
          } as unknown as Content;

          await sendMail({
            email: user.email,
            subject,
            mailgenContent,
          });
        });
      }
      return { success: true };
    } catch (error) {
      console.error("❌ Error running step", error);
      return { success: false };
    }
  }
);
