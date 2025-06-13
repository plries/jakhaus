import { LISTINGS_MOCK } from "./[id]/const";

export default function Home() {
  return (
    <div>
      {LISTINGS_MOCK.map((listing) => (
        <a key={listing.id} href={`/${listing.id}`}>
          {listing.id}
        </a>
      ))}
    </div>
  );
}
