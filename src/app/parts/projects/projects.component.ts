import { Component, OnInit } from '@angular/core';

export interface ProjectData {
  name: string,
  showcase: boolean,
  description: string,
  technologies: string[],
  image: string,
  link: string

}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList: ProjectData[] = [
    {
      name: "PopOver",
      showcase: true,
      description: "Designed and created a JavaScript web application using a MySQL database capable of handling thousands of simultaneous post requests.",
      technologies: ["Swift", "Firebase", "SQL", "HTML", "JavaScript"],
      image: "../../../assets/popover.png",
      link: "https://github.com/chris-a-porter/PopOver-Client"
    },
    {
      name: "UPS Safe",
      showcase: true,
      description: "Designed and created a JavaScript web application using a MySQL database capable of handling thousands of simultaneous post requests.",
      technologies: ["Node.js", "Express.js", "JavaScript", "MySQL", "AWS"],
      image: "../../../assets/ups_safe.png",
      link: "https://github.com/gpinkard/Safe-And-Sound"
    },
    {
      name: "Schedulizer",
      showcase: true,
      description: "Designed and created a scheduling application that would allow students at the University of Puget Sound to view and schedule their classes for the semester.",
      technologies: ["JavaScript", "HTML", "CSS", "Heroku"],
      image: "../../../assets/schedulizer.png",
      link: ""
    },
    {
      name: "Timber",
      showcase: false,
      description: "Designed and created a matching application using MySQL hosed on Amazon EC2.",
      technologies: ["MySQL", "PHP", "AWS"],
      image: "",
      link: ""
    },
    {
      name: "802.11 WiFi Network",
      showcase: false,
      description: "Built an 802.11 network from scratch using Java capable of sending and receiving encrypted messages using TCP and IP protocols.",
      technologies: ["Java"],
      image: "",
      link: ""
    },    
    {
      name: "AI Image Recognition",
      showcase: false,
      description: "Created an AI using Python and neural networks to detect up to 5 different objects within a given image.",
      technologies: ["Python", "Tensorflow", "Convolutional Neural Network"],
      image: "",
      link: ""
    },
    {
      name: "Getting MEAN",
      showcase: false,
      description: "Created a web application for locating and rating user submitted coffee shops based on Simon Holmes book Getting MEAN with Mongo, Express, Angular, and Node.",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
      image: "",
      link: ""
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
