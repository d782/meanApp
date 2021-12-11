import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit,OnDestroy {
  subs:Subscription;

  public title:string="";
  constructor(private router:Router) {
    this.subs=this.getParams().subscribe(
      event=>{
        let {titulo}=event;
        this.title=titulo;
        document.title=this.title;
      }
    );
   }

  ngOnInit(): void {
  }

  getParams(){
    return this.router.events.pipe(filter((event:any)=>event instanceof ActivationEnd),
    filter((event:ActivationEnd)=>event.snapshot.firstChild===null),
    map((event:ActivationEnd)=>event.snapshot.data))
  }
  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

}
