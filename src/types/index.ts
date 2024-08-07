export interface MenuItem {
  id: string;
  label: string;
  link: string;
}

export interface SharedData {
  counter: number;
}

export interface AppState {
  menu: MenuItem[];
  appCommunication: {
    currentApp: string | null;
    sharedData: SharedData;
  };
}
