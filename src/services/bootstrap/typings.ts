interface TopElementInfo {
    id: number;
    points: number;
};

interface Chip {
    chip_name: string;
    num_played: number;
};

interface Event {
    id: number;
    name: string;
    deadline_time: string;
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
    chip_plays: Chip[];
    most_selected: number;
    most_transferred_in: number;
    top_element: number;
    top_element_info: TopElementInfo;
    transfers_made: number;
    most_captained: number;
    most_vice_captained: number;
};

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
    squad_squadplay: number;
    squad_squadsize: number;
    squad_team_limit: number;
    squad_total_spend: number;
    ui_currency_multiplier: number;
    ui_use_special_shirts: boolean;
    ui_special_shirt_exclusions: [];
    stats_form_days: number;
    sys_vice_captain_enabled: boolean;
    transfers_sell_on_fee: number;
    cup_start_event_id: number;
    timezone: string;
};

interface Phase {
    id: number;
    name: string;
    start_event: number;
    stop_event: number;
};

interface Team {
    code: number;
    draw: number;
    form: number | null;
    id: number;
    loss: number;
    name: string;
    played: number;
    points: number;
    position: number;
    short_name: string;
    strength: number;
    team_division: number | null;
    unavailable: boolean;
    win: number;
    strength_overall_home: number;
    strength_overall_away: number;
    strength_attack_home: number;
    strength_attack_away: number;
    strength_defence_home: number;
    strength_defence_away: number;
};

interface Element {
    chance_of_playing_next_round: boolean | null;
    chance_of_playing_this_round: boolean | null;
    code: number;
    cost_change_event: number;
    cost_change_event_fall: number;
    cost_change_start: number;
    cost_change_start_fall: number;
    dreamteam_count: number;
    element_type: number;
    ep_next: string;
    ep_this: string;
    event_points: number;
    first_name: string;
    form: string;
    id: number;
    in_dreamteam: boolean;
    news: string;
    news_added: boolean | null;
    now_cost: number;
    photo: string;
    points_per_game: string;
    second_name: string;
    selected_by_percent: string;
    special: boolean;
    squad_number: number | null;
    status: string;
    team: number;
    team_code: number;
    total_points: number;
    transfers_in: number;
    transfers_in_event: number;
    transfers_out: number;
    transfers_out_event: number;
    value_form: string;
    value_season: string;
    web_name: string;
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
}

interface ElementStat {
    label: string;
    name: string;
};

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
    sub_positions_locked: [];
};

interface Bootstrap {
    events: Event[];
    game_settings: GameSettings;
    phases: Phase[];
    teams: Team[];
    total_players: number;
    elements: Element[];
    element_stats: ElementStat[];
    element_types: ElementType[];
};

export {
    Bootstrap,
};
