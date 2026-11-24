import React from "react";
import { contactData } from "@/data/contactData";

export default function Map() {
  const { map } = contactData;

  return (
    <div className="w-full h-full min-h-[380px] rounded-[24px] overflow-hidden border border-[#e5e7eb] shadow-sm relative bg-[#f0ede6]">
      <iframe
        title="Karumannil Holding Location Map - Kottakkal, Kerala"
        src={map.embedUrl}
        className="w-full h-full border-0 absolute inset-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
