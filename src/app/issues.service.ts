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

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date(),
    };
    const index = this.issue.findIndex((i) => i === issue);
    this.issue[index] = selectedIssue;
  }

  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return this.issue.filter((issue) => issue.title.indexOf(title) !== -1);
    }
    return [];
  }

  updateIssue(issueNo: number, issue: Issue) {
    const existingIssue = this.issue.find((i) => i.issueNo === issueNo);
    if (existingIssue) {
      const index = this.issue.indexOf(existingIssue);
      this.issue[index] = {
        ...existingIssue,
        ...issue,
      };
    }
  }
}
