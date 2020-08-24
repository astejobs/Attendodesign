import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable:MdbTableDirective;
  @ViewChild('myForm') myForm:NgForm;
   EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
   EXCEL_EXTENSION = '.xlsx';

  elements:any=[];
  previous: any = [];
  searchText: string = ''; 
  search:any={}; 
  
  headElements = ['Name', 'NRIC', 'Date', 'CheckIn Time', 'CheckOut Time'];
  startDate: string;
  endDate: string;
  nric: string;

 
  @HostListener('input') oninput() 
  { 
    this.searchItems();
  } 

  constructor(private cdRef: ChangeDetectorRef, private spinner: NgxSpinnerService, private attendanceService: AttendanceService) { }

  ngOnInit() {
    localStorage.setItem('url','search');
    /* this.spinner.show();
    this.att_service.fetchAttendanceOnSearch(this.search).subscribe((response:any)=>{
     this.elements= response.body;
     this.mdbTable.setDataSource(this.elements);
     this.previous = this.mdbTable.getDataSource();
     this.spinner.hide();
    })  */
  }

  onSubmitForm(){
    console.log(this.search)
    this.search.startDate=this.startDate;
    this.search.endDate=this.endDate;
    this.spinner.show();
     this.attendanceService.fetchAttendanceOnSearch(this.search).subscribe((response:any)=>{
      this.elements= response.body;
      this.mdbTable.setDataSource(this.elements);
      this.previous = this.mdbTable.getDataSource();
      this.spinner.hide();
     })
  }

  excel(){
    this.spinner.show();
     this.attendanceService.fetchReportedAttendance(this.search).subscribe((data:Blob)=>{
      var blob = new Blob([data], {type: 'application/vnd.ms-excel'});

      var downloadURL = window.URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "Attendance_Report.xls";
      link.click();
  
      this.spinner.hide();
     });
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateLastItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  searchItems() { 
    const prev = this.mdbTable.getDataSource(); 
    if (!this.searchText) {
  this.mdbTable.setDataSource(this.previous); 
  this.elements =this.mdbTable.getDataSource(); 
  } 
  if (this.searchText) { 
    this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
  this.mdbTable.setDataSource(prev); 
  } 
  }
  
  editRow(el) {
    console.log(el);
    /* const elementIndex = this.elements.findIndex((elem: any) => el === elem);
    const modalOptions = {
      data: {
        editableRow: el
      }
    };
    this.modalRef = this.modalService.show(ModalEditComponent, modalOptions);
    this.modalRef.content.saveButtonClicked.subscribe((newElement: any) => {
        this.elements[elementIndex] = newElement;
      });
      this.mdbTable.setDataSource(this.elements);
    } */
  }
  removeRow(el) {
    console.log(el);
   /*  const elementIndex = this.elements.findIndex((elem: any) => el === elem);
    this.mdbTable.removeRow(elementIndex);
    this.mdbTable.getDataSource().forEach((el: any, index: any) => {
        el.id = (index + 1).toString();
      });
      this.mdbTable.setDataSource(this.elements);
    } */
  }

  setStartDate(dt) {
    const format = 'dd-MM-yyyy';
    const myDate = dt.value;
    const locale = 'en-US';
     this.startDate = formatDate(myDate, format, locale);
  }

  setEndDate(dt) {
    const format = 'dd-MM-yyyy';
    const myDate = dt.value;
    const locale = 'en-US';
     this.endDate = formatDate(myDate, format, locale);
  }

}
