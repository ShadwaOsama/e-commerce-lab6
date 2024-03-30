import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications:string[]

  constructor() {
    this.notifications=[
      'You have unread messages',
      'people reacting to your post',
      'hamada sent you a friend request',
      // '',
      'post shared successfuly',
    ]
  }
  getNotifications():Observable<string>{
    return from(this.notifications);
    // return new Observable<string>((observer)=>{
    //   let counter=0
    //   let notificationInterval=setInterval(()=>{
    //     // console.log("test");
    //     if(counter==this.notifications.length){
    //       observer.complete()
    //     }
    //     if(this.notifications[counter]==""){
    //       observer.error("this notification is empty")
    //     }
    //     observer.next(this.notifications[counter])
    //     counter++
    //   },2000)
    //   return{
    //     unsubscribe:()=>{
    //       clearInterval(notificationInterval)
    //     }
    //   }
    // })
  }
}
