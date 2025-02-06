interface Chip {
  id: number;
  name: "wildcard" | "freehit" | "bboost" | "3xc" | "manager";
  number: number;
  start_event: number;
  stop_event: number;
  chip_type: string;
  overrides: {
    rules: Record<string, unknown>;
    scoring: Record<string, unknown>;
    element_types: unknown[];
    pick_multiplier: number | null;
  };
}

interface GameSettings {
  league_join_private_max: number;
  league_join_public_max: number;
  league_max_size_public_classic: number;
  league_max_size_public_h2h: number;
  league_max_size_private_h2h: number;
  league_max_ko_rounds_private_h2h: number;
  league_prefix_public: string;
  league_points_h2h_win: number;
  league_points_h2h_lose: number;
  league_points_h2h_draw: number;
  league_ko_first_instead_of_random: boolean;
  squad_squadplay: number;
  squad_squadsize: number;
  squad_team_limit: number;
  squad_total_spend: number;
  ui_currency_multiplier: number;
  ui_use_special_shirts: boolean;
  stats_form_days: number;
  sys_vice_captain_enabled: boolean;
  transfers_cap: number;
  transfers_sell_on_fee: number;
  league_h2h_tiebreak_stats: string[];
  timezone: string;
}

interface GameConfig {
  settings: {
    entry_per_event: boolean;
    timezone: string;
  };
  rules: GameSettings;
  scoring: Record<string, unknown>;
}

interface Phase {
  id: number;
  name: string;
  start_event: number;
  stop_event: number;
  highest_score: number | null;
}

interface Team {
  code: number;
  id: number;
  name: string;
  short_name: string;
  strength: number;
  strength_overall_home: number;
  strength_overall_away: number;
  strength_attack_home: number;
  strength_attack_away: number;
  strength_defence_home: number;
  strength_defence_away: number;
}

interface ElementStat {
  label: string;
  name: string;
}

interface ElementType {
  id: number;
  plural_name: string;
  plural_name_short: string;
  singular_name: string;
  singular_name_short: string;
  squad_select: number;
  squad_min_play: number;
  squad_max_play: number;
  ui_shirt_specific: boolean;
}

interface Element {
  id: number;
  web_name: string;
  element_type: number;
  team: number;
  now_cost: number;
  total_points: number;
  selected_by_percent: string;
  form: string;
  points_per_game: string;
  news: string;
  news_added: string | null;
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  ict_index: string;
  expected_goals: string;
  expected_assists: string;
}

export interface BootstrapData {
  chips: Chip[];
  events: Event[];
  game_settings: GameSettings;
  game_config: GameConfig;
  phases: Phase[];
  teams: Team[];
  element_stats: ElementStat[];
  element_types: ElementType[];
  elements: Element[];
  total_players: number;
}

interface Stat {
  identifier: string;
  a: StatValue[];
  h: StatValue[];
}

interface StatValue {
  value: number;
  element: number;
}

export interface Fixture {
  code: number;
  event: number;
  finished: boolean;
  finished_provisional: boolean;
  id: number;
  kickoff_time: string;
  minutes: number;
  provisional_start_time: boolean;
  started: boolean;
  team_a: number;
  team_a_score: number;
  team_h: number;
  team_h_score: number;
  stats: Stat[];
  team_h_difficulty: number;
  team_a_difficulty: number;
  pulse_id: number;
}

/**
 * Gameweek Interface
 */
export interface Gameweek {
  elements: Element[];
}

interface Element {
  id: number;
  stats: Stats;
  explain: Explain[];
  modified: boolean;
}

interface Stats {
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
  mng_win: number;
  mng_draw: number;
  mng_loss: number;
  mng_underdog_win: number;
  mng_underdog_draw: number;
  mng_clean_sheets: number;
  mng_goals_scored: number;
  total_points: number;
  in_dreamteam: boolean;
}

interface Explain {
  fixture: number;
  stats: Stat[];
}

interface Stat {
  identifier: string;
  points: number;
  value: number;
  points_modification: number;
}

interface History {
  element: number;
  fixture: number;
  opponent_team: number;
  total_points: number;
  was_home: boolean;
  kickoff_time: string;
  team_h_score: number;
  team_a_score: number;
  round: number;
  modified: boolean;
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
  mng_win: number;
  mng_draw: number;
  mng_loss: number;
  mng_underdog_win: number;
  mng_underdog_draw: number;
  mng_clean_sheets: number;
  mng_goals_scored: number;
  value: number;
  transfers_balance: number;
  selected: number;
  transfers_in: number;
  transfers_out: number;
}

interface HistoryPast {
  season_name: string;
  element_code: number;
  start_cost: number;
  end_cost: number;
  total_points: number;
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
  mng_win: number;
  mng_draw: number;
  mng_loss: number;
  mng_underdog_win: number;
  mng_underdog_draw: number;
  mng_clean_sheets: number;
  mng_goals_scored: number;
}

export interface PlayerSummary {
  fixtures: Fixture[];
  history: History[];
  history_past: HistoryPast[];
}
