import { createClient } from "@/utils/supabase/server";

export async function deleteAgent(agentId: string) {
  const supabase = await createClient();

  // 1. fetch the logo URLs
  const { data: agent, error: fetchError } = await supabase
    .from("agents")
    .select("LOGO_URL, BROKERAGE_LOGO")
    .eq("id", agentId)
    .single();

  if (fetchError) throw fetchError;

  // 2. extract paths from URLs
  const filesToDelete: string[] = [];

  const extractPath = (url: string) => {
    try {
      const parts = new URL(url).pathname.split("/object/public/media/");
      return parts[1]; // get path inside the 'media' bucket
    } catch (err) {
      console.error("invalid URL:", url);
      return null;
    }
  };

  const logoPath = agent.LOGO_URL ? extractPath(agent.LOGO_URL) : null;
  const brokeragePath = agent.BROKERAGE_LOGO ? extractPath(agent.BROKERAGE_LOGO) : null;

  if (logoPath) filesToDelete.push(logoPath);
  if (brokeragePath) filesToDelete.push(brokeragePath);

  // 3. delete the agent row
  const { error: deleteError } = await supabase
    .from("agents")
    .delete()
    .eq("id", agentId);

  if (deleteError) throw deleteError;

  // 4. delete files from 'media' bucket
  if (filesToDelete.length > 0) {
    const { error: storageError } = await supabase
      .storage
      .from("media")
      .remove(filesToDelete);

    if (storageError) {
      console.error("error deleting files:", storageError);
    }
  }
}
