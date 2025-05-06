"use client";

import Button from "@/components/Button";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [ipData2, setIpData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIpData({
        country_name: "India",
      });
    }, 1000);
  }, []);

  const getAllCoursesHandler = async () => {
    if (!ipData2?.country_name) {
      return null;
    }
    let countryName;
    countryName = ipData2?.country_name?.toLowerCase();
    console.log("country name check", countryName);
    const res = await fetch(
      `https://younglabsapis-33heck6yza-el.a.run.app/admin/courses/getCoursesForLandingPage/${
        countryName ? countryName : "none"
      }`
    );
    const data = await res.json();
    let filteredCourses = data.filter((course) => course.showOnWebsite);
    return filteredCourses;
  };

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["courses_inaccounts", ipData2?.country_name],
    queryFn: getAllCoursesHandler,
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-600">
        This is Accounts page
      </h1>

      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        Go to Home
      </Button>
      <button></button>
      <button onClick={refetch}>Refetch</button>

      <p className="mt-10">{data ? JSON.stringify(data) : "No data"}</p>
    </div>
  );
};

export default page;
