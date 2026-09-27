export interface FileNode {
  type: 'folder' | 'file';
  children?: Record<string, FileNode>;
}

export type FileTree = Record<string, FileNode>;
