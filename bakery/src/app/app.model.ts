export interface MenuItem {
  description: string;
  title: string;
  dietaryRequirements: string;
  totalNzd: number;
}
export interface Menu {
  menuItems: MenuItem[];
  title: string;
  time: string;
}

export enum MenuTypes {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  DESSERT = 'dessert',
  DRINKS = 'drinks'
}
