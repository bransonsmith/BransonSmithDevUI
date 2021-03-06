import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDto, ProjectService } from '../../_services/project.service';

@Component({
  selector: 'app-portfolio-project-preview',
  templateUrl: './portfolio-project-preview.component.html',
  styleUrls: ['./portfolio-project-preview.component.css']
})
export class PortfolioProjectPreviewComponent implements OnInit {

  expanded = false;
  @Input() project: ProjectDto;

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  toggleExpanded() {
    if (this.expanded) { this.expanded = false; } else { this.expanded = true; }
  }

  goToLink(link: string) {
    this.router.navigateByUrl(link);
  }

  incCount(field) {
    this.projectService.incClick(this.project.id, field).subscribe();
    if (field === 'code') {
      this.router.navigateByUrl(this.project.codelink);
    }
    if (field === 'demo') {
      this.router.navigateByUrl(this.project.examplelink);
    }
  }

  updateProject() {
    // const updatedProj: ProjectDto = {
    //   id: this.project.id,
    //   title: 'Career',
    //   codelink: this.project.codelink,
    //   examplelink: this.project.examplelink,
    //   text: 'Here is some sample text about my wonderful career...',
    //   image: this.project.image,
    //   codeclicks: this.project.codeclicks,
    //   exampleclicks: this.project.exampleclicks
    // };
    // this.projectService.updateProject(updatedProj).subscribe(
    //   proj => console.log(proj)
    // );
  }
}
