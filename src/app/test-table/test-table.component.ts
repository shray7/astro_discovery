import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { InstanceModel, BackendService, InstanceModel2 } from '../backend.service';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {

  constructor(public backendService: BackendService, private colorService: ColorService) { }
  displayedColumns: string[] = ['env', 'details', 'TEST', 'TESTQ', 'TESTP', 'Dev', 'Demo'];
  public dataSource: MatTableDataSource<InstanceModel2>;
  private colorDict: Object;
  color: string;
  ngOnInit() {
    let m = this.backendService.getTestInstances();
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
