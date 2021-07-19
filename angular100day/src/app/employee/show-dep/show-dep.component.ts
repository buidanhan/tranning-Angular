import { Component, OnInit ,Output, EventEmitter, TemplateRef} from '@angular/core';
import { post } from 'jquery';
import { SharedService } from 'src/app/shared.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl,Form, FormGroup, Validators } from '@angular/forms';
declare var $ :any;

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {

  public ad:string="aaa";
  totalLengh:any;

  page:number=1;

  EmployeeList: any[] = [];

  Modaltitle: string;

  activeAddEditEm: boolean = false;

  em: any;

  constructor(private service: SharedService) {
    this.Modaltitle = "";
  }

  ngOnInit() {
    this.refreshEmList();
  }
  ////fillter bảng
  EmployeeListfilter: any;

  filterString = "";
  
  onFilterChange() {

    this.EmployeeListfilter = this.EmployeeList.filter((emp) => this.isMatch(emp));
  }
  isMatch(item: any): any {

   
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().indexOf(this.filterString) > -1
    }
  }  
  ////////Adđ
  addClick() {

    this.em = {
      Id: 0,
      Sex: 0,
      Name: "",
      Adresss: "",
      Gmail:"",
      Tell: ""
    }
    this.Modaltitle = "Add Employee";
    this.activeAddEditEm = true;

  }
  ///close
  Closeclick() {

    this.activeAddEditEm = false;
  }
  closePopup()
  {
    $("#btn-close").click();
  }
  ////update
  updateClick(item: any) {

    this.em = item;
    this.Modaltitle = "Update  Employee";
    this.activeAddEditEm = true;

  }
  ///delete
  DeleteClick(item: any) {
    if (confirm('Bạn có chắc chắn không?')) {

      this.service.deleteEmployee(item.ID).subscribe(data => {
        this.refreshEmList();
        setTimeout(() => {
          this.service.showPupUpAsess();
        },500);
        setTimeout(()=>{
          this.service.closePupupAccsess();
        },2000)
      })
    }

  }
  ////////getdata
  refreshEmList() {
    this.service.getEmList().subscribe(data => {

      this.totalLengh=data.length;
      this.EmployeeList = data;
      this.EmployeeListfilter = data;    
    }, err => {

    });
  }
  ///combox
 
    
}
