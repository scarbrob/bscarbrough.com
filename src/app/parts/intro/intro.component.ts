import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit {

  rocket_gif = "../../../assets/rocket.gif";
  rocket_link = "https://www.rocketlaunch.live/";

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 2,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'linear'
  };

  constructor() { }

  ngOnInit(): void {
  }

};