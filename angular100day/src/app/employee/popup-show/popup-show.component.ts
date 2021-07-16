import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl,Form, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
declare var $ :any;
@Component({
  selector: 'app-popup-show',
  templateUrl: './popup-show.component.html',
  styleUrls: ['./popup-show.component.scss']
})
export class PopupShowComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { 
    this.closeResult = "";
  }

  ngOnInit(): void {
    debugger
  }
  showPupUpAsess(){
    $("#showpopupaccsess").click();
  }
  ///

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title ' ,modalDialogClass: 'dssssasas'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
