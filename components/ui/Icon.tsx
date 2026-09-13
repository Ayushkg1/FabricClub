import { ReactNode, SVGProps } from "react";

export type IconName =
  | "hanger"
  | "washer"
  | "iron"
  | "shoe"
  | "carpet"
  | "curtain"
  | "sofa"
  | "sparkle"
  | "calendar"
  | "truck"
  | "sparkles"
  | "box"
  | "shield"
  | "users"
  | "droplet"
  | "clock"
  | "tag"
  | "heart"
  | "phone"
  | "headset"
  | "whatsapp"
  | "mail"
  | "map-pin"
  | "chevron-down"
  | "menu"
  | "close"
  | "instagram"
  | "facebook"
  | "google"
  | "star"
  | "check";

const paths: Record<IconName, ReactNode> = {
  hanger: <path d="M12 3a2 2 0 1 1 2 2c-.4.3-.7.7-.7 1.2V7l7.4 4.6c.8.5 1.3 1.4 1.3 2.4 0 .3-.2.5-.5.5H2.5c-.3 0-.5-.2-.5-.5 0-1 .5-1.9 1.3-2.4L10.7 7v-.8c0-.5-.3-.9-.7-1.2A2 2 0 0 1 12 3Z" />,
  washer: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <circle cx="12" cy="13" r="5" />
      <path d="M9 6.5h.01M12.5 6.5h.01" strokeLinecap="round" />
    </>
  ),
  iron: (
    <>
      <path d="M4 16.5c0-4 3-8.5 9-8.5 4 0 7 2.3 7 5.2 0 2.2-1.6 3.3-3.6 3.3H6.8c-1.5 0-2.8-.9-2.8-2Z" />
      <path d="M8 16.5V19M14 16.5V19" strokeLinecap="round" />
      <path d="M13 8V5.5" strokeLinecap="round" />
    </>
  ),
  shoe: (
    <path d="M3 17c0-1.7 1-2.6 2.3-3.3L11 10.7c.8-.5 1.3-1.3 1.3-2.3V7l2 2.2c1 .9 2.3 1.4 3.6 1.4h1.1c1.1 0 2 .9 2 2v2.4c0 1.1-.9 2-2 2H4a1 1 0 0 1-1-1Z" />
  ),
  carpet: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <rect x="6.5" y="8.5" width="11" height="7" rx="0.5" />
    </>
  ),
  curtain: (
    <>
      <path d="M4 3h16" strokeLinecap="round" />
      <path d="M6 3c0 6-2 8-2 15M18 3c0 6 2 8 2 15M12 3c1 6-1 9 0 15" />
    </>
  ),
  sofa: (
    <path d="M5 12V8.5A1.5 1.5 0 0 1 6.5 7h11A1.5 1.5 0 0 1 19 8.5V12M4 12h16v4.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12ZM4 12a1.5 1.5 0 0 0-1.5 1.5V16M20 12a1.5 1.5 0 0 1 1.5 1.5V16" />
  ),
  sparkle: (
    <path d="M12 3 13.6 9.4 20 11 13.6 12.6 12 19 10.4 12.6 4 11 10.4 9.4 12 3Z" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6h11v10h-11z" />
      <path d="M13.5 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  sparkles: (
    <>
      <path d="M6 3v5M3.5 5.5h5" strokeLinecap="round" />
      <path d="M14 4 15.8 9.2 21 11 15.8 12.8 14 18 12.2 12.8 7 11 12.2 9.2 14 4Z" />
    </>
  ),
  box: (
    <>
      <path d="M3.5 8 12 4l8.5 4M3.5 8v9L12 21l8.5-4V8M3.5 8 12 12M12 12l8.5-4M12 12v9" />
    </>
  ),
  shield: <path d="M12 3 20 6.5v5c0 5-3.4 8.4-8 9.5-4.6-1.1-8-4.5-8-9.5v-5L12 3Z" />,
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M2.8 19c.6-3.4 3-5.2 6.2-5.2s5.6 1.8 6.2 5.2" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.6 13.9c2.6.3 4.3 1.9 4.8 4.6" />
    </>
  ),
  droplet: <path d="M12 3s6.5 7.2 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 10.2 12 3 12 3Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" />
    </>
  ),
  tag: (
    <>
      <path d="M12.5 3H4v8.5L14.5 22 21 15.5 10.5 5Z" />
      <circle cx="8.5" cy="7.5" r="1.3" />
    </>
  ),
  heart: <path d="M12 20.5S3.5 15.4 3.5 9.4A5 5 0 0 1 12 6a5 5 0 0 1 8.5 3.4c0 6-8.5 11.1-8.5 11.1Z" />,
  phone: (
    <path d="M6.6 3.5 9 8.1c.2.4.1.9-.2 1.2L7 11c1 2.7 3.3 5 6 6l1.7-1.8c.3-.3.8-.4 1.2-.2l4.6 2.4c.6.3.9 1 .7 1.6-.7 2-2.5 3.4-4.6 3.4C8.9 22.4 1.6 15.1 1.6 6.4c0-2.1 1.4-3.9 3.4-4.6.6-.2 1.3.1 1.6.7Z" />
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="5" height="6.5" rx="1.8" />
      <rect x="16.5" y="13" width="5" height="6.5" rx="1.8" />
      <path d="M19.5 19.5v.5a3 3 0 0 1-3 3h-3.2" strokeLinecap="round" />
    </>
  ),
  whatsapp: (
    <path d="M12 2.5A9.5 9.5 0 0 0 3.6 17L2.5 21.5l4.6-1.2A9.5 9.5 0 1 0 12 2.5Zm0 2A7.5 7.5 0 1 1 7 20.7l-.4-.2-3 .8.8-2.9-.2-.4A7.5 7.5 0 0 1 12 4.5Zm-3.3 3.6c-.2 0-.5 0-.7.4-.3.3-1 .9-1 2.2s1 2.6 1.2 2.8c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.8.6-.1 1.7-.7 2-1.4.3-.6.3-1.2.2-1.4-.1-.1-.3-.2-.6-.4l-2.1-1c-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-.3-.1-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.5-.4-.5-.6-.5h-.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" strokeLinecap="round" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21.5S5 14.9 5 9.9A7 7 0 0 1 19 9.9c0 5-7 11.6-7 11.6Z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />,
  menu: <path d="M4 6.5h16M4 12h16M4 17.5h16" strokeLinecap="round" />,
  close: <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" strokeLinecap="round" />
    </>
  ),
  facebook: <path d="M14 22v-8h2.7l.4-3.3H14V8.6c0-1 .3-1.6 1.7-1.6H17V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.5H8v3.3h2.6V22Z" />,
  google: (
    <path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4c-.2 1.2-1 2.3-2 3v2.5h3.3c1.9-1.8 3-4.4 3-7.4Z M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6A10 10 0 0 0 12 22Z M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3a10 10 0 0 0 0 9.2Z M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 2.9 14.7 2 12 2A10 10 0 0 0 3 7.4L6.4 10c.8-2.3 3-4 5.6-4Z" />
  ),
  star: <path d="M12 3.5 14.5 9l6 .8-4.4 4 1.2 5.9-5.3-3-5.3 3 1.2-5.9-4.4-4 6-.8Z" />,
  check: <path d="M4.5 12.5 9 17l10.5-11" strokeLinecap="round" strokeLinejoin="round" />,
};

export default function Icon({
  name,
  className = "h-5 w-5",
  filled = false,
  ...rest
}: { name: IconName; filled?: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.6}
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
