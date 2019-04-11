import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  client: HttpClient;
  data: FakeData;
  constructor(http: HttpClient) {
    this.client = http;
    this.data = new FakeData();
  }

  getVersion(model: GenModel, isExternal: boolean = false) {
    if (isExternal == true) {
      var requestUrl = model.baseurl + "/external/administration.svc/version?apikey=" + model.apiKey;
    }
    else {
      var requestUrl = model.baseurl + "/internal/administration.svc/version?apikey=" + model.apiKey;
    }

    return this.client.get(requestUrl).pipe(retry(1), catchError(this.handleError(model)));
  }
  handleError(model: GenModel): any {
    // code for notification

  }
  handleSolverError(model: GenModel): any {

  }
  getSolverVersion(model: GenModel, isExternal: boolean = false) {
    if (isExternal == true) {
      var requestUrl = model.baseurl + "/external/solver.svc/version?apikey=" + model.apiKey;
    }
    else {
      var requestUrl = model.baseurl + "/internal/solver.svc/version?apikey=" + model.apiKey;
    }

    return this.client.get(requestUrl).pipe(retry(1), catchError(this.handleSolverError(model)));
  }
  getTestInstances() {
    let m = new Array<InstanceModel2>();
    m.push(this.GetBIQInstances());
    m.push(this.GetJPInstances());

    return m;
  }
  GetJPInstances(): InstanceModel2 {
    let m = new InstanceModel2();
    m.test = this.getJPTestGenModel();
    m.testq = this.getJPTestQGenModel();
    m.testp = this.getJPTestPGenModel();
    m.devoff = new GenModel();
    m.devoff.hide = true;
    m.demo = new GenModel();
    m.demo.hide = true;
    m.name = "JP";
    return m;
  }
  getJPTestPGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_JP-TESTP/ASTROSvc_JP-TESTP";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=jepdeveloper";
    m.reports = "http://ASTRO-RPT_JP-TESTP/Reports/Pages/Folder.aspx?ItemPath=%2fJP-TESTP";
    m.pilotPortal = "http://ASTRO-WEB_JP-TESTP/ASTROWeb_JP-TESTP";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  }
  getJPTestQGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_JP-TESTQ/ASTROSvc_JP-TESTQ";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=jepdeveloper";
    m.reports = "http://ASTRO-RPT_JP-TESTQ/Reports/Pages/Folder.aspx?ItemPath=%2fJP-TESTQ";
    m.pilotPortal = "http://ASTRO-WEB_JP-TESTQ/ASTROWeb_JP-TESTQ";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  }
  getJPTestGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_JP-TEST/ASTROSvc_JP-TEST";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=jepdeveloper";
    m.reports = "http://ASTRO-RPT_JP-TEST/Reports/Pages/Folder.aspx?ItemPath=%2fJP-TEST";
    m.pilotPortal = "http://ASTRO-WEB_JP-TEST/ASTROWeb_JP-TEST";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  }
  GetTestPGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_BIQ-TESTP/ASTROSvc_BIQ-TESTP";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=administrator";
    m.reports = "http://ASTRO-RPT_BIQ-TESTP/Reports/Pages/Folder.aspx?ItemPath=%2fBIQ-TESTP";
    m.pilotPortal = "http://ASTRO-WEB_BIQ-TESTP/ASTROWeb_BIQ-TESTP";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  }
  getDemoGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_BIQ-DEMO/ASTROSvc_BIQ-Demo";
    m.opsmgr = null;
    m.reports = "http://ASTRO-RPT_BIQ-DEMO/Reports/Pages/Folder.aspx?ItemPath=%2fBIQ-DEMO";
    m.pilotPortal = "http://ASTRO-WEB_BIQ-DEMO/ASTROWeb_BIQ-DEMO";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  }
  getDevOffGenModel(): GenModel {
    var m = new GenModel();
    m.hide = true;
    return m;
  }
  getTestQGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_BIQ-TESTQ/ASTROSvc_BIQ-TESTQ";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=administrator";
    m.reports = "http://ASTRO-RPT_BIQ-TESTQ/Reports/Pages/Folder.aspx?ItemPath=%2fBIQ-TESTQ";
    m.pilotPortal = "http://ASTRO-WEB_BIQ-TESTQ/ASTROWeb_BIQ-TESTQ";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  }
  getTestGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_BIQ-TEST/ASTROSvc_BIQ-TEST";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=administrator";
    m.reports = "http://ASTRO-RPT_BIQ-TEST/Reports/Pages/Folder.aspx?ItemPath=%2fBIQ-TEST";
    m.pilotPortal = "http://ASTRO-WEB_BIQ-TEST/ASTROWeb_BIQ-TEST";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  }
  GetBIQInstances(): InstanceModel2 {
    let m = new InstanceModel2;
    m.test = this.getTestGenModel();
    m.testq = this.getTestQGenModel();
    m.testp = this.GetTestPGenModel();
    m.devoff = this.getDevOffGenModel();
    m.demo = this.getDemoGenModel();
    m.name = "BIQ";
    return m;
  }
  getAllInstances() {
    let m = new Array<InstanceModel>();
    m.push(this.getAcrInstances());
    m.push(this.getEasInstances());
    m.push(this.getGaInstances());
    m.push(this.getJsInstances());
    m.push(this.getKlInstances());
    m.push(this.getPsInstances());
    m.push(this.getTwInstances());
    // console.log(m);
    return m;
  }

  getAcrInstances() {
    let m = new InstanceModel();
    m.dev = this.getAcrDevGenModel();
    m.qa = this.getAcrQaGenModel();
    m.prod = this.getAcrProdGenModel();
    m.stage = this.getAcrStageGenModel();
    m.live = this.getAcrLiveGenModel();
    m.name = "ACR";
    return m;
  }
  getAcrDevGenModel() {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_ACR-DEV/ASTROSvc_ACR-DEV";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_ACR-DEV/Reports/browse/ACR-DEV";
    m.pilotPortal = "http://ASTRO-WEB_ACR-DEV/ASTROWeb_ACR-DEV";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  };

  getFromObj(m: GenModel, x: any) {
    m.version = x["ASTROVersion"];
    m.built = x["BuildDate"];
    m.db = x["Database"].split(" ", 1);
    m.dbver = x["FrameworkVersion"];
  }

  getAcrQaGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_ACR-QA/ASTROSvc_ACR-QA";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_ACR-QA/Reports/browse/ACR-QA";
    m.pilotPortal = "http://ASTRO-WEB_ACR-QA/ASTROWeb_ACR-QA";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => { this.getFromObj(m, x); });
    return m;
  }
  getAcrProdGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_ACR-PROD/ASTROSvc_ACR-PROD";
    m.reports = "http://ASTRO-RPT_ACR-PROD/Reports/browse/ACR-PROD";
    m.pilotPortal = "http://ASTRO-WEB_ACR-PROD/ASTROWeb_ACR-PROD";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m, true).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getAcrStageGenModel(): GenModel {
    var m = new GenModel();
    m.hide = true;
    return m;
  }
  getAcrLiveGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://189.206.77.51/astrosvc";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m, true).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }

  getEasInstances() {
    let m = new InstanceModel();
    m.dev = this.getEasDevGenModel();
    m.qa = this.getEasQaGenModel();
    m.prod = this.getEasProdGenModel();
    m.stage = this.getEasStageGenModel();
    m.live = this.getEasLiveGenModel();
    m.name = "EAS";
    return m;
  }
  getEasDevGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_EAS-DEV/ASTROSvc_EAS-DEV";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_EAS-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-DEV";
    m.pilotPortal = "http://ASTRO-WEB_EAS-DEV/ASTROWeb_EAS-DEV";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getEasQaGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_EAS-QA/ASTROSvc_EAS-QA";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_EAS-QA/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-QA";
    m.pilotPortal = "http://ASTRO-WEB_EAS-QA/ASTROWeb_EAS-QA";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getEasProdGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_EAS-PROD/ASTROSvc_EAS-PROD";
    m.reports = "http://ASTRO-RPT_EAS-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-PROD";
    m.pilotPortal = "http://ASTRO-WEB_EAS-PROD/ASTROWeb_EAS-PROD";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m, true).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getEasStageGenModel(): GenModel {
    var m = new GenModel();
    m.hide = true;
    return m;
  }
  getEasLiveGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://184.106.41.230/ASTROSvc";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m, true).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }

  getGaInstances() {
    let m = new InstanceModel();
    m.dev = this.getGaDevGenModel();
    m.qa = this.getGaQaGenModel();
    m.prod = this.getGaProdGenModel();
    m.stage = this.getGaStageGenModel();
    m.live = this.getGaLiveGenModel();
    m.name = "GA";
    return m;
  }
  getGaDevGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_GA-DEV/ASTROSvc_GA-DEV";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_GA-DEV/Reports/browse/GA-DEV";
    m.pilotPortal = "http://ASTRO-WEB_GA-DEV/ASTROWeb_GA-DEV";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getGaQaGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_GA-QA/ASTROSvc_GA-QA";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_GA-QA/Reports/browse/GA-QA";
    m.pilotPortal = "http://ASTRO-WEB_GA-QA/ASTROWeb_GA-QA";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getGaProdGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_GA-PROD/ASTROSvc_GA-PROD";
    m.reports = "http://ASTRO-RPT_GA-PROD/Reports/browse/GA-PROD";
    m.pilotPortal = "http://ASTRO-WEB_GA-PROD/ASTROWeb_GA-PROD";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m, true).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getGaStageGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "https://stg.globeair.com/ASTROSvc_ga-Stage";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getGaLiveGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "https://api.globeair.com/astrosvc";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m, true).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getJsInstances() {
    let m = new InstanceModel();
    m.dev = this.getJsDevGenModel();
    m.qa = this.getJsQaGenModel();
    m.prod = this.getJsProdGenModel();
    m.stage = this.getJsStageGenModel();
    m.live = this.getJsLiveGenModel();
    m.name = "JS";
    return m;
  }
  getJsDevGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_JS-DEV/ASTROSvc_JS-DEV";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_JS-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fJS-DEV";
    m.pilotPortal = "http://ASTRO-WEB_JS-DEV/ASTROWeb_JS-DEV";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getJsQaGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_JS-QA/ASTROSvc_JS-QA";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_JS-QA/Reports/Pages/Folder.aspx?ItemPath=%2fJS-QA";
    m.pilotPortal = "http://ASTRO-WEB_JS-QA/ASTROWeb_JS-QA";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getJsProdGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_JS-PROD/ASTROSvc_JS-PROD";
    m.reports = "http://ASTRO-RPT_JS-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fJS-PROD";
    m.pilotPortal = "http://ASTRO-WEB_JS-PROD/ASTROWeb_JS-PROD";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m, true).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getJsStageGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://206.193.214.18:25809/ASTROSvc_Stage";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getJsLiveGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "https://astrosvc.jetsuite.com/astrosvc";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m, true).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getKlInstances() {
    let m = new InstanceModel();
    m.dev = this.getKlDevGenModel();
    m.qa = this.getKlQaGenModel();
    m.prod = this.getKlProdGenModel();
    m.stage = this.getKlStageGenModel();
    m.live = this.getKlLiveGenModel();
    m.name = "KL";
    return m;
  }
  getKlDevGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_KL-DEV/ASTROSvc_KL-DEV";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_KL-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fKL-DEV";
    m.pilotPortal = "http://ASTRO-WEB_KL-DEV/ASTROWeb_KL-DEV";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getKlQaGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_KL-QA/ASTROSvc_KL-QA";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_KL-QA/Reports/Pages/Folder.aspx?ItemPath=%2fKL-QA";
    m.pilotPortal = "http://ASTRO-WEB_KL-QA/ASTROWeb_KL-QA";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getKlProdGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_KL-PROD/ASTROSvc_KL-PROD";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com&baseUrl=http://ASTRO-WEB_KL-PROD/ASTROSvc_KL-PROD&appUrl=http://ASTRO-WEB_KL-PROD/Apps_KL-PROD/.";
    m.reports = "http://ASTRO-RPT_KL-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fKL-PROD";
    m.pilotPortal = "http://ASTRO-WEB_KL-PROD/ASTROWeb_KL-PROD";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getKlStageGenModel(): GenModel {
    var m = new GenModel();
    m.hide = true;
    return m;
  }
  getKlLiveGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "https://pilot.kalittaair.com/astrosvc";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getPsInstances() {
    let m = new InstanceModel();
    m.dev = this.getPsDevGenModel();
    m.qa = this.getPsQaGenModel();
    m.prod = this.getPsProdGenModel();
    m.stage = this.getPsStageGenModel();
    m.live = this.getPsLiveGenModel();
    m.name = "PS";
    return m;
  }
  getPsDevGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_PS-DEV/ASTROSvc_PS-DEV";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_PS-DEV/Reports/browse/PS-DEV";
    m.pilotPortal = "http://ASTRO-WEB_PS-DEV/ASTROWeb_PS-DEV";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getPsQaGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_PS-QA/ASTROSvc_PS-QA";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_PS-QA/Reports/browse/PS-QA";
    m.pilotPortal = "http://ASTRO-WEB_PS-QA/ASTROWeb_PS-QA";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getPsProdGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_PS-PROD/ASTROSvc_PS-PROD";
    m.reports = "http://ASTRO-RPT_PS-PROD/Reports/browse/PS-PROD";
    m.pilotPortal = "http://ASTRO-WEB_PS-PROD/ASTROWeb_PS-PROD";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    //this.getSolverVersion(m).subscribe(x => m.solverver = x.toString());
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getPsStageGenModel(): GenModel {
    var m = new GenModel();
    m.hide = true;
    return m;
  }
  getPsLiveGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "https://log.planesense.com/astrosvc";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getVersion(m, true).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getTwInstances() {
    let m = new InstanceModel();
    m.dev = this.getTwDevGenModel();
    m.qa = this.getTwQaGenModel();
    m.prod = this.getTwProdGenModel();
    m.stage = this.getTwStageGenModel();
    m.live = this.getTwLiveGenModel();
    m.name = "TW";
    return m;
  }
  getTwDevGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_TW-DEV/ASTROSvc_TW-DEV";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_TW-DEV/Reports/browse/TW-DEV";
    m.pilotPortal = "http://ASTRO-WEB_TW-DEV/ASTROWeb_TW-DEV";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getTwQaGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_TW-QA/ASTROSvc_TW-QA";
    m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
    m.reports = "http://ASTRO-RPT_TW-QA/Reports/browse/TW-QA";
    m.pilotPortal = "http://ASTRO-WEB_TW-QA/ASTROWeb_TW-QA";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getTwProdGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "http://ASTRO-WEB_TW-PROD/ASTROSvc_TW-PROD";
    m.reports = "http://ASTRO-RPT_TW-PROD/Reports/browse/TW-PROD";
    m.pilotPortal = "http://ASTRO-WEB_TW-PROD/ASTROWeb_TW-PROD";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
  getTwStageGenModel(): GenModel {
    var m = new GenModel();
    m.hide = true;
    return m;
  }

  getTwLiveGenModel(): GenModel {
    let m = new GenModel();
    m.baseurl = "https://astroapi.flytradewind.com";
    m.requestSolver = true;
    m.site = m.baseurl + '?' + m.apiKey;
    this.getSolverVersion(m).subscribe(x => m.solverver = x.toString(), error => m.solverError = true);
    this.getVersion(m).subscribe(x => this.getFromObj(m, x));
    return m;
  }
}

