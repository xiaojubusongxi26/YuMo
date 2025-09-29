export interface ToolWebInfo {
  title: string;
  url: string;
  icon?: string;
  description: string;
}
export interface ToolCardModel {
  title: string;
  sort: number;
  webs: ToolWebInfo[];
}
