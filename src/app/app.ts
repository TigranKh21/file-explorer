import { Component } from '@angular/core';
import { MarvelService } from './data/services/marvel';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FileTree} from './data/models/file-node.model';
import { FileNode } from './components/file-node/file-node';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [AsyncPipe, FileNode],
})
export class App {
  constructor(private MarvelService: MarvelService) {}

  public data$?: Observable<FileTree>;
  public ngOnInit() {
    this.data$ = this.MarvelService.getData();
  }
}
