import { createClient } from "@/utils/supabase/server";

// 1. create the agent
export async function createAgent(agent: any) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();

  const agentData = Object.fromEntries(
    Object.entries({
      id: agent.id,
      LOGO_URL: agent.LOGO_URL,
      LOGO_DARK: agent.LOGO_DARK,
      SUBTITLE: agent.SUBTITLE,
      NAME: agent.NAME,
      EMAIL: agent.EMAIL,
      PHONE: agent.PHONE,
      WEBSITE: agent.WEBSITE,
      INSTAGRAM: agent.INSTAGRAM,
      BROKERAGE_NAME: agent.BROKERAGE_NAME,
      BROKERAGE_LOGO: agent.BROKERAGE_LOGO,
      BROKERAGE_ADDRESS: agent.BROKERAGE_ADDRESS,
      user_id: user?.id
    }).filter(([_, v]) => v !== null && v !== undefined && v !== "")
  );

  const { data, error } = await supabase
    .from("agents")
    .upsert(agentData, { onConflict: "id" })
    .select("id")
    .single();

  if (error) throw error;

  return data.id;
}