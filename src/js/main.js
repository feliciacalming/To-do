import { createHtml } from './createHtml';
import { toggleLightMode } from './toggleDarkmode';

function init() {
  toggleLightMode();
  createHtml();
}

init();
