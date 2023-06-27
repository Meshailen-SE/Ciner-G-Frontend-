import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-ciba-projects',
  templateUrl: './ciba-projects.component.html',
  styleUrls: ['./ciba-projects.component.css']
})
export class CibaProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  

}
