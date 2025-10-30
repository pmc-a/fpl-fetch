import type {
  BootstrapData,
  EventStatus,
  Fixture,
  Gameweek,
  ManagerGameweekPicks,
  ManagerHistory,
  ManagerSummary,
  PlayerSummary,
  Transfer,
} from "./types";

import { Client } from "./client";

// Re-export for library consumers
export { APIError } from "./client";
export type {
  // Main API response types
  BootstrapData,
  Chip,
  Event,
  EventStatus,
  Fixture,
  GameConfig,
  Gameweek,
  GameSettings,
  ManagerGameweekPicks,
  ManagerHistory,
  ManagerSummary,
  Phase,
  PlayerSummary,
  Transfer,
  // Useful nested types
  Element,
  GameweekElement,
  History,
  Pick,
  Team,
} from "./types";

/**
 * API endpoint paths for FPL data
 */
const endpoints = {
  bootstrap: "bootstrap-static/",
  eventStatus: "event-status/",
  fixtures: "fixtures/",
  gameweek: (id: number) => `event/${id}/live/`,
  player: (id: number) => `element-summary/${id}/`,
  manager: (id: number) => `entry/${id}/`,
  managerTransfers: (id: number) => `entry/${id}/transfers/`,
  managerHistory: (id: number) => `entry/${id}/history/`,
  managerGameweekPicks: (id: number, gameweekId: number) =>
    `entry/${id}/event/${gameweekId}/picks/`,
};

/**
 * Configuration options for FPL client
 */
interface Config {
  debug: boolean;
}

/**
 * Client for fetching data from the Fantasy Premier League API
 */
export default class FplFetch {
  private config: Config = {
    debug: false,
  };

  private client: Client;

  /**
   * Creates a new FPL API client
   * @param config - Configuration options
   *
   * @example
   * ```ts
   * const fpl = new FplFetch({ debug: true });
   * ```
   */
  constructor(config?: Config) {
    if (config) {
      this.config = config;
    }
    this.client = new Client(this.config.debug);
  }

  /**
   * Retrieves the bootstrap static data from the FPL API.
   * This data contains core information about the current FPL season including:
   * teams, players, game settings and rules.
   * @returns Bootstrap data
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getBootstrapData();
   * } catch (error: unknown) {
   *   console.error(error);
   * }
   * ```
   */
  async getBootstrapData(): Promise<BootstrapData> {
    return this.client.get(endpoints.bootstrap);
  }

  /**
   * Gets the current event status.
   * This provides information about the current gameweek, and whether bonus points have been added.
   * @returns Current event status data
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getCurrentEvent();
   * } catch (error: unknown) {
   *   console.error(error);
   * }
   * ```
   */
  async getCurrentEvent(): Promise<EventStatus> {
    return this.client.get(endpoints.eventStatus);
  }

  /**
   * Gets all fixtures for the current season.
   * @returns List of fixtures
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getFixtures();
   * } catch (error: unknown) {
   *   console.error(error);
   * }
   * ```
   */
  async getFixtures(): Promise<Fixture[]> {
    return this.client.get(endpoints.fixtures);
  }

  /**
   * Gets live data for a specific gameweek
   * @param id - Gameweek ID
   * @returns Live gameweek data
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getGameweek(1);
   * } catch (error: unknown) {
   *   console.error(error);
   * }
   * ```
   */
  async getGameweek(id: number): Promise<Gameweek> {
    return this.client.get(endpoints.gameweek(id));
  }

  /**
   * Gets detailed data for a specific player
   * @param id - Player ID
   * @returns Player summary data
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getPlayer(1);
   * } catch (error: unknown) {
   *   console.error(error);
   * }
   * ```
   */
  async getPlayer(id: number): Promise<PlayerSummary> {
    return this.client.get(endpoints.player(id));
  }

  /**
   * Gets detailed data for a specific manager
   * @param id - Manager ID
   * @returns Manager summary data
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getManager(1);
   * } catch (error: unknown) {
   *   console.error(error);
   * }
   * ```
   */
  async getManager(id: number): Promise<ManagerSummary> {
    return this.client.get(endpoints.manager(id));
  }

  /**
   * Gets transfer history for a specific manager
   * @param id - Manager ID
   * @returns List of transfers made by the manager
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getManagerTransfers(1);
   * } catch (error: unknown) {
   *   console.error(error);
   * }}
   * ```
   */
  async getManagerTransfers(id: number): Promise<Transfer[]> {
    return this.client.get(endpoints.managerTransfers(id));
  }

  /**
   * Gets historical data for a specific manager
   * @param id - Manager ID
   * @returns Manager history data including past seasons and current season performance
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getManagerHistory(1);
   * } catch (error: unknown) {
   *   console.error(error);
   * }
   * ```
   */
  async getManagerHistory(id: number): Promise<ManagerHistory> {
    return this.client.get(endpoints.managerHistory(id));
  }

  /**
   * Gets a manager's team picks for a specific gameweek
   * @param id - Manager ID
   * @param gameweekId - Gameweek ID
   * @returns Manager's team selection and points for the specified gameweek
   *
   * @example
   * ```ts
   * try {
   *   const data = await fpl.getManagerGameweekPicks(1, 1);
   * } catch (error: unknown) {
   *   console.error(error);
   * }
   * ```
   */
  async getManagerGameweekPicks(
    id: number,
    gameweekId: number,
  ): Promise<ManagerGameweekPicks> {
    return this.client.get(endpoints.managerGameweekPicks(id, gameweekId));
  }
}
