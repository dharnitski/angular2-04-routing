import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{analytics}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;
  analytics: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParams.subscribe(
      (param: any) => this.analytics = param['analytics']
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
