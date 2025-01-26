// Generated by Qodo Gen

import { fetchGameService } from "../../services/gameServices";

describe("fetchGameService", () => {
  // Fetch games data successfully with default parameters
  it("should fetch games data with default genre and page parameters", async () => {
    const mockResponse = {
      games: [],
      availableFilters: [],
      totalPages: 1,
      currentPage: 1,
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    const result = await fetchGameService();

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?genre=&page=1`,
      { cache: "no-cache" }
    );
    expect(result).toEqual(mockResponse);
  });

  // Handle empty genre parameter
  it("should fetch games data with empty genre and specified page", async () => {
    const mockResponse = {
      games: [],
      availableFilters: [],
      totalPages: 1,
      currentPage: 2,
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    const result = await fetchGameService("", "2");

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/games?genre=&page=2`,
      { cache: "no-cache" }
    );
    expect(result).toEqual(mockResponse);
  });
});
