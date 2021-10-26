import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

export interface ProjectData {
  name: string,
  description: string,
  technologies: string[],
  image: string,
  link: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [NgbCarouselConfig]
})

export class ProjectsComponent implements OnInit {

  projectFeatured: ProjectData[] = [
    {
      name: "PopOver",
      description: "Brainstormed, created, and tested an IOS application designed to facilitate work relationships between college students and their community members, providing every college student with an opportunity for financial liberation. (Git repository is currently private)",
      technologies: ["Swift", "Firebase", "SQL", "HTML", "JavaScript"],
      image: "../../../assets/popover.png",
      link: "https://github.com/chris-a-porter/PopOver-Client"
    },
    {
      name: "UPS Safe",
      description: "Designed, created, and stress-tested a JavaScript web application responsible for ensuring that in the event of a campus-wide emergency all university students and faculty can check in with campus security while both on and off-campus.",
      technologies: ["Node.js", "Express.js", "JavaScript", "MySQL", "AWS", "BlazeMeter"],
      image: "../../../assets/ups_safe.png",
      link: "https://github.com/gpinkard/Safe-And-Sound"
    },
    {
      name: "Schedulizer",
      description: "Designed and created a scheduling application to improve the current way that students at the University of Puget Sound to view and schedule their classes for the semester.",
      technologies: ["JavaScript", "HTML", "CSS", "Heroku"],
      image: "../../../assets/schedulizer.png",
      link: "https://github.com/scarbrob/Schedulizer"
    }
  ]

  projectNotFeatured: ProjectData[] = [
    {
      name: "Timber",
      description: "Designed and created an application that allows users to submit profiles of trees (image, name, description, and geo-coordinates) and match with profiles submitted by other users.",
      technologies: ["MySQL", "PHP", "AWS"],
      image: "",
      link: "https://github.com/sarawille7/timber"
    },
    {
      name: "802.11 WiFi Network",
      description: "Built an 802.11 network capable of sending and receiving encrypted messages using TCP and IP protocols from scratch using Java.",
      technologies: ["Java"],
      image: "",
      link: "https://github.com/trwinquist/802.11-Project"
    },
    {
      name: "AI Image Recognition",
      description: "An AI created using Python and neural networks to detect up to 5 different objects within a given image.",
      technologies: ["Python", "Tensorflow", "Convolutional Neural Network"],
      image: "",
      link: "https://github.com/scarbrob/Image-Recognition"
    },
    {
      name: "Getting MEAN",
      description: "A web application for locating and rating user-submitted coffee shops, based on Simon Holmes book Getting MEAN with Mongo, Express, Angular, and Node.",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
      image: "",
      link: "https://github.com/scarbrob/Getting-MEAN"
    },
    {
      name: "Bitwise Hash",
      description: "A Java program for converting a user-inputted string into binary.",
      technologies: ["Java"],
      image: "",
      link: "https://github.com/scarbrob/Bitwise-Hash"
    },
    {
      name: "Binomial Calculator",
      description: "A Java program that calculates the binomial coefficient of two user-inputted numbers.",
      technologies: ["Java"],
      image: "",
      link: "https://github.com/scarbrob/Binomial-Calculator"
    },
    {
      name: "Word Checker - Binary Search Tree",
      description: "A Java program that uses a BST to search for user input within a given .lex file.",
      technologies: ["Java"],
      image: "",
      link: "https://github.com/scarbrob/Word-Checker-BST"
    },
    {
      name: "Word Checker - Trie",
      description: "A Java program that uses a Trie to search for user input within a given .trie file in constant time.",
      technologies: ["Java"],
      image: "",
      link: "https://github.com/scarbrob/Word-Checker-Trie"
    },
    {
      name: "Word Checker - TreeSet",
      description: "A Java program that uses a Set to search for user input within a given .set file in logarithmic time.",
      technologies: ["Java"],
      image: "",
      link: "https://github.com/scarbrob/Word-Checker"
    },
    {
      name: "Sliding Puzzle Solver",
      description: "A Python program that uses the A* algorithm to solve sliding puzzles.",
      technologies: ["Python"],
      image: "",
      link: "https://github.com/scarbrob/Sliding-Puzzle-Solver"
    },
    {
      name: "Connect Four Bot",
      description: "A Python bot that plays connect four at a user-defined difficulty. I bet you can't beat it!",
      technologies: ["Python"],
      image: "",
      link: "https://github.com/scarbrob/Connect-Four-Bot"
    },
    {
      name: "Voting Predictor",
      description: "A Python program that uses a decision tree and TSV data file to predict how representatives will vote.",
      technologies: ["Python"],
      image: "",
      link: "https://github.com/scarbrob/Voting-Predictor"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
