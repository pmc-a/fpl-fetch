import { afterEach, describe, expect, it, vi } from "vitest";

import { Client } from "../../src/client";

describe("Client", () => {
  const client = new Client();
  const mockEndpoint = "/example/endpoint";

  describe("get", () => {
    afterEach(() => {
      fetchMock.resetMocks();
    });

    describe("when debug is set", () => {
      it("should include additional logs", async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ data: "mocked data" }), {
          status: 400,
        });

        const client = new Client(true);
        const consoleSpy = vi.spyOn(console, "log");

        await expect(client.get(mockEndpoint)).rejects.toThrow(
          "Third-party API failed",
        );
        expect(consoleSpy).toHaveBeenCalled();
      });
    });

    it("should throw an error whenever the status code response is not 2xx", async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: "mocked data" }), {
        status: 400,
      });

      await expect(client.get(mockEndpoint)).rejects.toThrow(
        "Third-party API failed",
      );
    });

    it("should return the response data when successful", async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: "mocked data" }), {
        status: 200,
      });

      const result = await client.get(mockEndpoint);
      expect(result).toEqual({ data: "mocked data" });
    });
  });
});
