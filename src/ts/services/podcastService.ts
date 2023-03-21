import axios from 'axios';
import type { IPodcast } from '../models/IPodcast';
import type { ISRResponse } from '../models/ISRResponse';

export async function getPodcastsFromAPI(): Promise<IPodcast[]> {
  const apiKey = import.meta.env.VITE_API_KEY;

  try {
    const response = await axios.get<ISRResponse>(apiKey);
    return response.data.programs;
  } catch (error) {
    console.error('nått blev fel:', error);
    return [];
  }
}
