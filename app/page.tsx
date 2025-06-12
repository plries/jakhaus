import { LISTINGS_MOCK } from "./[id]/const";

export default function Home() {
  return (
    <div className="">
      {LISTINGS_MOCK.map((listing) => (
        <a key={listing.id} href={`/${listing.id}`} className="">
          {listing.id}
        </a>
      ))}
    </div>
  );
}
