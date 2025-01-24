"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../atoms/Button";

interface HomeButtonProps {}

const HomeButton: React.FC<HomeButtonProps> = (props) => {
  const router = useRouter();
  const params = useSearchParams();
  const page = params?.get("page");

  const handleClick = () => {
    const currentPage = page ? parseInt(page, 10) : 1;
    const nextPage = currentPage + 1;
    const newParams = new URLSearchParams(params?.toString());
    newParams.set("page", nextPage.toString());
    if (page) {
      router.replace(`?${newParams.toString()}`);
      return;
    }
    router.push(`?${newParams.toString()}`);
  };

  return (
    <Button
      text="SEE MORE"
      className="w-full sm:max-w-[140px] h-[56px] self-start"
      onClick={handleClick}
    />
  );
};

export default HomeButton;
