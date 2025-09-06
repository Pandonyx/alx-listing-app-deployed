import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

// Maps sample listing into a minimal card-friendly shape
function normalizeImagePath(image?: string | null) {
  if (!image) return "/assets/images/Placeholder.jpg";
  if (image.startsWith("./")) return image.replace(/^\./, "");
  if (image.includes("example.com")) return "/assets/images/Placeholder.jpg";
  return image;
}

function toCardShape(item: any) {
  const id = encodeURIComponent(item.name);
  return {
    id,
    title: item.name,
    thumbnailUrl: normalizeImagePath(item.image) ?? null,
    pricePerNight: item.price ?? null,
    rating: item.rating ?? null,
    beds: item?.offers?.bed ? Number(item.offers.bed) : null,
    baths: item?.offers?.shower ? Number(item.offers.shower) : null,
    city: item?.address?.city ?? "",
    country: item?.address?.country ?? "",
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const result = PROPERTYLISTINGSAMPLE.map(toCardShape);
  return res.status(200).json(result);
}
