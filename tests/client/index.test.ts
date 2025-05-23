import { APIError, Client } from "../../src/client";

import { afterEach, describe, expect, it, vi } from "vitest";

describe("Client", () => {
  const client = new Client();
  const mockEndpoint = "/example/endpoint";

  describe("get", () => {
    afterEach(() => {
      fetchMock.resetMocks();
    });

    describe("when debug is set", () => {
      it("should include additional logs", async () => {
        const mockError = new APIError(400, "Third-party API failed");
        fetchMock.mockResponseOnce(JSON.stringify({ data: "mocked data" }), {
          status: mockError.code,
          statusText: mockError.message,
        });

        const client = new Client(true);
        const consoleSpy = vi.spyOn(console, "debug");

        await expect(client.get(mockEndpoint)).rejects.toThrow(mockError);
        expect(consoleSpy).toHaveBeenCalled();
      });
    });

    it("should throw an error whenever the status code response is not 2xx", async () => {
      const mockError = new APIError(500, "Third-party API failed");
      fetchMock.mockResponseOnce(JSON.stringify({ data: "mocked data" }), {
        status: mockError.code,
        statusText: mockError.message,
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
