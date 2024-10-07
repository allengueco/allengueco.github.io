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
        company: 'BNY Mellon | Pershing',
        duration: '2020 — 2024',
        summary: "Built, maintained, and improved critical Spring Boot applications for the Pershing Architecture team. " +
            "Designed Angular applications for both internal and client-facing tools. " +
            "Worked in Agile-based development teams with members located across US and India. " +
            "Containerized applications using Docker for deploying on-prem. ",
        skills: [
          "Java", "Spring Boot", "Angular", "Docker", "CI/CD", "TypeScript"
        ]
      },
      {
        title: "EDI Intern",
        company: "AmerisourceBergen Corporation (now Cencora)",
        duration: '2020 — 2020',
        summary: "",
        skills: [
          "MuleSoft", "PL/SQL", "API"
        ]
      }
    ]
  }
}
