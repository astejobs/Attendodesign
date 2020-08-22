import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
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
  
  headElements = ['Name', 'NRIC', 'Date', 'CheckIn', 'CheckOut'];
  startDate: string;
  endDate: string;
  nric: string;

 
  @HostListener('input') oninput() 
  { 
    this.searchItems();
  } 

  constructor(private cdRef: ChangeDetectorRef, private spinner: NgxSpinnerService, private att_service: AttendanceService) { }

  ngOnInit() {
    this.spinner.show();
    this.att_service.fetchAttendanceOnSearch(this.search).subscribe((response:any)=>{
     this.elements= response.body;
     this.mdbTable.setDataSource(this.elements);
     this.previous = this.mdbTable.getDataSource();
     this.spinner.hide();
    }) 
  }

  onSubmitForm(){
    console.log(this.search)
    this.search.startDate=this.startDate;
    this.search.date=this.endDate;
    this.spinner.show();
     this.att_service.fetchAttendanceOnSearch(this.search).subscribe((response:any)=>{
      this.elements= response.body;
      this.mdbTable.setDataSource(this.elements);
      this.previous = this.mdbTable.getDataSource();
      this.spinner.hide();
     })
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
  excel() {
    this.att_service.fetchReportedAttendance(this.search).subscribe((data:Blob)=>{
      var blob = new Blob([data], {type: 'application/vnd.ms-excel'});

      var downloadURL = window.URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "Reported_Employees of "+"/"+this.search.date+".xls";
      link.click();
    });
  }
   
  
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: this.EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + this.EXCEL_EXTENSION);
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
