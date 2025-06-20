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
          const subject = "We’d love your feedback 💬";

          const mailgenContent = {
            body: {
              name: `${user.name ?? "User"} 💖`,
              intro:
                "We’ve heard from several users that they are facing issues while logging in. For this reason, we are collecting feedback.",
              action: {
                instructions: "Click below to let us know:",
                button: [
                  {
                    text: "Share your Feedback",
                    link: `https://docs.google.com/forms/d/e/1FAIpQLSeCkKvlT5zEwiN5ofwuO_NnFKtQBTyVK1_BmWKzzpOGuseGmA/viewform`,
                  },
                ],
              },
              outro: "Thanks for helping us improve!",
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
