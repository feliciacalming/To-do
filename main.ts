import './src/scss/main.scss';
import { createHtmlForPodcasts } from './src/ts/createHtml';
import { log } from './src/ts/helpers/log';
import { getColorModeBtn } from './src/ts/helpers/toggleColorMode';

function init(): void {
  void createHtmlForPodcasts();
  getColorModeBtn();

  log('this message will be displayed in the console when DEBUGGING = true in .env');
}

init();
