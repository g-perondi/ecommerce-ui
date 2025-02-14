export interface HeaderItem {
  name: string;
  path: string;
  icon: string | undefined;
  subMenus?: HeaderItem[];
}
