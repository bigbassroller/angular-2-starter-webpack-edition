import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {XLarge} from './components/x-large.component.ts';
import {Home} from './home/home.component';
import {About} from './about/about.component';
import {Portfolio} from './portfolio/portfolio.component';

@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge
  ],
  styleUrls: ['dist/client/so-much-style.min.css'],
  templateUrl: 'src/app/app.component.html'
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/portfolio', component: Portfolio, name: 'Portfolio' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  title: string = 'ftw';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);

    this.http.get('/app.json')
      .subscribe(res => {
        this.data = res.json();
      });

     this.http.get('/about.json')
      .subscribe(res => {
        this.data = res.json();
      });

  }

}
