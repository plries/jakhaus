import { Metadata } from "next";
import { Listing } from "./components";
import { LISTINGS_MOCK } from "./const";
import { JakhausLogo } from "@/public/icons";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loadedListing = await params;
  const listing = LISTINGS_MOCK.find(
    (listing) => listing.ID === loadedListing.id,
  );

  if (!listing) {
    return {
      title: "Listing not found | Jakhaus Creative Media",
      description: "No listing was found for this ID",
    };
  }

  const FULL_ADDRESS = ` ${listing.ADDRESS.UNIT} ${listing.ADDRESS.STREET} ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE} ${listing.ADDRESS.POSTAL_CODE}`;

  return {
    metadataBase: new URL("https://jakhaus.ca"),
    alternates: {
      canonical: "/listings/" + listing.ID,
    },
    title: FULL_ADDRESS + " | Jakhaus Creative Media",
    publisher: "Jakhaus Creative Media",
    description:
      "View the listing for " + FULL_ADDRESS + " by Jakhaus Creative Media.",
    keywords: [
      "jakhaus creative media",
      "jakhaus",
      "creative media",
      "jakhaus creative",
      FULL_ADDRESS,
      `${listing.ADDRESS.UNIT} ${listing.ADDRESS.STREET} ${listing.ADDRESS.CITY}`,
      `${listing.ADDRESS.CITY} ${listing.ADDRESS.PROVINCE} ${listing.ADDRESS.POSTAL_CODE}`,
      `homes in ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE}`,
      `real estate ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE}`,
      `real estate in ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE}`,
      `rental homes ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE}`,
      `rental homes in ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE}`,
    ],
    openGraph: {
      title: FULL_ADDRESS + " | Jakhaus Creative Media",
      description:
        "View the listing for " + FULL_ADDRESS + " by Jakhaus Creative Media.",
      images: [
        {
          url: listing.FEATURED_PHOTO,
          width: 1920,
          height: 1080,
          alt: FULL_ADDRESS,
        },
      ],
      siteName: "Jakhaus Creative Media",
      url: "/listings/" + listing.ID,
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
  const id = await params;
  const listing = LISTINGS_MOCK.find((listing) => listing.ID === id.id);

  if (!listing)
    return (
      <div className="flex flex-col items-center justify-center gap-1 text-neutral-950">
        <JakhausLogo width={120} />
        <p className="text-neutral-950/50">Listing not found.</p>
      </div>
    );

  const FULL_ADDRESS = `${listing.ADDRESS.UNIT} ${listing.ADDRESS.STREET} ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE} ${listing.ADDRESS.POSTAL_CODE}`;

  return <Listing CONSTANTS={listing} FULL_ADDRESS={FULL_ADDRESS} />;
}
