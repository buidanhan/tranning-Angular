import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var $ :any;
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44395/api"


  constructor(private http: HttpClient) {
  
  }
  getEmList(): Observable<any[]> {

    return this.http.get<any>(this.APIUrl + "/Employee");
  }
  getAllEmail(): Observable<any[]> {

    return this.http.get<any>(this.APIUrl + "/Employee/GetAllEmail");
  }
  addEmployee(val: any) {
    return this.http.post<any>(this.APIUrl + '/Employee/AddEmployee', val);
  }
  updateEmployee(val: any) {
    return this.http.post<any>(this.APIUrl + '/Employee/UpdateEmployee', val);
  }
  deleteEmployee(val: any) {

    return this.http.post<any>(this.APIUrl + '/Employee/DeleteEMployee/', val);
  }
  showPupUpAsess(){
    $("#showpopupaccsess").click();
  }
  closePupupAccsess(){
    $("#btnclose").click();
  }
}
