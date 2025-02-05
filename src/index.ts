import type { BootstrapData } from "./types";

import { Client } from "./client";

/**
 * API endpoint paths for FPL data
 */
const endpoints = {
  bootstrap: "bootstrap-static/",
  fixtures: "fixtures/",
  gameweek: (id: number) => `event/${id}/live/`,
  player: (id: number) => `element-summary/${id}/`,
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
  private config: Config;
  private client: Client;

  /**
   * Creates a new FPL API client
   * @param config - Configuration options
   */
  constructor(config: Config) {
    this.config = config;
    this.client = new Client(this.config.debug);
  }

  /**
   * Retrieves the bootstrap static data from the FPL API.
   * This data contains core information about the current FPL season including:
   * teams, players, game settings and rules.
   *
   * @example
   * const data = await fpl.getBootstrapData();
   *
   * @returns Bootstrap data from the FPL API
   */
  async getBootstrapData(): Promise<BootstrapData> {
    return this.client.get(endpoints.bootstrap);
  }

  /**
   * Gets all fixtures for the current season
   * @returns List of fixtures
   */
  async getFixtures() {
    return this.client.get(endpoints.fixtures);
  }

  /**
   * Gets live data for a specific gameweek
   * @param id - Gameweek ID
   * @returns Live gameweek data
   */
  async getGameweek(id: number) {
    return this.client.get(endpoints.gameweek(id));
  }

  /**
   * Gets detailed data for a specific player
   * @param id - Player ID
   * @returns Player summary data
   */
  async getPlayer(id: number) {
    return this.client.get(endpoints.player(id));
  }
}
