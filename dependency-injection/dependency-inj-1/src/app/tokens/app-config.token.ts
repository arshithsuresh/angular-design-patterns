import { InjectionToken } from '@angular/core';
import { IAppConfig } from '../interfaces/iapp-config';

export var APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
