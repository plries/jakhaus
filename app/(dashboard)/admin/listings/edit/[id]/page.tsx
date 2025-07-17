import { supabase } from "@/utils/supabase/client";
import { EditListing } from "./components";
import { JakhausLogo } from "@/public/icons";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditListingPage({ params }: Props) {
  const { id } = await Promise.resolve(params);

  const { data: LISTING, error } = await supabase
    .from("listings")
      .select(`
      *,
      agents:agent_id (*),
      photos (URL),
      floor_plans (URL)
    `)
    .eq("id", id)
    .single();

  if (!LISTING || error) {
    return (
      <div className="flex col-span-full flex-col items-center justify-center gap-1 text-neutral-950">
        <JakhausLogo width={120} />
        <p className="text-neutral-950/50">Listing not found.</p>
      </div>
    );
  }

  return <EditListing EDITED_LISTING={LISTING} />;
}
