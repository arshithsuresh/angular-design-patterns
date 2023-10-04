import { AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';
import { ReferencedComponent } from '../abstract/referenced.component';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent implements OnInit, AfterViewInit {
  @ContentChild(ReferencedComponent)
  component2ref: ReferencedComponent | null = null;
  constructor() {}
  ngAfterViewInit(): void {
    console.log('From component 1');
    this.component2ref?.someCommFunction();
  }

  ngOnInit(): void {}
}
