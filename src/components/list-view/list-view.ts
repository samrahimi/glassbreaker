import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'list-view',
  templateUrl: 'list-view.html',
  inputs: ["feedType","feedItems"]
})
export class ListViewComponent {

  text: string;
  feedType: string;
  feedItems: Observable<any[]>;
  cardItems: any[];

  constructor() {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Marty McFly'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sarah Connor'
        },
        date: 'May 12, 1984',
        image: 'assets/img/advance-card-tmntr.jpg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Dr. Ian Malcolm'
        },
        date: 'June 28, 1990',
        image: 'assets/img/advance-card-jp.jpg',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      }
    ];

  }

  viewDetails(item_id: any) {
    console.log("Stub for viewDetails("+item_id+")")
  }

  getTimeSince(js_timestamp_value: number) {

    let elapsed_time_buckets = [
      {scale: 1000, max: 59, name: "seconds", abbr: "s"},
      {scale: 60000, max: 59, name: "minutes", abbr: "m"},
      {scale: 3600000, max: 23, name: "hours", abbr: "h"},
      {scale: 86400000, max: 364, name: "hours", abbr: "h"},
      {scale: 31536000000, max: 9999, name: "years", abbr: "y"},
    ]
    var diff = Date.now() - js_timestamp_value
    for (var t of elapsed_time_buckets) {
      var elapsed = Math.floor(diff/t.scale)
      if (elapsed <= t.max) 
        return elapsed+" "+t.name+" ago"
    } 
    console.log("getTimeSince failed silently!")
  }

  getIcon(category: string) {
    //Gets the nice big category avatars, used when user does not have profile pic
    return "/assets/img/ui/placeholders/first.jpg";
  }

}
