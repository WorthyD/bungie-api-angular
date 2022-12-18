import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Configuration, ConfigurationParameters } from 'projects/bungie-api-angular/src/lib/configuration';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ApiModule } from 'projects/bungie-api-angular/src/lib/api.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from './apikey.interceptor';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    credentials: {
      apiKey: environment.apiKey
    },
    
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ApiModule.forRoot(apiConfigFactory)],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
