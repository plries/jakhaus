import { supabase } from "@/utils/supabase/client";
import { EditAgent } from "./components";
import { JakhausLogo } from "@/public/icons";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditAgentPage({ params }: Props) {
  const { id } = await Promise.resolve(params);

  const { data: AGENT, error } = await supabase
    .from("agents")
    .select("*")
    .eq("id", id)
    .single();

  if (!AGENT || error) {
    return (
      <div className="flex col-span-full flex-col items-center justify-center gap-1 text-neutral-950">
        <JakhausLogo width={120} />
        <p className="text-neutral-950/50">Agent not found.</p>
      </div>
    );
  }

  return <EditAgent EDITED_AGENT={AGENT} />;
}
