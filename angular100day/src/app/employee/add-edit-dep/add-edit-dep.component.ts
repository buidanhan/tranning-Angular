import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { PopupShowComponent } from '../popup-show/popup-show.component';
import { ShowDepComponent } from '../show-dep/show-dep.component'

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.scss']
})
export class AddEditDepComponent implements OnInit {
  @Input() em: any;
  @Output() closePopup = new EventEmitter<Function>();
  ID?: number;
  Sex?: number;
  Name: string;
  Adresss: string;
  Tell: "";
  Gmail: string;
  ////
  ids: string = "";
  emails: string = "";
  names: string = "";
  adresss: string = "";
  sexs: string = "";
  tels: string = "";
  ////
  IpName = "";
  IpSex = "";
  IpAdress = "";
  IPtell = "";
  IpGmail = "";

  ///combox
  lstGender = [
    {
      code: 0,
      value: 'Nam'
    },
    {
      code: 1,
      value: 'Nữ'
    }
  ]
  GmailList: string[];
  checkEmailtt:boolean;
  constructor(private service: SharedService, private show: ShowDepComponent) {
      this.ID = 0,
      this.Sex = 0,
      this.Name = "",
      this.Adresss = "",
      this.Tell = "",
      this.Gmail = ""
      this.GmailList=[];
      this.checkEmailtt=false;
  }
  ngOnInit(): void {
    debugger;
    this.ID = this.em.ID;
    this.Sex = this.em.Sex;
    this.Name = this.em.Name;
    this.Adresss = this.em.Adresss;
    this.Tell = this.em.Tell;
    this.Gmail = this.em.Gmail;
    this.getGmailList();
    this.checkEmail();

  }
  ///gêtmail
 
  getGmailList() {
    this.service.getAllEmail().subscribe(data => {
      debugger;
      this.GmailList = data; 
    }, err => {
      debugger;
    });
  }
  ///funcition getEmail tồn tại

  checkEmail(){
    debugger;   
    for(var i=0; i++; i<this.GmailList.length)
    {
       if(this.GmailList[i]==this.Gmail)
       {
         this.checkEmailtt=true;
         break;
       }    
    }
  }
  ///function add
  addEmployees() {
    debugger;
    var val = {
      ID: this.ID,
      Sex: this.Sex,
      Name: this.Name,
      Adresss: this.Adresss,
      Tell: this.Tell,
      Gmail: this.Gmail
    };
    let checkValidate = false;
    //val eName
    if (this.Name == "") {
      this.IpName = "Bạn chưa nhập tên!";
      checkValidate = true;
    }
    else {
      let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
      if (format.test(this.Name) == true) {
        this.IpName = "Bạn không thể nhập ký tự đặc biệt (Example:@,#,$....)";
        checkValidate = true;      
      }     
      else {
        this.IpName = "";
      }

    }
    ///validate sex
    if (this.Sex == null) {
      this.IpSex = "Bạn chưa chọn giới tính!"
      checkValidate = true;
    }
    else {
      this.IpSex = ""
    }
    ///validate gamil
    if (this.Gmail == "") {
      this.IpGmail = "Bạn chưa nhập Gmail!"
      checkValidate = true;
    }
    else {
      let regGmnai = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (regGmnai.test(this.Gmail) == false) {
        this.IpGmail = "Gmail chưa đúng định dạng!.'\nExample@gmail.com';"
        checkValidate = true;
      }
      else {
        this.IpGmail = ""
      }
    }
    ///validate adress
    if (this.Adresss == "") {
      this.IpAdress = "Bạn chưa nhập địa chỉ"
      checkValidate = true;
    }
    else {
      this.IpAdress = ""
    }
    ///validate tell
    if (this.Tell.length < 10) {
      this.IPtell = "Số điện thoại phải 10 số !"
      checkValidate = true;
    }
    else {
      this.IPtell = ""
    }
    ///check thỏa mãn
    if (!checkValidate) {
      this.IPtell = ""    
      this.service.addEmployee(val).subscribe(res => {
        this.show.refreshEmList();
        this.show.closePopup();

        setTimeout(() => {
          this.service.showPupUpAsess();
        },500);
        setTimeout(()=>{
          this.service.closePupupAccsess();
        },1000)
      }, error => {
        debugger
        console.log(error);
        if(error.error.text="001")
        {
          this.IpGmail = "Email đã tồn tại!"
        }
      });

    }
  }
  ///function Update
  UpEmployees() {
    debugger;
    var val = {
      ID: this.ID,
      Sex: this.Sex,
      Name: this.Name,
      Adresss: this.Adresss,
      Tell: this.Tell,
      Gmail: this.Gmail     
    };
    let checkValidate = false;
    //valaidateName
    if (this.Name == "") {
      this.IpName = "Bạn chưa nhập tên!";
      checkValidate = true;
    }
    else {
      let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      if (format.test(this.Name) == true) {
        this.IpName = "Bạn không thể nhập ký tự đặc biệt (Example:@,#,$....)";
        checkValidate = true;
      }
      else {
        this.IpName = "";
      }

    }
    ///validate sex
    if (this.Sex == null) {
      this.IpSex = "Bạn chưa chọn giới tính!"
      checkValidate = true;
    }
    else {
      this.IpSex = ""
    }
    ///validate gamil
    if (this.Gmail == "") {
      this.IpGmail = "Bạn chưa nhập Gmail!"
      checkValidate = true;
    }
    else {
      let regGmnai = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (regGmnai.test(this.Gmail) == false) {
        this.IpGmail = "Gmail chưa đúng định dạng!.'\nExample@gmail.com';"
        checkValidate = true;
      }
      else {
        this.IpGmail = ""
      }
    }
    ///validate adress
    if (this.Adresss == "") {
      this.IpAdress = "Bạn chưa nhập địa chỉ"
      checkValidate = true;
    }
    else {
      this.IpAdress = ""
    }
    ///validate tell
    if (this.Tell.length < 10) {
      this.IPtell = "Số điện thoại phải 10 số !"
      checkValidate = true;
    }
    else {
      this.IPtell = ""
    }
    if (!checkValidate) {
      this.service.updateEmployee(val).subscribe(res => {
        this.show.refreshEmList();
        this.show.closePopup();
        debugger;
        setTimeout(() => {
          this.service.showPupUpAsess();
        },500);
        setTimeout(()=>{
          this.service.closePupupAccsess();
        },2000)
      },error => {
        debugger
        console.log(error);
        if(error.error.text="001")
        {
          this.IpGmail = "Email đã tồn tại!"
        }
      });
    }
  }
}
