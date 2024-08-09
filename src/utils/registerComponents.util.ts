import { App } from 'vue';
import PrimeVue from 'primevue/config';
import Preset from '@/presets';

import '@/assets/css/main.css';

const registerComponents = (app: App): void => {
  app.use(PrimeVue, {
    unstyled: true,
    pt: Preset,
  });
};

export default registerComponents;
