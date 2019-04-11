import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSlideToggle, MatIconRegistry } from '@angular/material';
import { ColorService } from './color.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('bg') bg: ElementRef;
  @ViewChild(MatSlideToggle)
  wallpaperToggle: MatSlideToggle;

  ngOnInit(): void {
    let time = +localStorage.getItem('refreshTime');
    if (time < 5) {
      this.refreshTime = 60;
    }
    else {
      this.refreshTime = time;
    }
    this.fireRefresh();
    this.refreshedDate = new Date().toLocaleTimeString();
    let wp = localStorage.getItem('wp');
    if (wp && wp == 'true') {
      this.wallpaperToggle.checked = true;
      this.bg.nativeElement.classList.add('bg1');
    } else if (wp && wp == 'false') {
      this.wallpaperToggle.checked = false;
      this.bg.nativeElement.classList.remove('bg1');
    } else {
      localStorage.setItem('wp', 'true');
      this.wallpaperToggle.checked = true;
    }

    
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'network',
        sanitizer.bypassSecurityTrustResourceUrl('assets/device_hub-24px.svg'));
  }

  title = 'astro-discovery';
  refreshTime: number;
  refreshId: any;
  refreshedDate : string;
  fireRefresh() {
    if (this.refreshId) {
      clearInterval(this.refreshId);
    }


    if (this.refreshTime && this.refreshTime > 5) {
      localStorage.setItem('refreshTime', this.refreshTime.toString());
      this.refreshId = setInterval(() => {
        window.location.reload(true);
        this.refreshedDate = new Date().toLocaleTimeString();
      }, this.refreshTime * 1000);
    }

  }
  wpChange() {
    let wp = localStorage.getItem('wp');
    if (wp && wp == 'true') {
      this.bg.nativeElement.classList.remove('bg1');
      localStorage.setItem('wp', 'false');
    } else if (wp && wp == 'false') {
      this.bg.nativeElement.classList.add('bg1');
      localStorage.setItem('wp', 'true');
    } else {
      this.bg.nativeElement.classList.remove('bg1');
      localStorage.setItem('wp', 'false');
    }
  }

  getCurrentDateTime(){
    return this.refreshedDate;
  }
}