export class InstanceModel {
  // Env
  dev: GenModel;
  qa: GenModel;
  prod: GenModel;
  stage: GenModel;
  live: GenModel;
  baseurl: string;
  apiKey: string;

  name: string;
}

export class InstanceModel2 {
  test: GenModel;
  testq: GenModel;
  testp: GenModel;
  devoff: GenModel;
  demo: GenModel;
  name: string;
}
export class GenModel {
  constructor() {
    this.apiKey = "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27";
  }
  apiKey: string;
  baseurl: string;
  // ui bound
  version: string;
  built: string;
  db: string;
  dbver: string;
  solverver: string;
  site: string;
  opsmgr: string;
  reports: string;
  pilotPortal: string;
  requestSolver: boolean;
  error: boolean = false;
  solverError: boolean = false;
  hide: boolean;
}

export class FakeData {
  getFakeData() {   
    let test = [
      {
        "test": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_BIQ-TEST/ASTROSvc_BIQ-TEST",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=administrator",
          "reports": "http://ASTRO-RPT_BIQ-TEST/Reports/Pages/Folder.aspx?ItemPath=%2fBIQ-TEST",
          "pilotPortal": "http://ASTRO-WEB_BIQ-TEST/ASTROWeb_BIQ-TEST",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_BIQ-TEST/ASTROSvc_BIQ-TEST?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2110 (API v19)",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ_TEST.BIQ_ASTRO_TEST"
          ],
          "dbver": "v4.0.30319"
        },
        "testq": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_BIQ-TESTQ/ASTROSvc_BIQ-TESTQ",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=administrator",
          "reports": "http://ASTRO-RPT_BIQ-TESTQ/Reports/Pages/Folder.aspx?ItemPath=%2fBIQ-TESTQ",
          "pilotPortal": "http://ASTRO-WEB_BIQ-TESTQ/ASTROWeb_BIQ-TESTQ",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_BIQ-TESTQ/ASTROSvc_BIQ-TESTQ?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2110 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ_TEST.BIQ_ASTRO_TESTQ"
          ],
          "dbver": "v4.0.30319"
        },
        "testp": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_BIQ-TESTP/ASTROSvc_BIQ-TESTP",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=administrator",
          "reports": "http://ASTRO-RPT_BIQ-TESTP/Reports/Pages/Folder.aspx?ItemPath=%2fBIQ-TESTP",
          "pilotPortal": "http://ASTRO-WEB_BIQ-TESTP/ASTROWeb_BIQ-TESTP",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_BIQ-TESTP/ASTROSvc_BIQ-TESTP?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2089 (API v19)",
          "version": "4.16.15.10",
          "built": "04-01-2019T12:37:32",
          "db": [
            "BOLDIQ_TEST.BIQ_ASTRO_TESTP"
          ],
          "dbver": "v4.0.30319"
        },
        "devoff": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "hide": true
        },
        "demo": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_BIQ-DEMO/ASTROSvc_BIQ-Demo",
          "opsmgr": null,
          "reports": "http://ASTRO-RPT_BIQ-DEMO/Reports/Pages/Folder.aspx?ItemPath=%2fBIQ-DEMO",
          "pilotPortal": "http://ASTRO-WEB_BIQ-DEMO/ASTROWeb_BIQ-DEMO",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_BIQ-DEMO/ASTROSvc_BIQ-Demo?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.1953 (API v19)",
          "version": "4.17.107.0",
          "built": "02-21-2019T09:09:25",
          "db": [
            "BOLDIQ_DB3.BIQ_ASTRO_DEMO"
          ],
          "dbver": "v4.0.30319"
        },
        "name": "BIQ"
      },
      {
        "test": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_JP-TEST/ASTROSvc_JP-TEST",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=jepdeveloper",
          "reports": "http://ASTRO-RPT_JP-TEST/Reports/Pages/Folder.aspx?ItemPath=%2fJP-TEST",
          "pilotPortal": "http://ASTRO-WEB_JP-TEST/ASTROWeb_JP-TEST",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_JP-TEST/ASTROSvc_JP-TEST?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2110 (API v19)",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ_TEST.JP_ASTRO_TEST"
          ],
          "dbver": "v4.0.30319"
        },
        "testq": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_JP-TESTQ/ASTROSvc_JP-TESTQ",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=jepdeveloper",
          "reports": "http://ASTRO-RPT_JP-TESTQ/Reports/Pages/Folder.aspx?ItemPath=%2fJP-TESTQ",
          "pilotPortal": "http://ASTRO-WEB_JP-TESTQ/ASTROWeb_JP-TESTQ",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_JP-TESTQ/ASTROSvc_JP-TESTQ?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2110 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ_TEST.JP_ASTRO_TESTQ"
          ],
          "dbver": "v4.0.30319"
        },
        "testp": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_JP-TESTP/ASTROSvc_JP-TESTP",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=jepdeveloper",
          "reports": "http://ASTRO-RPT_JP-TESTP/Reports/Pages/Folder.aspx?ItemPath=%2fJP-TESTP",
          "pilotPortal": "http://ASTRO-WEB_JP-TESTP/ASTROWeb_JP-TESTP",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_JP-TESTP/ASTROSvc_JP-TESTP?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.16.15.10",
          "built": "04-01-2019T12:37:32",
          "db": [
            "BOLDIQ_TEST.JP_ASTRO_TESTP"
          ],
          "dbver": "v4.0.30319",
          "solverver": "5.5.0.2089 (API v19)"
        },
        "devoff": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "hide": true
        },
        "demo": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "hide": true
        },
        "name": "JP"
      }
    ]
    let main = [
      {
        "dev": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_ACR-DEV/ASTROSvc_ACR-DEV",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_ACR-DEV/Reports/browse/ACR-DEV",
          "pilotPortal": "http://ASTRO-WEB_ACR-DEV/ASTROWeb_ACR-DEV",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_ACR-DEV/ASTROSvc_ACR-DEV?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ_DB4.ACR_ASTRO_DEV"
          ],
          "dbver": "v4.0.30319"
        },
        "qa": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_ACR-QA/ASTROSvc_ACR-QA",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_ACR-QA/Reports/browse/ACR-QA",
          "pilotPortal": "http://ASTRO-WEB_ACR-QA/ASTROWeb_ACR-QA",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_ACR-QA/ASTROSvc_ACR-QA?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ_DB4.ACR_ASTRO_QA"
          ],
          "dbver": "v4.0.30319"
        },
        "prod": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_ACR-PROD/ASTROSvc_ACR-PROD",
          "reports": "http://ASTRO-RPT_ACR-PROD/Reports/browse/ACR-PROD",
          "pilotPortal": "http://ASTRO-WEB_ACR-PROD/ASTROWeb_ACR-PROD",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_ACR-PROD/ASTROSvc_ACR-PROD?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2239 (API v19)",
          "version": "4.15.0.22",
          "built": "08-06-2018T14:04:38",
          "db": [
            "BOLDIQ_DB4.ACR_ASTRO_PROD"
          ],
          "dbver": "v4.0.30319"
        },
        "stage": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "hide": true
        },
        "live": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://189.206.77.51/astrosvc",
          "requestSolver": true,
          "site": "http://189.206.77.51/astrosvc?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2239 (API v19)",
          "version": "4.15.0.22",
          "built": "08-06-2018T16:04:39",
          "db": [
            "ASTRO1.ASTRO"
          ],
          "dbver": "v4.0.30319"
        },
        "name": "ACR"
      },
      {
        "dev": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_EAS-DEV/ASTROSvc_EAS-DEV",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_EAS-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-DEV",
          "pilotPortal": "http://ASTRO-WEB_EAS-DEV/ASTROWeb_EAS-DEV",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_EAS-DEV/ASTROSvc_EAS-DEV?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ_DB3.EAS_ASTRO_DEV"
          ],
          "dbver": "v4.0.30319",
          "solverver": "5.5.0.5202 (API v19)"
        },
        "qa": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_EAS-QA/ASTROSvc_EAS-QA",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_EAS-QA/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-QA",
          "pilotPortal": "http://ASTRO-WEB_EAS-QA/ASTROWeb_EAS-QA",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_EAS-QA/ASTROSvc_EAS-QA?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ_DB3.EAS_ASTRO_QA"
          ],
          "dbver": "v4.0.30319"
        },
        "prod": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_EAS-PROD/ASTROSvc_EAS-PROD",
          "reports": "http://ASTRO-RPT_EAS-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-PROD",
          "pilotPortal": "http://ASTRO-WEB_EAS-PROD/ASTROWeb_EAS-PROD",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_EAS-PROD/ASTROSvc_EAS-PROD?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.15.0.22",
          "built": "08-06-2018T14:04:38",
          "db": [
            "BOLDIQ_DB3.EAS_ASTRO_PROD"
          ],
          "dbver": "v4.0.30319",
          "solverver": "5.5.0.2089 (API v19)"
        },
        "stage": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "hide": true
        },
        "live": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://184.106.41.230/ASTROSvc",
          "requestSolver": true,
          "site": "http://184.106.41.230/ASTROSvc?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2046 (API v19)",
          "version": "4.15.0.22",
          "built": "08-06-2018T16:04:39",
          "db": [
            "798667-DB01PRIN.ASTRO"
          ],
          "dbver": "v4.0.30319"
        },
        "name": "EAS"
      },
      {
        "dev": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_GA-DEV/ASTROSvc_GA-DEV",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_GA-DEV/Reports/browse/GA-DEV",
          "pilotPortal": "http://ASTRO-WEB_GA-DEV/ASTROWeb_GA-DEV",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_GA-DEV/ASTROSvc_GA-DEV?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ_DB4.GA_ASTRO_DEV"
          ],
          "dbver": "v4.0.30319"
        },
        "qa": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_GA-QA/ASTROSvc_GA-QA",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_GA-QA/Reports/browse/GA-QA",
          "pilotPortal": "http://ASTRO-WEB_GA-QA/ASTROWeb_GA-QA",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_GA-QA/ASTROSvc_GA-QA?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ_DB4.GA_ASTRO_QA"
          ],
          "dbver": "v4.0.30319"
        },
        "prod": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_GA-PROD/ASTROSvc_GA-PROD",
          "reports": "http://ASTRO-RPT_GA-PROD/Reports/browse/GA-PROD",
          "pilotPortal": "http://ASTRO-WEB_GA-PROD/ASTROWeb_GA-PROD",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_GA-PROD/ASTROSvc_GA-PROD?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2089 (API v19)",
          "version": "4.15.0.24",
          "built": "09-14-2018T18:02:50",
          "db": [
            "BOLDIQ_DB4.GA_ASTRO_PROD"
          ],
          "dbver": "v4.0.30319"
        },
        "stage": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "https://stg.globeair.com/ASTROSvc_ga-Stage",
          "requestSolver": true,
          "site": "https://stg.globeair.com/ASTROSvc_ga-Stage?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.16.15.9",
          "built": "03-22-2019T13:08:16",
          "db": [
            "GLOBEAIR_SQL.ASTRO_STAGE"
          ],
          "dbver": "v4.0.30319",
          "solverver": "5.5.0.2104 (API v19)"
        },
        "live": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "https://api.globeair.com/astrosvc",
          "requestSolver": true,
          "site": "https://api.globeair.com/astrosvc?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.15.0.24",
          "built": "09-15-2018T03:02:50",
          "db": [
            "GLOBEAIR-SQL2.ASTRO"
          ],
          "dbver": "v4.0.30319",
          "solverver": "5.5.0.1988 (API v19)"
        },
        "name": "GA"
      },
      {
        "dev": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_JS-DEV/ASTROSvc_JS-DEV",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_JS-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fJS-DEV",
          "pilotPortal": "http://ASTRO-WEB_JS-DEV/ASTROWeb_JS-DEV",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_JS-DEV/ASTROSvc_JS-DEV?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ-DB5.JS_ASTRO_DEV"
          ],
          "dbver": "v4.0.30319"
        },
        "qa": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_JS-QA/ASTROSvc_JS-QA",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_JS-QA/Reports/Pages/Folder.aspx?ItemPath=%2fJS-QA",
          "pilotPortal": "http://ASTRO-WEB_JS-QA/ASTROWeb_JS-QA",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_JS-QA/ASTROSvc_JS-QA?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ-DB5.JS_ASTRO_QA"
          ],
          "dbver": "v4.0.30319"
        },
        "prod": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_JS-PROD/ASTROSvc_JS-PROD",
          "reports": "http://ASTRO-RPT_JS-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fJS-PROD",
          "pilotPortal": "http://ASTRO-WEB_JS-PROD/ASTROWeb_JS-PROD",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_JS-PROD/ASTROSvc_JS-PROD?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2089 (API v19)",
          "version": "4.15.0.28",
          "built": "11-15-2018T11:55:24",
          "db": [
            "BOLDIQ-DB5.JS_ASTRO_PROD"
          ],
          "dbver": "v4.0.30319"
        },
        "stage": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://206.193.214.18:25809/ASTROSvc_Stage",
          "requestSolver": true,
          "site": "http://206.193.214.18:25809/ASTROSvc_Stage?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2089 (API v19)",
          "version": "4.16.15.8",
          "built": "03-05-2019T10:46:26",
          "db": [
            "VIRVSS01.ASTRO_STAGE"
          ],
          "dbver": "v4.0.30319"
        },
        "live": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "https://astrosvc.jetsuite.com/astrosvc",
          "requestSolver": true,
          "site": "https://astrosvc.jetsuite.com/astrosvc?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.15.0.28",
          "built": "11-15-2018T11:55:24",
          "db": [
            "VOREDB01.ASTRO"
          ],
          "dbver": "v4.0.30319",
          "solverver": "5.5.0.2089 (API v19)"
        },
        "name": "JS"
      },
      {
        "dev": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_KL-DEV/ASTROSvc_KL-DEV",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_KL-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fKL-DEV",
          "pilotPortal": "http://ASTRO-WEB_KL-DEV/ASTROWeb_KL-DEV",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_KL-DEV/ASTROSvc_KL-DEV?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.6.0.5253 (API v19)",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ_DB3.KL_ASTRO_DEV"
          ],
          "dbver": "v4.0.30319"
        },
        "qa": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_KL-QA/ASTROSvc_KL-QA",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_KL-QA/Reports/Pages/Folder.aspx?ItemPath=%2fKL-QA",
          "pilotPortal": "http://ASTRO-WEB_KL-QA/ASTROWeb_KL-QA",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_KL-QA/ASTROSvc_KL-QA?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.6.0.5253 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ_DB3.KL_ASTRO_QA"
          ],
          "dbver": "v4.0.30319"
        },
        "prod": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_KL-PROD/ASTROSvc_KL-PROD",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com&baseUrl=http://ASTRO-WEB_KL-PROD/ASTROSvc_KL-PROD&appUrl=http://ASTRO-WEB_KL-PROD/Apps_KL-PROD/.",
          "reports": "http://ASTRO-RPT_KL-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fKL-PROD",
          "pilotPortal": "http://ASTRO-WEB_KL-PROD/ASTROWeb_KL-PROD",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_KL-PROD/ASTROSvc_KL-PROD?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.6.0.5033 (API v19)",
          "version": "4.17.106.0",
          "built": "01-27-2019T09:25:08",
          "db": [
            "BOLDIQ_DB3.KL_ASTRO_PROD"
          ],
          "dbver": "v4.0.30319"
        },
        "stage": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "hide": true
        },
        "live": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "https://pilot.kalittaair.com/astrosvc",
          "requestSolver": true,
          "site": "https://pilot.kalittaair.com/astrosvc?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.17.107.0",
          "built": "02-21-2019T09:08:46",
          "db": [
            "KAASTDB01.ASTRO"
          ],
          "dbver": "v4.0.30319"
        },
        "name": "KL"
      },
      {
        "dev": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_PS-DEV/ASTROSvc_PS-DEV",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_PS-DEV/Reports/browse/PS-DEV",
          "pilotPortal": "http://ASTRO-WEB_PS-DEV/ASTROWeb_PS-DEV",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_PS-DEV/ASTROSvc_PS-DEV?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ_DB4.PS_ASTRO_DEV"
          ],
          "dbver": "v4.0.30319"
        },
        "qa": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_PS-QA/ASTROSvc_PS-QA",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_PS-QA/Reports/browse/PS-QA",
          "pilotPortal": "http://ASTRO-WEB_PS-QA/ASTROWeb_PS-QA",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_PS-QA/ASTROSvc_PS-QA?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ_DB4.PS_ASTRO_Qa"
          ],
          "dbver": "v4.0.30319"
        },
        "prod": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_PS-PROD/ASTROSvc_PS-PROD",
          "reports": "http://ASTRO-RPT_PS-PROD/Reports/browse/PS-PROD",
          "pilotPortal": "http://ASTRO-WEB_PS-PROD/ASTROWeb_PS-PROD",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_PS-PROD/ASTROSvc_PS-PROD?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.15.0.24",
          "built": "09-14-2018T18:02:50",
          "db": [
            "BOLDIQ_DB4.PS_ASTRO_PROD"
          ],
          "dbver": "v4.0.30319"
        },
        "stage": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "hide": true
        },
        "live": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "https://log.planesense.com/astrosvc",
          "requestSolver": true,
          "site": "https://log.planesense.com/astrosvc?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "version": "4.15.0.24",
          "built": "09-14-2018T18:02:50",
          "db": [
            "FLSQL02.ASTRO"
          ],
          "dbver": "v4.0.30319"
        },
        "name": "PS"
      },
      {
        "dev": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_TW-DEV/ASTROSvc_TW-DEV",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_TW-DEV/Reports/browse/TW-DEV",
          "pilotPortal": "http://ASTRO-WEB_TW-DEV/ASTROWeb_TW-DEV",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_TW-DEV/ASTROSvc_TW-DEV?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.18.70.0",
          "built": "04-10-2019T17:04:56",
          "db": [
            "BOLDIQ_DB4.TW_ASTRO_DEV"
          ],
          "dbver": "v4.0.30319"
        },
        "qa": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_TW-QA/ASTROSvc_TW-QA",
          "opsmgr": "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com",
          "reports": "http://ASTRO-RPT_TW-QA/Reports/browse/TW-QA",
          "pilotPortal": "http://ASTRO-WEB_TW-QA/ASTROWeb_TW-QA",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_TW-QA/ASTROSvc_TW-QA?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.5202 (API v19)",
          "version": "4.17.108.0",
          "built": "03-27-2019T13:39:58",
          "db": [
            "BOLDIQ_DB4.TW_ASTRO_QA"
          ],
          "dbver": "v4.0.30319"
        },
        "prod": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "http://ASTRO-WEB_TW-PROD/ASTROSvc_TW-PROD",
          "reports": "http://ASTRO-RPT_TW-PROD/Reports/browse/TW-PROD",
          "pilotPortal": "http://ASTRO-WEB_TW-PROD/ASTROWeb_TW-PROD",
          "requestSolver": true,
          "site": "http://ASTRO-WEB_TW-PROD/ASTROSvc_TW-PROD?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2104 (API v19)",
          "version": "4.16.15.8",
          "built": "03-05-2019T10:46:26",
          "db": [
            "BOLDIQ_DB4.TW_ASTRO_PROD"
          ],
          "dbver": "v4.0.30319"
        },
        "stage": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "hide": true
        },
        "live": {
          "error": false,
          "solverError": false,
          "apiKey": "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "baseurl": "https://astroapi.flytradewind.com",
          "requestSolver": true,
          "site": "https://astroapi.flytradewind.com?158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27",
          "solverver": "5.5.0.2104 (API v19)",
          "version": "4.16.15.8",
          "built": "03-05-2019T10:46:26",
          "db": [
            "ASTRO-VM1.ASTRO"
          ],
          "dbver": "v4.0.30319"
        },
        "name": "TW"
      }
    ];
    
    let m1 = new InstanceModel2();
    // m1.demo = test[0]['demo'];
    // m1.test = test[0][0]['test'];
    // m1.testq = test[0][0]['testq'];
    // m1.testp = test[0][0]['test'];
    // m1.devoff = test[0][0]['devoff'];

    let m4 = test[0];
    let m5 = test[1];
    console.log(m4);
    return [m4, m5, main];
  }
}