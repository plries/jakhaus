import { Metadata } from "next";
import { Listing } from "./components";
import { JakhausLogo } from "@/public/icons";
import { createClient } from "@/utils/supabase/server";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = await createClient();

  const { id } = await Promise.resolve(params);

  const { data: LISTING, error } = await supabase
    .from("listings")
    .select("*")
    .eq("id", id)
    .single();

  if (!LISTING || error) {
    return {
      title: "Listing not found | Jakhaus Creative Media",
      description: "No Listing was found for this ID",
    };
  }

  const FULL_ADDRESS = `${LISTING.UNIT} ${LISTING.STREET} ${LISTING.CITY}, ${LISTING.PROVINCE}, ${LISTING.POSTAL_CODE}`;

  return {
    metadataBase: new URL("https://jakhaus.ca"),
    alternates: {
      canonical: "/listings/" + id,
    },
    title: FULL_ADDRESS + " | Jakhaus Creative Media",
    publisher: "Jakhaus Creative Media",
    description:
      "View the listing for " + FULL_ADDRESS + " by Jakhaus Creative Media.",
    keywords: [
      "jakhaus creative media",
      "jakhaus",
      "creative media",
      FULL_ADDRESS,
      `${LISTING.UNIT} ${LISTING.STREET} ${LISTING.CITY}`,
      `${LISTING.CITY} ${LISTING.PROVINCE} ${LISTING.POSTAL}`,
      `homes in ${LISTING.CITY}, ${LISTING.PROVINCE}`,
      `real estate ${LISTING.CITY}, ${LISTING.PROVINCE}`,
      `rental homes ${LISTING.CITY}, ${LISTING.PROVINCE}`,
    ],
    openGraph: {
      title: FULL_ADDRESS + " | Jakhaus Creative Media",
      description:
        "View the listing for " + FULL_ADDRESS + " by Jakhaus Creative Media.",
      images: [
        {
          url: LISTING.FEATURED_PHOTO,
          width: 1920,
          height: 1080,
          alt: FULL_ADDRESS,
        },
      ],
      siteName: "Jakhaus Creative Media",
      url: "/listings/" + id,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function ListingPage({ params }: Props) {
  const supabase = await createClient();

  const { id } = await Promise.resolve(params);

  const { data: LISTING, error } = await supabase
    .from("listings")
    .select(
      `
    *,
    ASSIGNED_AGENT:agents (*),
    PHOTO_GALLERY:photos (*),
    FLOOR_PLANS:floor_plans (*)
  `,
    )
    .eq("id", id)
    .single();

  if (!LISTING || error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-1 text-neutral-950">
        <JakhausLogo width={120} />
        <p className="text-neutral-950/50">Listing not found.</p>
      </div>
    );
  }

  const FULL_ADDRESS = `${LISTING.UNIT} ${LISTING.STREET} ${LISTING.CITY}, ${LISTING.PROVINCE}, ${LISTING.POSTAL_CODE}`;

  LISTING.PHOTO_GALLERY = LISTING.PHOTO_GALLERY?.sort((a: any, b: any) =>
    a.URL.localeCompare(b.URL),
  );

  return <Listing CONSTANTS={LISTING} FULL_ADDRESS={FULL_ADDRESS} />;
}
