import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { ColorService } from '../color.service';
@Component({
  selector: 'app-highlighter',
  templateUrl: './highlighter.component.html',
  styleUrls: ['./highlighter.component.css']
})

//https://medium.com/@dancornilov/angular-5-color-picker-component-be-colorfully-7e8b12c27ac0
export class HighlighterComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.colorService.newEvent(this.color);
  }
  @Input() heading: string;
  @Input() color: string;
  @Output() event = new EventEmitter();
  public defaultColors: string[] = [
    '#ffffff',
    '#000105',
    '#3e6158',
    '#3f7a89',
    '#96c582',
    '#b7d5c4',
    '#bcd6e7',
    '#7c90c1',
    '#9d8594',
    '#dad0d8',
    '#4b4fce',
    '#4e0a77',
    '#a367b5',
    '#ee3e6d',
    '#d63d62',
    '#c6a670',
    '#f46600',
    '#cf0500',
    '#efabbd',
    '#8e0622',
    '#f0b89a',
    '#f0ca68',
    '#62382f',
    '#c97545',
    '#c1800b'
  ];
  public show = false;
  constructor(private colorService: ColorService) {

   }
  public toggleColors() {
    this.show = !this.show;
  }
  ngOnInit() {
    
  }
  public changeColor(color: string) {
    this.color = color;
    this.colorService.newEvent(this.color);
    this.event.emit(this.color); // Return color
    this.show = false;
  }
  public changeColorManual(color: string) {
    const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  
    if (isValid) {
      this.color = color;
      this.colorService.newEvent(this.color);
      this.event.emit(this.color); // Return color
    }
  }
}
