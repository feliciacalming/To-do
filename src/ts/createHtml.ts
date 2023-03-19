import { IPodcast } from './models/IPodcast';
import { getPodcastsFromAPI } from './services/podcastService';

const podcastWrapper: HTMLDivElement = document.querySelector(
  '.podcast-collection'
) as HTMLDivElement;

function createPodcastContainer() {
  const podcast: HTMLElement = document.createElement('article');
  podcast.classList.add('podcast');
  return podcast;
}

function createTextContainer() {
  const detailsContainer: HTMLDivElement = document.createElement('div');
  detailsContainer.classList.add('podcast__detailsContainer');
  return detailsContainer;
}

function createTitle(podTitle: string) {
  const title: HTMLHeadingElement = document.createElement('h2');
  title.classList.add('podcast__title');
  title.innerText = podTitle;
  return title;
}

function createDescription(desc: string) {
  const description: HTMLParagraphElement = document.createElement('p');
  description.classList.add('podcast__description');
  description.innerText = desc;
  return description;
}

function createProgramUrl(url: string) {
  const programUrl: HTMLAnchorElement = document.createElement('a');
  programUrl.setAttribute('href', url);
  programUrl.classList.add('podcast__programUrl');
  programUrl.innerText = 'Lyssna här';
  return programUrl;
}

function createImage(imageUrl: string) {
  const image: HTMLImageElement = document.createElement('img');
  image.setAttribute('src', imageUrl);
  image.classList.add('podcast__image');
  return image;
}

export async function createHtml() {
  const podcasts: IPodcast[] = await getPodcastsFromAPI();
  podcasts.forEach((pod) => {
    let podcast: HTMLElement = createPodcastContainer();
    let image: HTMLImageElement = createImage(pod.socialimage);
    let detailsContainer: HTMLDivElement = createTextContainer();
    let title: HTMLHeadingElement = createTitle(pod.name);
    let description: HTMLParagraphElement = createDescription(pod.description);
    let programUrl: HTMLAnchorElement = createProgramUrl(pod.programurl);

    podcast.appendChild(image);
    podcast.appendChild(detailsContainer);
    detailsContainer.appendChild(title);
    detailsContainer.appendChild(description);
    detailsContainer.appendChild(programUrl);
    podcastWrapper.appendChild(podcast);
  });
}

export default createHtml;
