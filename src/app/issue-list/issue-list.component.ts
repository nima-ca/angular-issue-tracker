import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';

import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;
  selectedIssue: Issue | null = null;
  editIssue: Issue | null = null;

  constructor(private issueService: IssuesService) {}

  getIssues(): void {
    this.issues = this.issueService.getPendingIsssues();
  }

  ngOnInit(): void {
    this.getIssues();
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  onCloseEdit() {
    this.editIssue = null;
    this.getIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }
}
