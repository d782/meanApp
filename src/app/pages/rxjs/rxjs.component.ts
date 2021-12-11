import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry , take, map,filter} from 'rxjs/operators';
import { routes } from 'src/app/auth/auth.routing';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit,OnDestroy {

  public intervalSubs:Subscription;

  constructor() {
    
    /*this.retornaObservable().pipe(retry()).subscribe(
      val=>console.log(val),
      (err)=>{console.warn(err)},()=>{
        console.log('observer finished')
      }); */
      this.intervalSubs= this.retornaInterval().subscribe(val=>{
        console.log(val)
      });
   }

  ngOnInit(): void {
    
  }
  retornaInterval():Observable<number>{
    return interval(1000).pipe(map(item=>item+1),filter(item=>(item%2===0)?true:false),take(20));
    
  }

  retornaObservable():Observable<number>{
    let i=-1;

    const obs$=new Observable<number>((observer)=>{

      const interval=setInterval(()=>{
          i++;
          observer.next(i);

          if(i===4){
            clearInterval(interval);
            observer.complete();
          }
          if(i===2){
            observer.error('observer finished!')
          }
      }, 1000)
    });
    return obs$;
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();      
  }

}
