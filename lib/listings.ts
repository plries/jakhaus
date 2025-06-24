export const createListing = async (data: any) => {
  const res = await fetch("/api/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Failed to create listing. Status: ${res.status}`);
  }

  return res.json();
};