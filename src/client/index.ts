export class APIError extends Error {
  constructor(
    public code: number,
    message: string,
    public originalError?: unknown,
  ) {
    super(message);
  }
}

export class Client {
  private baseUrl = "https://fantasy.premierleague.com/api";
  private debug = false;

  constructor(debug?: boolean) {
    this.debug = debug ?? false;
  }

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
