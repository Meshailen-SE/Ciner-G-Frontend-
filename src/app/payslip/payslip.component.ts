import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { PoUploadService } from 'src/app/services/po-upload.service';
import { PayslipUploadService } from '../services/payslip-upload.service';

// import { Accounts}

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  searchText='';
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  constructor(private payslipUploadService: PayslipUploadService) { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.fileInfos = this.payslipUploadService.getFiles();
  }
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.payslipUploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.payslipUploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the payslip!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }

}
