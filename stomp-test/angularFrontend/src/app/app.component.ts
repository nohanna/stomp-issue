import { Component, OnInit } from '@angular/core';
import { FileService } from './services/file.service';
import { ConvertedFile } from './models/converted-file.model';
import { StompService } from './services/stomp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  convertedFile: ConvertedFile;

  constructor(
    private stompService: StompService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.stompService.activate();
  }

  onLoadFile(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.readFiles(files);
    }
  }

  private readFiles(files: FileList) {
    Array.from(files).forEach(file => this.readFile(file));
  }

  private readFile(file: File) {
    const reader: FileReader = new FileReader();
    const parent = this;
    reader.onload = function(_) {
      parent.onFileRead(this.result);
    };
    reader.readAsText(file, 'UTF-8');
  }

  private onFileRead(result: any) {
    const lines: string[] = result.split('\n');
    this.convertedFile = {
      id: 'My File ID',
      name: 'My File Name',
      description: lines
    };
    this.fileService.sendConvertedFile(this.convertedFile);
  }
}
