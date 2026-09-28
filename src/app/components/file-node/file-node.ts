import { Component, Input } from '@angular/core';
import {FileTree} from '../../data/models/file-node.model';

@Component({
  imports: [],
  selector: 'app-file-node',
  styleUrl: './file-node.scss',
  templateUrl: './file-node.html',
})
export class FileNode {
  public FOLDER = 'folder';

  @Input() data!: FileTree;

  get entries() {
    return Object.entries(this.data).map(([key, value]) => ({
      key,
      value,
    }));
  }
}
