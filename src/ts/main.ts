import { createHtml } from './createHtml';
import { toggleLightMode } from './toggleDarkmode';

function init(): void {
  toggleLightMode();
  void createHtml();
}

init();
