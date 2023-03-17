import { getPodcasts } from './services/api';

const podCastContainer: HTMLDivElement = document.querySelector(
  '.podcast-collection'
) as HTMLDivElement;

let i = 0;

function createInnerArticle() {
  const innerArticle = document.createElement('article');
  innerArticle.setAttribute('class', 'podcast');
  return innerArticle;
}

function createTextDiv() {
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'podcast__detailsContainer');
  return textDiv;
}

function createLink(url: string) {
  const linkPlacement = document.createElement('a');
  const linkText = document.createTextNode('Lyssna här');
  linkPlacement.setAttribute('href', url);
  linkPlacement.classList.add('podcast__programUrl');
  linkPlacement.appendChild(linkText);
  return linkPlacement;
}

function createImg(image: string) {
  const imgPlacement = document.createElement('IMG');
  imgPlacement.setAttribute('src', image);
  imgPlacement.setAttribute('width', '100');
  imgPlacement.setAttribute('height', '100');
  imgPlacement.classList.add('podcast__image');
  return imgPlacement;
}

function createP(description: string) {
  const descPlacement = document.createElement('p');
  const desc = document.createTextNode(description);
  descPlacement.classList.add('podcast__description');
  descPlacement.appendChild(desc);
  return descPlacement;
}

function createHeader(name: string) {
  const headerPlacement = document.createElement('h2');
  const programName = document.createTextNode(name);
  headerPlacement.classList.add('podcast__title');
  headerPlacement.appendChild(programName);
  return headerPlacement;
}

export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.forEach((podcast) => {
    i++;

    let innerArticle = createInnerArticle();
    let imgPlacement = createImg(podCasts[i].socialimage);
    let textDiv = createTextDiv();
    let headerPlacement = createHeader(podCasts[i].name);
    let descPlacement = createP(podCasts[i].description);
    let linkPlacement = createLink(podCasts[i].programurl);

    innerArticle.appendChild(imgPlacement);
    innerArticle.appendChild(textDiv);
    textDiv.appendChild(headerPlacement);
    textDiv.appendChild(descPlacement);
    textDiv.appendChild(linkPlacement);
    podCastContainer.appendChild(innerArticle);
  });
}

export default createHtml;
