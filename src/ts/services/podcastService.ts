import axios from 'axios';
import { displayErrorMessage } from '../helpers/apiErrorMessage';
import type { IPodcast } from '../models/IPodcast';
import type { ISRResponse } from '../models/ISRResponse';

export async function getPodcastsFromAPI(): Promise<IPodcast[]> {
  const apiUrl: string = import.meta.env.VITE_API_URL as string;

  try {
    const response = await axios.get<ISRResponse>(apiUrl);
    return response.data.programs;
  } catch (error) {
    displayErrorMessage();
    console.log(error);
    return [];
  }
}
