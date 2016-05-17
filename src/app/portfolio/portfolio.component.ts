import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';

@Component({
  selector: 'portfolio',
  templateUrl: 'src/app/portfolio/portfolio.component.html'
})
export class Portfolio {
  title: string = 'Portfolio';
  data = {};

  constructor(public http: Http) { }

  ngOnInit() {

    this.http.get('/portfolio.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}