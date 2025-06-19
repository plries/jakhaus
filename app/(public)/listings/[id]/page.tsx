import { Metadata } from "next";
import { Listing } from "./components";
import { LISTINGS_MOCK } from "./components/Listing/const";
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
      title: "Listing not found",
      description: "No listing was found for this ID",
    };
  }

  const FULL_ADDRESS = `${listing.ADDRESS.STREET} ${listing.ADDRESS.UNIT} ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE} ${listing.ADDRESS.POSTAL_CODE}`;

  return {
    title: FULL_ADDRESS + " | Jakhaus Creative Media",
    description: "View the listing for " + FULL_ADDRESS + " by Jakhaus Creative Media.",
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

  const FULL_ADDRESS = `${listing.ADDRESS.STREET} ${listing.ADDRESS.UNIT} ${listing.ADDRESS.CITY}, ${listing.ADDRESS.PROVINCE} ${listing.ADDRESS.POSTAL_CODE}`;

  return <Listing CONSTANTS={listing} FULL_ADDRESS={FULL_ADDRESS} />;
}
