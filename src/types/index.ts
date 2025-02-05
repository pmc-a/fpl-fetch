interface Chip {
  id: number;
  name: string;
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

export interface BootstrapData extends Response {
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
