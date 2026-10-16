import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

export interface SendMessageProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  date?: string;
}

export default function SendMessage({
  name,
  email,
  subject,
  message,
  date,
}: SendMessageProps) {
  const formattedDate =
    date ||
    new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const initials = name
    ? name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  return (
    <Html lang="en">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#0666ee",
                "primary-dark": "#0552bf",
                surface: "#ffffff",
                canvas: "#f4f6fb",
                foreground: "#0f172a",
                muted: "#64748b",
                border: "#e2e8f0",
                highlight: "#f8fafc",
              },
            },
          },
        }}
      >
      <Head />
      <Preview>New portfolio message from {name}: {subject}</Preview>
        <Body className="bg-canvas font-sans text-foreground my-0 mx-auto py-10 px-4">
          <Container className="bg-surface border border-solid border-border rounded-2xl max-w-[580px] mx-auto overflow-hidden shadow-sm">
            <div className="p-8">
              {/* Header Badge & Title */}
              <Section className="mb-6">
                <Heading className="text-2xl font-bold tracking-tight text-foreground m-0 capitalize mb-3">
                  {subject}
                </Heading>
                <Text className="text-xs text-muted m-0 mt-1">
                  Received on {formattedDate}
                </Text>
              </Section>

              {/* Sender Details Card */}
              <Section className="bg-highlight border border-solid border-border rounded-xl p-4 mb-6">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="w-12 align-middle">
                        <div className="mx-auto w-10 h-10 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center text-center leading-[40px]">
                          {initials}
                        </div>
                      </td>
                      <td className="align-middle pl-3">
                        <Text className="text-sm font-semibold text-foreground m-0 leading-tight capitalize">
                          {name}
                        </Text>
                        <Link
                          href={`mailto:${email}`}
                          className="text-xs text-primary underline m-0 mt-0.5 block"
                        >
                          {email}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Section>

              {/* Message Block */}
              <Section className="mb-8">
                <Text className="text-[11px] font-bold uppercase tracking-wider text-muted m-0 mb-2">
                  Message
                </Text>
                <div className="bg-surface border border-solid border-border rounded-xl p-5 shadow-2xs">
                  <Text className="text-foreground text-[14px] leading-relaxed whitespace-pre-wrap m-0 font-normal">
                    {message}
                  </Text>
                </div>
              </Section>

              {/* Primary Action Button */}
              <Section className="text-center mb-6">
                <Button
                  href={`mailto:${email}?subject=Re: ${encodeURIComponent(subject)}`}
                  className="bg-primary hover:bg-primary-dark text-white text-sm font-medium py-3 px-6 rounded-lg text-center inline-block shadow-sm capitalize"
                >
                  Reply to {name}
                </Button>
              </Section>

              <Hr className="border-border my-6" />

              {/* Footer */}
              <Section className="text-center">
                <Text className="text-xs text-muted m-0">
                  Notification sent automatically from your portfolio contact form.
                </Text>
              </Section>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

// Preview props for testing with `email dev`
SendMessage.PreviewProps = {
  name: "alex johnson",
  email: "alex@example.com",
  subject: "Inquiry regarding Fullstack Project",
  message:
    "Hi Richard,\n\nI came across your portfolio and was really impressed by your work. We are currently looking for a developer to help build a Next.js and Convex application. Would love to schedule a quick call to discuss further!\n\nBest,\nAlex",
  date: "Thu, Oct 15, 2026, 11:53 AM",
} as SendMessageProps;
