import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { BackendService, InstanceModel } from '../backend.service';
import { MatTableDataSource } from '@angular/material';
import { ColorService } from '../color.service';


@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  displayedColumns: string[] = ['env', 'details', 'dev', 'qa', 'prod', 'stage', 'live'];
  public dataSource: MatTableDataSource<InstanceModel>;
  isLoaded: boolean = false;

  color: string;
  private colorDict: Object;
  constructor(public service: BackendService, private colorService: ColorService) { }
  ngOnInit() {
    let m = this.service.getAllInstances();
    this.dataSource = new MatTableDataSource(m);
    this.colorService.events$.subscribe(x => this.color = x);

    this.colorDict = {
      'version': false,
      'built': false,
      'db': false,
      'dbver': false,
      'dbsolver': false
    }
  }

  openWindow(url: string) {
    window.open(url, "_blank");
  }

  highlight(name: string) {
    var elements = document.getElementsByClassName(name);
    var isHighLighted = this.colorDict[name];
    if (!isHighLighted) {
      for (var i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.color;
        this.colorDict[name] = true;
      }
    } else {
      for (var i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = "white";
        this.colorDict[name] = false;
      }
    }

  }
  highlightVersion() {
    this.highlight('version');
  }
  highlightBuilt() {
    this.highlight('built');
  }
  highlightDb() {
    this.highlight('db');
  }
  highlightDbver() {
    this.highlight('dbver');
  }
  highlightSolver() {
    this.highlight('dbsolver');
  }
}
