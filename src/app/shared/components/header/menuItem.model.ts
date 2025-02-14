export interface MenuItem {
  name: string;
  path: string;
  icon: string | undefined;
  subMenus?: MenuItem[];
}
