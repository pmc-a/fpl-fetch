import Axios, { AxiosResponse } from 'axios';

import { ClassicLeague } from './typings';

const fplBaseUrl = 'https://fantasy.premierleague.com/api';

export const fetchClassicLeague = (leagueId: number): Promise<AxiosResponse<ClassicLeague>> => {
    return Axios.get(`${fplBaseUrl}/leagues-classic/${leagueId}/standings/`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(error);
        });
};