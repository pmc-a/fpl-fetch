interface League {
    id: number;
    name: string;
    created: string;
    closed: boolean;
    rank: number | null;
    max_entries: number | null;
    league_type: string;
    scoring: string;
    admin_entry: number;
    start_event: number;
    code_privacy: string;
};

interface NewEntries {
    has_next: boolean;
    page: number;
    results: [];
};

interface LeagueEntry {
    id: number;
    event_total: number;
    player_name: string;
    rank: number;
    last_rank: number;
    total: number;
    entry: number;
    entry_name: string;
};

interface Standings {
    has_next: boolean;
    page: number;
    results: LeagueEntry[];
};

interface ClassicLeague {
    league: League;
    new_entries: NewEntries;
    standings: Standings;
};

export {
    ClassicLeague
};