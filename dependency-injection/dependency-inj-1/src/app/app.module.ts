import { Inject, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import LOGGER_TOKEN from './tokens/logger.token';
import { ConsoleLoggerService } from './services/loggers/console-logger.service';
import { APP_CONFIG } from './tokens/app-config.token';
import { AppConfig } from './constants/app-config';
import { FileLoggerService } from './services/loggers/file-logger.service';
import { LOG_DEPS, LOG_FACTORY } from './services/loggers/log.factory';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    {
      provide: LOGGER_TOKEN,
      useFactory: LOG_FACTORY,
      deps: LOG_DEPS,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
