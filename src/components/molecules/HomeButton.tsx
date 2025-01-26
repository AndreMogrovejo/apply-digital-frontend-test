"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../atoms/Button";

interface HomeButtonProps {
  currentPage: number;
  totalPages: number;
}

const HomeButton: React.FC<HomeButtonProps> = (props) => {
  const { currentPage, totalPages } = props;

  const router = useRouter();
  const params = useSearchParams();
  const page = params?.get("page");
  const hasNoMorePages = currentPage >= totalPages;

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
      isDisabled={hasNoMorePages}
    />
  );
};

export default HomeButton;
