"use client"

import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-semibold">This is home page</h1>
      <button
        onClick={() => {
          router.push("/accounts");
        }}
      >
        Go to accounts
      </button>
    </div>
  );
};

export default page;
