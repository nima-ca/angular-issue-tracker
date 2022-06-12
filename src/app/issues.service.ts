import { Injectable } from '@angular/core';

import { Issue } from './issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issue: Issue[] = issues;

  constructor() {}

  getPendingIsssues(): Issue[] {
    return this.issue.filter((issue) => !issue.completed);
  }

  createIssue(issue: Issue): void {
    issue.issueNo = Math.floor(Math.random() * 100000000);
    this.issue.push(issue);
  }
}
