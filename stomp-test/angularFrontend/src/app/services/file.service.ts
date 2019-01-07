import { Injectable } from '@angular/core';
import { ConvertedFile } from '../models/converted-file.model';
import { StompService } from './stomp.service';

@Injectable()
export class FileService {
  constructor(private stompService: StompService) {}

  sendConvertedFile(file: ConvertedFile) {
    return this.stompService.publish('/api/app/send/file', file);
  }
}
