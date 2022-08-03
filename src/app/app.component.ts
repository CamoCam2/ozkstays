import {Component, ViewChild} from '@angular/core';
import {IonMenu} from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('menu') menu: IonMenu;
  public appPages = [
    { title: 'Properties', url: 'properties', icon: 'home' },
    { title: 'About Us', url: 'about', icon: 'book' },
    { title: 'Contact Us', url: 'contact', icon: 'mail' },
  ];
  menuVisible = false;

  constructor() {}

}
