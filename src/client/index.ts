/**
 * Custom error class for API-related errors
 */
export class APIError extends Error {
  /**
   * Creates a new APIError instance
   * @param code - HTTP status code of the error
   * @param message - Error message
   * @param originalError - Optional original error that caused this error
   */
  constructor(
    public code: number,
    message: string,
    public originalError?: unknown,
  ) {
    super(message);
  }
}

/**
 * Client for making API requests to the Fantasy Premier League API
 */
export class Client {
  private baseUrl = "https://fantasy.premierleague.com/api";
  private debug = false;

  /**
   * Creates a new API client instance
   * @param debug - Optional flag to enable debug logging
   */
  constructor(debug?: boolean) {
    this.debug = debug ?? false;
  }

  /**
   * Makes a GET request to the API
   * @param resource - The API resource path to request
   * @returns Promise that resolves with the response data
   * @throws {@link APIError} If the request fails or returns a non-200 status
   */
  public async get<T>(resource: string): Promise<T> {
    if (this.debug) {
      console.log(`GET ${resource}`);
    }

    try {
      const result = await fetch(`${this.baseUrl}/${resource}`);

      if (result.ok) {
        const data = await result.json();
        return data as T;
      }

      throw new APIError(result.status, result.statusText);
    } catch (error) {
      throw new APIError(500, "Third-party API failed", error);
    }
  }
}
