import { createClient } from "@/utils/supabase/server";

export async function editAgent(agent: any, touchedFieldsRaw: string[]) {
  const touchedFields = new Set(touchedFieldsRaw);
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.id) throw new Error("user not authenticated");

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
      user_id: user.id
    }).filter(([key]) => touchedFields.has(key))
  );

  if (Object.keys(agentData).length === 0) {
    return agent.id;
  }

  const { data, error } = await supabase
    .from("agents")
    .update(agentData)
    .eq("id", agent.id)
    .select("id")
    .maybeSingle();
  if (error) throw error;

  return agent.id;
}
