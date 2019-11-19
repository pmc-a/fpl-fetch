import Axios, { AxiosResponse } from 'axios';

declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> {}
}

interface ITopElementInfo {
    id: number;
    points: number;
};

interface IChip {
    chip_name: string;
    num_played: number;
};

interface IEvent {
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
    chip_plays: IChip[];
    most_selected: number;
    most_transferred_in: number;
    top_element: number;
    top_element_info: ITopElementInfo;
    transfers_made: number;
    most_captained: number;
    most_vice_captained: number;
}

// TODO: Define remaining interfaces
interface IBootstrap {
    events: IEvent[];
    game_settings: any;
    phases: any;
    teams: any;
    total_players: number;
    elements: any;
    element_stats: any;
    element_types: any;
};

const fplBaseUrl = 'https://fantasy.premierleague.com/api';

export const fetchBootstrap = (): Promise<AxiosResponse<IBootstrap>> => {
    return Axios.get(`${fplBaseUrl}/bootstrap-static/`)
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            return null;
        });
};
