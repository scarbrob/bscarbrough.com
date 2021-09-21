import { Component, OnInit } from '@angular/core';

export interface ExperienceData {
  title: string,
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
      title: "Freelance",
      position: "Freelance",
      company: "",
      location: " - Tacoma WA",
      date: "May 2020 - Present",
      summary: "Designed, developed, and tested applications, scripts, and video game addons using my knowledge of the best coding practices in order to meet specific client needs.",
      description: ["Used Lua to create an in game addon to randomly select a form of transportation (mount) in World of Warcraft Classic.",
        "Created a script using Python to facilitate the procurement of a PlayStation 5 by automatically adding it to the cart, filling out the necessary forms, and checking out.",
        "Created an AI using YOLOv4 to automatically detect player and computer-controlled characters in the video game Escape from Tarkov."
      ]
    },
    {
      title: "PopOver",
      position: "Software Engineer",
      company: " - PopOver",
      location: " - Tacoma WA",
      date: "May 2019 - May 2020",
      summary: "Determined and formulated policies for the company’s technical direction. Created and integrated new and innovative features for the PopOver application.",
      description: ["Used Swift and wireframes to design and create the account creation, verification, login, and password reset forms from scratch.",
        "Created and administrated a Git repository and complex SQL database consisting of confidential client information.",
        "Assisted with the creation of various PowerPoint presentations and talking points in order to secure funding from potential investors through victory in various startup competitions.",
        "Led and assisted a team of software engineers in creating use cases for the application, and any operations issues they encountered."
      ]
    },
    {
      title: "University of Puget Sound",
      position: "Grounds Maintenance Worker",
      company: " - University of Puget Sound",
      location: " - Tacoma WA",
      date: "January 2018 - December 2019",
      summary: "Supported a campus wide improvement plan designed to create a safe, pleasant, and functional environment.",
      description: ["Led a team of student grounds workers in completing various grounds maintenance tasks.",
        "Acknowledged by the Grounds Manager as crucial to the success of the Grounds department due to great leadership, problem solving, and time management skills.",
        "Made on the fly decisions about which tasks to complete and how to meet deadlines for various campus events."
      ]
    },
    {
      title: "Brilliant Media Strategies",
      position: "Campaign Worker",
      company: " - Brilliant Media Strategies",
      location: " - Anchorage AK",
      date: "June 2018 - August 2018",
      summary: "Engaged in personal interaction with the public in support of a statewide ballot initiative.",
      description: ["Studied the objectives of the campaign to help develop public relations strategies that would influence public opinion.",
        "Responded to requests for information from the public or designated an appropriate spokesperson or information source.",
        "Provided technical support for the distribution and procurement of campaign materials."
      ]
    },
    {
      title: "State of Alaska Department of Transportation",
      position: "Highway Traffic Data Researcher",
      company: " - State of Alaska Department of Transportation",
      location: " - Anchorage AK",
      date: "May 2018 - August 2018",
      summary: "Collected data from over 800 individual road segments in support of a multi-million-dollar statewide initiative to maintain and upgrade road infrastructure.",
      description: ["Chose to take on a leadership role and successfully led my group to complete the most work of any prior group of interns.",
        "Vital in meeting the State of Alaska’s data collection goals during a time when the department was short staffed.",
        "Reduced workload for the full-time staff by excelling at my duties and taking on extra tasks and responsibilities."
      ]
    },
    {
      title: "Credit Union 1",
      position: "Member Service Representative",
      company: " - Credit Union 1",
      location: " - Anchorage AK",
      date: "May 2017 - August 2017",
      summary: "Interacted with credit union members over the phone to provide exceptional support for membership and all products and services.",
      description: [
        "Utilized the credit unions' computer system to update information and post deposits/payments, as well as provide members with account history information, explanations of dividend interest calculations, and loan payment amortization.",
        "Assisted new and existing members in initiation, maintenance, and closure of credit union products and services, explained the features and benefits of each and cross sold the products and services to the members.",
        "Resolved members' product or service complaints by performing activities such as backdating payments, adjusting fees, or connecting them with a specific department.",
        "Filled out and emailed or faxed forms to members in order to provide in person services over the phone."

      ]
    },
    {
      title: "Credit Union 1",
      position: "Teller",
      company: " - Credit Union 1",
      location: " - Anchorage AK",
      date: "May 2015 - August 2015, May 2016 - August 2016",
      summary: "Interacted with credit union members in person to provide exceptional support for all types of currency transactions.",
      description: ["Responsible for the safety, accuracy, and handling of up to 1 million USD on any given day.",
        "Ensured the accuracy of all member transactions through the use of computers, calculators, and adding machines.",
        "Cashed and deposited checks after verifying the signature was correct, the written and numerical amounts agreed, and ensuring the accounts had sufficient funds.",
        "Counted the total currency, coins, and checks received by the branch, either by hand or using a currency-counting machine, to prepare them for deposit or shipment to other CU1 branches or the Federal Reserve Bank.",
        "Balanced the currency, coin, and checks in my cash drawer at the end of each shift."
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
