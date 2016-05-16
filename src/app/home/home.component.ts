import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: 'src/app/home/home.component.html'
})
export class Home {
  title: string = 'Home';
}