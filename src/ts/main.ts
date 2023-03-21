import { createHtml } from './createHtml';
import { log } from './helpers/log';
import { toggleLightMode } from './toggleDarkmode';

function init(): void {
  toggleLightMode();
  void createHtml();

  log('this message will be displayed in the console when DEBUGGING = true in .env');
}

init();
