import { NonRetriableError } from "inngest";
import { db } from "../../libs/db";
import { inngest } from "../client";
import { sendMail } from "../../utils/sendMail";

export const onUserSignup = inngest.createFunction(
  { id: "on-user-signup", retries: 2 },
  { event: "auth/oauth2" },
  async ({ event, step }) => {
    try {
      const { email } = event.data;
      const user = await step.run("get-user-email", async () => {
        const userObject = await db.user.findUnique({
          where: {
            email,
          },
        });
        if (!userObject) {
          throw new NonRetriableError("User no longer exists in our database");
        }
        return userObject;
      });

      await step.run("send-welcome-email", async () => {
        const subject = `Welcome to the app`;
        const mailgenContent = {
          body: {
            name: user?.name ?? "User",
            intro: "Thanks for signing up. We're glad to have you onboard!",
            outro:
              "If you have any questions, just reply to this email. We're here to help!",
          },
        };
        const data = {
          email: user.email,
          subject,
          mailgenContent,
        };
        await sendMail(data);
      });
      return { success: true };
    } catch (error: unknown) {
      console.error("❌ Error running step", error);
      return { success: false };
    }
  }
);
