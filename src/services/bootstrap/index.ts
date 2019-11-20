import Axios, { AxiosResponse } from 'axios';

import { Bootstrap } from './typings';

const fplBaseUrl = 'https://fantasy.premierleague.com/api';

export const fetchBootstrap = (): Promise<AxiosResponse<Bootstrap>> => {
    return Axios.get(`${fplBaseUrl}/bootstrap-static/`)
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            return null;
        });
};