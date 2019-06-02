import { Component } from '@angular/core';

// decorated with the component 
@Component({
  // selector is a tag in html 
  // e.g. <app-roo> is in index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //
  title = 'app';
}


// angular uses webpack (a module bundler) which injects the main.ts into the html
// angular.json contains the configuration for webpack