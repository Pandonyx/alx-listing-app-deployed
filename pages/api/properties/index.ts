import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import type { PropertyProps, PropertyCardData } from "@/interfaces";

// Maps sample listing into a minimal card-friendly shape
function normalizeImagePath(image?: string | null) {
  if (!image) return "/assets/images/Placeholder.jpg";
  if (image.startsWith("./")) return image.replace(/^\./, "");
  if (image.includes("example.com")) return "/assets/images/Placeholder.jpg";
  return image;
}

function toCardShape(item: PropertyProps): PropertyCardData {
  const id = encodeURIComponent(item.name);
  return {
    id,
    title: item.name,
    thumbnailUrl: normalizeImagePath(item.image) ?? undefined,
    pricePerNight: item.price ?? undefined,
    rating: item.rating ?? undefined,
    beds: item?.offers?.bed ? Number(item.offers.bed) : undefined,
    baths: item?.offers?.shower ? Number(item.offers.shower) : undefined,
    city: item?.address?.city ?? "",
    country: item?.address?.country ?? "",
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const result: PropertyCardData[] = PROPERTYLISTINGSAMPLE.map(toCardShape);
  return res.status(200).json(result);
}
