import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../envirinments/environment';
import { FileTree } from '../models/file-node.model';

@Service()
export class MarvelService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl= environment.apiUrl;

  getData() {
    return this.http.get<FileTree>(this.baseUrl);
  }
}
