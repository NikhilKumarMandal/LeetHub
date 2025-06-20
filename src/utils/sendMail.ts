import transporter from "./emailConfig";
import Mailgen from "mailgen";

interface EmailVerificationProps {
  email: string;
  subject: string;
  mailgenContent: Mailgen.Content;
}

const sendMail = async ({
  email,
  subject,
  mailgenContent,
}: EmailVerificationProps): Promise<void> => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "LeetHub",
      link: "https://www.leethub.tech",
    },
  });

  const emailBody = mailGenerator.generate(mailgenContent);
  const emailText = mailGenerator.generatePlaintext(mailgenContent);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: emailText,
    html: emailBody,
  });
};

export { sendMail };
