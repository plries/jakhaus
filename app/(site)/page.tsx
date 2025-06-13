import { LISTINGS_MOCK } from "./[id]/const";

export default function Home() {
  return (
    <div>
      {LISTINGS_MOCK.map((LISTING) => (
        <a key={LISTING.ID} href={`/${LISTING.ID}`}>
          {LISTING.ID}
        </a>
      ))}
    </div>
  );
}
