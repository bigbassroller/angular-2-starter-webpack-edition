import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';

@Component({
  selector: 'about',
  templateUrl: 'src/app/about/about.component.html'
})
export class About {
  title: string = 'About';
  data = {};

  constructor(public http: Http) { }

  ngOnInit() {

    this.http.get('/about.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
