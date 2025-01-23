"use server";
import { Game } from "@/utils/endpoint";

interface GameServiceResponse {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
}

export const fetchGameService = async (genre = "", page = "1") => {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/games`;
  const res = await fetch(`${baseUrl}?genre=${genre}&page=${page}`, {
    cache: "no-cache",
  });
  const data: GameServiceResponse = await res.json();
  return data;
};
