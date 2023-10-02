import { Injector } from '@angular/core';
import { APP_CONFIG } from 'src/app/tokens/app-config.token';
import { ConsoleLoggerService } from './console-logger.service';
import { FileLoggerService } from './file-logger.service';

export function LOG_FACTORY(injector: Injector) {
  let appConfig = injector.get(APP_CONFIG);
  if (appConfig.environment === 'production') {
    return new ConsoleLoggerService();
  } else {
    return new FileLoggerService();
  }
}

export const LOG_DEPS = [Injector];
