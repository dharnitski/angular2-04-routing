import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
    `
})
export class UserComponent {
  constructor(private router: Router){}

  onNavigate(){
    this.router.navigate(['/']);
  }
}
