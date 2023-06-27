import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-resources',
  templateUrl: './human-resources.component.html',
  styleUrls: ['./human-resources.component.css']
})
export class HumanResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
