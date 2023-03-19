import axios, { AxiosResponse } from 'axios';
import { IPodcast } from '../models/IPodcast';
import { ISRResponse } from '../models/ISRResponse';

export async function getPodcastsFromAPI(): Promise<IPodcast[]> {
  try {
    const response: AxiosResponse<ISRResponse> = await axios.get<ISRResponse>(
      'https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false'
    );
    return response.data.programs;
  } catch (error) {
    console.error('nått blev fel:', error);
    return [];
  }
}

export default getPodcastsFromAPI;
