import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  technologies = ["Java", "Python", "JavaScript", "Angular", "SQL", "HTML", "CSS", "OOP", "Node.js",
    "Express.js", "AWS", "Full Stack Development", "Driven", "Innovative", "Strategic", "Curious", "Proactive", "Analytical",
    "Interpersonal Skills", "Collaborative Team Player", "Problem Solving", "Critical Thinking", "Creative Thinking", "Multitasking",
    "Priority Management", "Detail Oriented", "Spanish Fluency", "Microsoft Office"]

  my_image = "../../../assets/Ben_Mount Taranaki.png";
  ups_link = "https://www.pugetsound.edu";
  covid_link = "https://www.cdc.gov/coronavirus/2019-nCoV/index.html";
  twitch_image = "../../../assets/Twitch logo.png";
  twitch_link = "https://www.twitch.tv/";
  github_image = "../../../assets/Github logo.png";
  github_link = "https://github.com/scarbrob";
  linkedin_image = "../../../assets/LinkedIn logo.png";
  linkedin_link = "https://www.linkedin.com/in/bescarbrough/";
  gmail_image = "../../../assets/Gmail logo.png";
  gmail_link = "mailto:Scarbrough.Benjamin@gmail.com";

  constructor() { }

  ngOnInit(): void {
  }

}
