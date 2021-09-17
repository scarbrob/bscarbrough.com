import { Component, OnInit } from '@angular/core';


export interface ExperienceData {
  position: string,
  company: string,
  location: string,
  date: string,
  summary: string,
  description: string[]
}


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workExperience: ExperienceData[] = [
    {
      position: "Software Engineer",
      company: "PopOver",
      location: "Tacoma WA",
      date: "May 2019 - May 2020",
      summary: "Determined and formulated policies for the company’s technical direction. Created and integrated new and innovative features for the PopOver application.",
      description: ["Used Swift and wireframes to design and create the account creation, verification, login, and password reset forms from scratch.", 
      "Created and administrated a Git repository and complex SQL database consisting of confidential client information.",
      "Assisted with the creation of various PowerPoint presentations and talking points in order to secure funding from potential investors through victory in various startup competitions.",
      "Led and assisted a team of software engineers in creating use cases for the application, and any operations issues they encountered."
    ]
    },
    {
      position: "Grounds Maintenance Worker",
      company: "University of Puget Sound",
      location: "Tacoma WA",
      date: "January 2018 - December 2019",
      summary: "Supported a campus wide improvement plan designed to create a safe, pleasant, and functional environment.",
      description: ["Led a team of student grounds workers in completing various grounds maintenance tasks.", 
      "Acknowledged by the Grounds Manager as crucial to the success of the Grounds department due to great leadership, problem solving, and time management skills.",
      "Made on the fly decisions about which tasks to complete and how to meet deadlines for various campus events."
    ]
    },
    {
      position: "Highway Traffic Data Researcher",
      company: "State of Alaska Department of Transportation",
      location: "Anchorage AK",
      date: "May 2018 - August 2018",
      summary: "Collected data from over 800 individual road segments in support of a multi-million-dollar statewide initiative to maintain and upgrade road infrastructure.",
      description: ["Chose to take on a leadership role and successfully led my group to complete the most work of any prior group of interns.", 
      "Vital in meeting the State of Alaska’s data collection goals during a time when the department was short staffed.",
      "Reduced workload for the full-time staff by excelling at my duties and taking on extra tasks and responsibilities."
    ]
    },
    {
      position: "Member Service Representative & Teller",
      company: "Credit Union 1",
      location: "Anchorage AK",
      date: "May 2019 - May 2020",
      summary: "Interacted with credit union members in person and over the phone to provide exceptional support for all products and services, as well as resolve any banking related issues.",
      description: ["Responsible for the safety, accuracy, and handling of up to 1 million USD on any given day.", 
      "Ensured the accuracy of all types of member transactions, including payments on home and auto loans.",
      "Sold loans, money orders, and account upgrades to new and existing credit union members."
    ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
