import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";

import { Client } from "../src/client";

import FplFetch from "../src";

vi.mock("../src/client", () => {
  return {
    Client: vi.fn().mockImplementation(() => ({
      get: vi.fn(),
    })),
  };
});

describe("FplFetch", () => {
  let fplFetch: FplFetch;
  let mockClient: { get: Mock };

  beforeEach(() => {
    vi.clearAllMocks();

    fplFetch = new FplFetch();
    mockClient = (Client as unknown as Mock).mock.results[0].value;
  });

  it("should create an instance with default config", () => {
    expect(fplFetch).toBeInstanceOf(FplFetch);
    expect(Client).toHaveBeenCalledWith(false);
  });

  it("should create an instance with custom config", () => {
    new FplFetch({ debug: true });
    expect(Client).toHaveBeenCalledWith(true);
  });

  describe("bootstrap data", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(
        new Error("Mock getBootstrapData error"),
      );

      await expect(fplFetch.getBootstrapData()).rejects.toThrow(
        "Mock getBootstrapData error",
      );
    });

    it("should get bootstrap data", async () => {
      const mockBootstrapData = {
        id: 12345,
      };
      mockClient.get.mockResolvedValue(mockBootstrapData);

      const result = await fplFetch.getBootstrapData();

      expect(mockClient.get).toHaveBeenCalledWith("bootstrap-static/");
      expect(result).toEqual(mockBootstrapData);
    });
  });

  describe("event status", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(new Error("Mock getCurrentEvent error"));

      await expect(fplFetch.getCurrentEvent()).rejects.toThrow(
        "Mock getCurrentEvent error",
      );
    });

    it("should get event status", async () => {
      const mockEventStatus = {
        id: 12345,
      };
      mockClient.get.mockResolvedValue(mockEventStatus);

      const result = await fplFetch.getCurrentEvent();

      expect(mockClient.get).toHaveBeenCalledWith("event-status/");
      expect(result).toEqual(mockEventStatus);
    });
  });

  describe("fixtures", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(new Error("Mock getFixtures error"));

      await expect(fplFetch.getFixtures()).rejects.toThrow(
        "Mock getFixtures error",
      );
    });

    it("should get fixtures", async () => {
      const mockFixtures = [
        {
          id: 12345,
        },
      ];
      mockClient.get.mockResolvedValue(mockFixtures);

      const result = await fplFetch.getFixtures();

      expect(mockClient.get).toHaveBeenCalledWith("fixtures/");
      expect(result).toEqual(mockFixtures);
    });
  });

  describe("gameweek data", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(new Error("Mock getGameweekData error"));

      await expect(fplFetch.getGameweek(1)).rejects.toThrow(
        "Mock getGameweekData error",
      );
    });

    it("should get gameweek data", async () => {
      const mockGameweekData = {
        id: 12345,
      };
      mockClient.get.mockResolvedValue(mockGameweekData);

      const result = await fplFetch.getGameweek(1);

      expect(mockClient.get).toHaveBeenCalledWith("event/1/live/");
      expect(result).toEqual(mockGameweekData);
    });
  });

  describe("player data", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(new Error("Mock getPlayerData error"));

      await expect(fplFetch.getPlayer(1)).rejects.toThrow(
        "Mock getPlayerData error",
      );
    });

    it("should get player data", async () => {
      const mockPlayerData = {
        id: 12345,
      };
      mockClient.get.mockResolvedValue(mockPlayerData);

      const result = await fplFetch.getPlayer(1);

      expect(mockClient.get).toHaveBeenCalledWith("element-summary/1/");
      expect(result).toEqual(mockPlayerData);
    });
  });

  describe("manager data", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(new Error("Mock getManagerData error"));

      await expect(fplFetch.getManager(1)).rejects.toThrow(
        "Mock getManagerData error",
      );
    });

    it("should get manager data", async () => {
      const mockManagerData = {
        id: 12345,
      };
      mockClient.get.mockResolvedValue(mockManagerData);

      const result = await fplFetch.getManager(1);

      expect(mockClient.get).toHaveBeenCalledWith("entry/1/");
      expect(result).toEqual(mockManagerData);
    });
  });

  describe("manager transfers", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(
        new Error("Mock getManagerTransfers error"),
      );

      await expect(fplFetch.getManagerTransfers(1)).rejects.toThrow(
        "Mock getManagerTransfers error",
      );
    });

    it("should get manager transfers", async () => {
      const mockTransfers = [
        {
          id: 12345,
        },
      ];
      mockClient.get.mockResolvedValue(mockTransfers);

      const result = await fplFetch.getManagerTransfers(1);

      expect(mockClient.get).toHaveBeenCalledWith("entry/1/transfers/");
      expect(result).toEqual(mockTransfers);
    });
  });

  describe("manager history", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(
        new Error("Mock getManagerHistory error"),
      );

      await expect(fplFetch.getManagerHistory(1)).rejects.toThrow(
        "Mock getManagerHistory error",
      );
    });

    it("should get manager history", async () => {
      const mockHistory = {
        id: 12345,
      };
      mockClient.get.mockResolvedValue(mockHistory);

      const result = await fplFetch.getManagerHistory(1);

      expect(mockClient.get).toHaveBeenCalledWith("entry/1/history/");
      expect(result).toEqual(mockHistory);
    });
  });

  describe("manager gameweek picks", () => {
    it("should throw an error when the client errors", async () => {
      mockClient.get.mockRejectedValue(
        new Error("Mock getManagerGameweekPicks error"),
      );

      await expect(fplFetch.getManagerGameweekPicks(1, 1)).rejects.toThrow(
        "Mock getManagerGameweekPicks error",
      );
    });

    it("should get manager gameweek picks", async () => {
      const mockPicks = {
        id: 12345,
      };
      mockClient.get.mockResolvedValue(mockPicks);

      const result = await fplFetch.getManagerGameweekPicks(1, 1);

      expect(mockClient.get).toHaveBeenCalledWith("entry/1/event/1/picks/");
      expect(result).toEqual(mockPicks);
    });
  });
});
