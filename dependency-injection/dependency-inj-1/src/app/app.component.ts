import { Component, Inject, OnInit } from '@angular/core';
import { IloggerService } from './services/loggers/ilogger.service';
import LOGGER_TOKEN from './tokens/logger.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dependency-inj-1';
  constructor(@Inject(LOGGER_TOKEN) private logger: IloggerService) {}
  ngOnInit(): void {
    this.logger.infoLog(0, 'TEST');
  }
}
