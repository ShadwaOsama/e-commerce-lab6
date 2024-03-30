import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Subscription ,map} from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  notifications: string[] = [];
  subscription!: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.subscription = this.notificationService.getNotifications().pipe(
      filter(notification => notification.startsWith('hamada'))
    ).subscribe({
      next: (notification) => {
        this.notifications.push(notification + ' shadwa');
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Notification stream completed successfully');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}





// export class HomeComponent implements OnInit,OnDestroy{
//   subscribtion!:Subscription;
//   constructor(private _NotificationSer:NotificationService){

//   }
//   ngOnInit(): void {
// // this._NotificationSer.getNotifications().subscribe((notification)=>{
// // console.log(notification)
// //   },(error)=>{
// //     console.log(`-----------${error}-------------`)
// //   })
//  this.subscribtion= this._NotificationSer.getNotifications().pipe(
//   map((msg)=>`${msg} shadwa`),
//   filter((msg)=>msg.startsWith('hamada'))
//  ).subscribe({
//   next:(notification)=>{
//     console.log(notification);
//   },
//   error:(err)=>{
//     console.log(err);
//   },
//   complete:()=>{
//     console.log("notification completed successfully")
//   },
// })
// }

// ngOnDestroy(): void {
//   this.subscribtion.unsubscribe()
// }
// }
