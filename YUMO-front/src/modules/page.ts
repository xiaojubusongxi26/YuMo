// 文章列表
export interface PageListModule {
  catalogueName: string;
  pageName: string;
  pageCover: string;
  pageId: string;
  createTime: string;
  tags: TagModule[];
}

// 标签
export interface TagModule {
  tagName: string;
  tagId: string;
  createTime: string;
}
