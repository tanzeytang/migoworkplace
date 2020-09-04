import { Component } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  darkTheme = false;
  constructor(private oc: OverlayContainer){
    
  }

  switchTheme(checked: boolean){
    this.darkTheme = checked;
    this.oc.getContainerElement().className = checked ? 'myapp-dark-theme' : null;
  }
}
