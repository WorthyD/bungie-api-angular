import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Configuration, ConfigurationParameters } from 'projects/bungie-api-angular/src/lib/configuration';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ApiModule } from 'projects/bungie-api-angular/src/lib/api.module';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    credentials: {
      apiKey: environment.apiKey
    }
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApiModule.forRoot(apiConfigFactory) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
