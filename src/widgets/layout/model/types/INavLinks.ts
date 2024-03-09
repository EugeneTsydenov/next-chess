export interface INavBarLink {
  navLinkName: string;
  navPath: string;
  dropDownLinks: IDropDawnLink[];
  id: string;
}

export interface IDropDawnLink {
  dropDownLinkName: string;
  dropDownPath: string;
  id: string;
}
