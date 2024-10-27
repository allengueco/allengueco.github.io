import { Component } from '@angular/core';
import { Experience } from './experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: 'experience.component.html',
})
export class ExperienceComponent {
  experiences: Experience[]

  constructor() {
    this.experiences = [
      {
        title: 'Senior Associate, Full Stack Engineer',
        company: 'BNY Mellon',
        duration: '2020 — 2024',
        summary: "Built, maintained, and improved critical Spring Boot applications for the Architecture team. " +
          "Designed Angular applications for both internal tools and client-facing components. " +
          "Worked in Agile teams with members located across US and India. " +
          "Containerized frontend and backend applications using Docker for deploying on-prem. ",
        skills: [
          "Java", "Spring Boot", "Angular", "Docker", "TypeScript"
        ]
      },
      {
        title: "EDI Intern",
        company: "Cencora",
        duration: "Summer \'19",
        summary: "Developed an internal tool for the Electronic Data Interchange (EDI) team to ensure data integrity for b2b transactions. " +
          "Designed APIs through MuleSoft to provide a RESTful service for the team. " +
          "Created an Oracle PL/SQL procedure that emails a report based on an ad-hoc query.",
        skills: [
          "MuleSoft", "PL/SQL", "API"
        ]
      }
    ]
  }
}
