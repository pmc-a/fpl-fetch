export interface Event {
  id: number;
  name: string;
  deadline_time: string;
  release_time: string | null;
  average_entry_score: number;
  finished: boolean;
  data_checked: boolean;
  highest_scoring_entry: number;
  deadline_time_epoch: number;
  deadline_time_game_offset: number;
  highest_score: number;
  is_previous: boolean;
  is_current: boolean;
  is_next: boolean;
  cup_leagues_created: boolean;
  h2h_ko_matches_created: boolean;
  can_enter: boolean;
  can_manage: boolean;
  released: boolean;
  ranked_count: number;
  overrides: {
    rules: Record<string, unknown>;
    scoring: Record<string, unknown>;
    element_types: unknown[];
    pick_multiplier: number | null;
  };
  chip_plays: {
    chip_name: string;
    num_played: number;
  }[];
  most_selected: number;
  most_transferred_in: number;
  top_element: number;
  top_element_info: {
    id: number;
    points: number;
  };
  transfers_made: number;
  most_captained: number;
  most_vice_captained: number;
}

export interface Chip {
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

export interface GameSettings {
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

export interface GameConfig {
  settings: {
    entry_per_event: boolean;
    timezone: string;
  };
  rules: GameSettings;
  scoring: Record<string, unknown>;
}

export interface Phase {
  id: number;
  name: string;
  start_event: number;
  stop_event: number;
  highest_score: number | null;
}

export interface Team {
  code: number;
  id: number;
  name: string;
  short_name: string;
  unavailable: boolean;
  strength: number;
  position: number;
  played: number;
  win: number;
  loss: number;
  draw: number;
  points: number;
  form: string | null;
  link_url: string;
  strength_overall_home: number;
  strength_overall_away: number;
  strength_attack_home: number;
  strength_attack_away: number;
  strength_defence_home: number;
  strength_defence_away: number;
  team_division: number | null;
  pulse_id: number;
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

export interface Element {
  id: number;
  web_name: string;
  first_name: string;
  second_name: string;
  element_type: number;
  team: number;
  team_code: number;
  status: string;
  code: number;
  now_cost: number;
  now_cost_rank: number;
  now_cost_rank_type: number;
  cost_change_event: number;
  cost_change_event_fall: number;
  cost_change_start: number;
  cost_change_start_fall: number;
  total_points: number;
  event_points: number;
  points_per_game: string;
  points_per_game_rank: number;
  points_per_game_rank_type: number;
  selected_by_percent: string;
  selected_rank: number;
  selected_rank_type: number;
  form: string;
  form_rank: number;
  form_rank_type: number;
  value_form: string;
  value_season: string;
  transfers_in: number;
  transfers_in_event: number;
  transfers_out: number;
  transfers_out_event: number;
  news: string;
  news_added: string | null;
  chance_of_playing_next_round: number | null;
  chance_of_playing_this_round: number | null;
  squad_number: number | null;
  photo: string;
  special: boolean;
  in_dreamteam: boolean;
  dreamteam_count: number;
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  clean_sheets_per_90: number;
  goals_conceded: number;
  goals_conceded_per_90: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  saves_per_90: number;
  bonus: number;
  bps: number;
  influence: string;
  influence_rank: number;
  influence_rank_type: number;
  creativity: string;
  creativity_rank: number;
  creativity_rank_type: number;
  threat: string;
  threat_rank: number;
  threat_rank_type: number;
  ict_index: string;
  ict_index_rank: number;
  ict_index_rank_type: number;
  starts: number;
  starts_per_90: number;
  expected_goals: string;
  expected_goals_per_90: number;
  expected_assists: string;
  expected_assists_per_90: number;
  expected_goal_involvements: string;
  expected_goal_involvements_per_90: number;
  expected_goals_conceded: string;
  expected_goals_conceded_per_90: number;
  ep_this: string | null;
  ep_next: string | null;
  corners_and_indirect_freekicks_order: number | null;
  corners_and_indirect_freekicks_text: string;
  direct_freekicks_order: number | null;
  direct_freekicks_text: string;
  penalties_order: number | null;
  penalties_text: string;
  can_transact: boolean;
  can_select: boolean;
  removed: boolean;
  region: number;
  team_join_date: string;
  birth_date: string;
  has_temporary_code: boolean;
  opta_code: string;
  clearances_blocks_interceptions: number;
  recoveries: number;
  tackles: number;
  defensive_contribution: number;
  defensive_contribution_per_90: number;
  scout_risks: unknown[];
}

/**
 * Bootsrap
 */
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
 * Event Status
 */
interface CurrentEventStatus {
  bonus_added: boolean;
  date: string;
  event: number;
  points: string;
}

export interface EventStatus {
  status: CurrentEventStatus[];
  leagues: string;
}

/**
 * Gameweek summary
 */
export interface Gameweek {
  elements: GameweekElement[];
}

export interface GameweekElement {
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
  clearances_blocks_interceptions: number;
  recoveries: number;
  tackles: number;
  defensive_contribution: number;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
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

export interface History {
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
  clearances_blocks_interceptions: number;
  recoveries: number;
  tackles: number;
  defensive_contribution: number;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
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
  clearances_blocks_interceptions: number;
  recoveries: number;
  tackles: number;
  defensive_contribution: number;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
}

/**
 * Individual player summary
 */

interface PlayerFixture {
  id: number;
  code: number;
  team_h: number;
  team_h_score: number | null;
  team_a: number;
  team_a_score: number | null;
  event: number;
  finished: boolean;
  minutes: number;
  provisional_start_time: boolean;
  kickoff_time: string;
  event_name: string;
  is_home: boolean;
  difficulty: number;
}

export interface PlayerSummary {
  fixtures: PlayerFixture[];
  history: History[];
  history_past: HistoryPast[];
}

interface Leagues {
  classic: ClassicLeague[];
  h2h: H2HLeague[];
  cup: Cup;
}

interface ClassicLeague {
  id: number;
  name: string;
  short_name: string | null;
  created: string;
  closed: boolean;
  rank: number | null;
  max_entries: number | null;
  league_type: string;
  scoring: string;
  admin_entry: number | null;
  start_event: number;
  entry_can_leave: boolean;
  entry_can_admin: boolean;
  entry_can_invite: boolean;
  has_cup: boolean;
  cup_league: number | null;
  cup_qualified: boolean | null;
  rank_count: number;
  entry_percentile_rank: number;
  active_phases: ActivePhase[];
  entry_rank: number;
  entry_last_rank: number;
}

interface H2HLeague {
  id: number;
  name: string;
  short_name: string | null;
  created: string;
  closed: boolean;
  rank: number | null;
  max_entries: number | null;
  league_type: string;
  scoring: string;
  admin_entry: number;
  start_event: number;
  entry_can_leave: boolean;
  entry_can_admin: boolean;
  entry_can_invite: boolean;
  has_cup: boolean;
  cup_league: number | null;
  cup_qualified: boolean | null;
  rank_count: number | null;
  entry_percentile_rank: number | null;
  active_phases: unknown[];
  entry_rank: number;
  entry_last_rank: number;
}

interface Cup {
  matches: unknown[];
  status: CupStatus;
  cup_league: number | null;
}

interface CupStatus {
  qualification_event: number | null;
  qualification_numbers: number | null;
  qualification_rank: number | null;
  qualification_state: string | null;
}

interface ActivePhase {
  phase: number;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  league_id: number;
  rank_count: number;
  entry_percentile_rank: number;
}

interface CupMatch {
  id: number;
  entry_1_entry: number;
  entry_1_name: string;
  entry_1_player_name: string;
  entry_1_points: number;
  entry_1_win: number;
  entry_1_draw: number;
  entry_1_loss: number;
  entry_1_total: number;
  entry_2_entry: number;
  entry_2_name: string;
  entry_2_player_name: string;
  entry_2_points: number;
  entry_2_win: number;
  entry_2_draw: number;
  entry_2_loss: number;
  entry_2_total: number;
  is_knockout: boolean;
  league: number;
  winner: number;
  seed_value: number | null;
  event: number;
  tiebreak: number | null;
  is_bye: boolean;
  knockout_name: string;
}

/**
 * Individual manager summary
 */
export interface ManagerSummary {
  id: number;
  joined_time: string;
  started_event: number;
  favourite_team: number;
  player_first_name: string;
  player_last_name: string;
  player_region_id: number;
  player_region_name: string;
  player_region_iso_code_short: string;
  player_region_iso_code_long: string;
  years_active: number;
  summary_overall_points: number;
  summary_overall_rank: number;
  summary_event_points: number;
  summary_event_rank: number;
  current_event: number;
  leagues: Leagues;
  name: string;
  name_change_blocked: boolean;
  entered_events: number[];
  kit: string;
  last_deadline_bank: number;
  last_deadline_value: number;
  last_deadline_total_transfers: number;
  cup_matches: CupMatch[];
}

export interface Transfer {
  element_in: number;
  element_in_cost: number;
  element_out: number;
  element_out_cost: number;
  entry: number;
  event: number;
  time: string; // ISO 8601 datetime format
}

interface CurrentEvent {
  event: number;
  points: number;
  total_points: number;
  rank: number;
  rank_sort: number;
  overall_rank: number;
  percentile_rank: number;
  bank: number;
  value: number;
  event_transfers: number;
  event_transfers_cost: number;
  points_on_bench: number;
}

interface PastSeason {
  season_name: string;
  total_points: number;
  rank: number;
}

interface UsedChip {
  name: string;
  time: string;
  event: number;
}

export interface ManagerHistory {
  current: CurrentEvent[];
  past: PastSeason[];
  chips: UsedChip[];
}

interface AutomaticSub {
  entry: number;
  element_in: number;
  element_out: number;
  event: number;
}

interface EntryHistory {
  event: number;
  points: number;
  total_points: number;
  rank: number;
  rank_sort: number;
  overall_rank: number;
  percentile_rank: number;
  bank: number;
  value: number;
  event_transfers: number;
  event_transfers_cost: number;
  points_on_bench: number;
}

export interface Pick {
  element: number;
  position: number;
  multiplier: number;
  is_captain: boolean;
  is_vice_captain: boolean;
  element_type: number;
}

export interface ManagerGameweekPicks {
  active_chip: null | string;
  automatic_subs: AutomaticSub[] | [];
  entry_history: EntryHistory;
  picks: Pick[];
}
