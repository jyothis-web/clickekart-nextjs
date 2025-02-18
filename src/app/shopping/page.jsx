"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

const shopping = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/")}>Home</button>
      shopping page
    </div>
  );
};

export default shopping;
