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

  private success = false;
  private status = 500;

  /**
   * Creates a new API client instance
   * @param debug - Optional flag to enable debug logging
   */
  constructor(debug?: boolean) {
    this.debug = debug ?? false;
  }

  /**
   * Logs debug information about an API request
   * @param resource - The API resource path that was requested
   * @param status - The HTTP status code returned from the request
   * @param duration - The duration of the request in milliseconds
   * @param success - Whether the request was successful
   * @returns void
   */
  private logDebug(
    resource: string,
    status: number,
    duration: number,
    success: boolean,
  ): void {
    if (!this.debug) return;

    console.debug(
      `[DEBUG] ${new Date().toISOString()} GET ${resource} | Status: ${status} | Duration ${duration}ms`,
      {
        baseUrl: this.baseUrl,
        debug: this.debug,
        resource,
        success,
      },
    );
  }

  /**
   * Makes a GET request to the Fantasy Premier League API
   * @param resource - The API resource path to request (e.g. "bootstrap-static/")
   * @returns Promise that resolves with the typed response data
   * @throws {@link APIError} If the request fails with a non-200 status code
   * @throws {@link APIError} If there is a network or parsing error (with 500 status)
   * @example
   * const data = await client.get<BootstrapResponse>("bootstrap-static/");
   */
  public async get<T>(resource: string): Promise<T> {
    const start = this.debug ? performance.now() : 0;

    try {
      const result = await fetch(`${this.baseUrl}/${resource}`);

      if (!result.ok) {
        throw new APIError(result.status, result.statusText);
      }

      const data = (await result.json()) as T;

      this.success = true;
      this.status = result.status;

      return data;
    } catch (error) {
      if (error instanceof APIError) {
        this.success = false;
        this.status = error.code;

        throw error;
      } else {
        throw new APIError(500, "Third-party API failed", error);
      }
    } finally {
      if (this.debug) {
        this.logDebug(
          resource,
          this.status,
          performance.now() - start,
          this.success,
        );
      }
    }
  }
}
