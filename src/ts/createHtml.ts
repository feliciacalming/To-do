import { IPodcast } from './models/IPodcast';
import { getPodcasts } from './services/api';

const podcastContainer: HTMLDivElement = document.querySelector(
  '.podcast-collection'
) as HTMLDivElement;

function createInnerArticle() {
  const innerArticle: HTMLElement = document.createElement('article');
  innerArticle.setAttribute('class', 'podcast');
  return innerArticle;
}

function createTextDiv() {
  const textDiv: HTMLDivElement = document.createElement('div');
  textDiv.setAttribute('class', 'podcast__detailsContainer');
  return textDiv;
}

function createLink(url: string) {
  const linkPlacement: HTMLAnchorElement = document.createElement('a');
  const linkText: Text = document.createTextNode('Lyssna här');
  linkPlacement.setAttribute('href', url);
  linkPlacement.classList.add('podcast__programUrl');
  linkPlacement.appendChild(linkText);
  return linkPlacement;
}

function createImg(image: string) {
  const imgPlacement: HTMLImageElement = document.createElement('img');
  imgPlacement.setAttribute('src', image);
  imgPlacement.setAttribute('width', '100');
  imgPlacement.setAttribute('height', '100');
  imgPlacement.classList.add('podcast__image');
  return imgPlacement;
}

function createP(description: string) {
  const descPlacement: HTMLParagraphElement = document.createElement('p');
  const desc: Text = document.createTextNode(description);
  descPlacement.classList.add('podcast__description');
  descPlacement.appendChild(desc);
  return descPlacement;
}

function createHeader(name: string) {
  const headerPlacement: HTMLHeadingElement = document.createElement('h2');
  const programName: Text = document.createTextNode(name);
  headerPlacement.classList.add('podcast__title');
  headerPlacement.appendChild(programName);
  return headerPlacement;
}

export async function createHtml() {
  const podcasts: IPodcast[] = await getPodcasts();
  podcasts.forEach((podcast) => {
    let innerArticle: HTMLElement = createInnerArticle();
    let imgPlacement: HTMLImageElement = createImg(podcast.socialimage);
    let textDiv: HTMLDivElement = createTextDiv();
    let headerPlacement: HTMLHeadingElement = createHeader(podcast.name);
    let descPlacement: HTMLParagraphElement = createP(podcast.description);
    let linkPlacement: HTMLAnchorElement = createLink(podcast.programurl);

    innerArticle.appendChild(imgPlacement);
    innerArticle.appendChild(textDiv);
    textDiv.appendChild(headerPlacement);
    textDiv.appendChild(descPlacement);
    textDiv.appendChild(linkPlacement);
    podcastContainer.appendChild(innerArticle);
  });
}

export default createHtml;
