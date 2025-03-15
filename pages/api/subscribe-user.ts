import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const response = await fetch(
    "https://<region>-<project-name>.cloudfunctions.net/subscribeUser",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ message: data.message });
  }

  return res.status(200).json(data);
}
