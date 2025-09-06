import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

function findById(id: string) {
  const name = decodeURIComponent(id);
  return PROPERTYLISTINGSAMPLE.find((p) => p.name === name);
}

function normalizeImagePath(image?: string | null) {
  if (!image) return "/assets/images/Placeholder.jpg";
  if (image.startsWith("./")) return image.replace(/^\./, "");
  if (image.includes("example.com")) return "/assets/images/Placeholder.jpg";
  return image;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Invalid id" });
  }

  const detail = findById(id);
  if (!detail) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.status(200).json({ ...detail, image: normalizeImagePath(detail.image) });
}
