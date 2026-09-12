import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { whatsappHref } from "@/lib/contact";

export default function WhatsAppCTA({
  message = "Have a question? Chat with us on WhatsApp.",
}: {
  message?: string;
}) {
  return (
    <section className="py-10">
      <Container>
        <Reveal className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/8 px-6 sm:px-8 py-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <Icon name="whatsapp" filled className="h-5 w-5" />
            </span>
            <p className="font-medium text-ink">{message}</p>
          </div>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#1fbd5a] shrink-0"
          >
            <Icon name="whatsapp" filled className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
