import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export class ProjectDto {
  id: string;
  title: string;
  codelink: string;
  examplelink: string;
  text: string;
  image: string;
  codeclicks: number;
  exampleclicks: number;
}

@Component({
  selector: 'app-portfolio-project-preview',
  templateUrl: './portfolio-project-preview.component.html',
  styleUrls: ['./portfolio-project-preview.component.css']
})
export class PortfolioProjectPreviewComponent implements OnInit {

  expanded = false;
  @Input() project: ProjectDto;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggleExpanded() {
    if (this.expanded) { this.expanded = false; } else { this.expanded = true; }
  }

  goToLink(link: string) {
    this.router.navigateByUrl(link);
  }
}
