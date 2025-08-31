"use client";
import React from "react";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE, CONFIG } from "@/constants";
import Link from "next/link";

type Props = {
  activeFilter?: string;
};

export default function ListingSection({ activeFilter = "All" }: Props) {
  /* filter by pill label (or show all) */
  const data =
    activeFilter === "All"
      ? PROPERTYLISTINGSAMPLE
      : PROPERTYLISTINGSAMPLE.filter((p) => p.category?.includes(activeFilter));

  return (
    <section className='max-w-6xl px-4 py-8 mx-auto'>
      <h2 className='mb-6 text-2xl font-bold'>Featured properties</h2>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.slice(0, CONFIG.ITEMS_PER_PAGE).map((prop) => (
          <Link
            href={`/property/${prop.name}`}
            key={prop.name}>
            <Card {...prop} />
          </Link>
        ))}
      </div>
    </section>
  );
}
