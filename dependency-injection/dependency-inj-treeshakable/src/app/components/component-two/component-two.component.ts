import { Component, OnInit } from '@angular/core';
import { ReferencedComponent } from '../abstract/referenced.component';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
  providers: [
    {
      provide: ReferencedComponent,
      useClass: ComponentTwoComponent,
    },
  ],
})
export class ComponentTwoComponent
  extends ReferencedComponent
  implements OnInit
{
  constructor() {
    super();
  }
  someCommFunction() {
    console.log('Ayyy!');
    return 'Heyyy!!, I can do this too!';
  }

  ngOnInit(): void {}
}
