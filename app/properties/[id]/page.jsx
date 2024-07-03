"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { fetchProperty } from "@/utils/requests";

const PropertyPage = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        console.log("property");
        setProperty(property);
      } catch (error) {
        console.error("Error fetching property: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  return (
    <>
      {/* <PropertyHeaderImage image={property.images[0]} /> */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-green-500 hover:text-green-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      <section className="bg-green-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            {/* <PropertyDetails property={property} /> */}
            <aside className="space-y-4">
              {/* <BookmarkButton property={property} /> */}
              {/* <ShareButtons property={property} /> */}
              {/* <PropertyContactForm property={property} /> */}
              property single page
            </aside>
          </div>
        </div>
      </section>
      {/* <PropertyImages images={property.images} /> */}
    </>
  );
};

export default PropertyPage;
