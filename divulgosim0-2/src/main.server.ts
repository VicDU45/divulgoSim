import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/site/app.component';
import { config } from './app/site/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
