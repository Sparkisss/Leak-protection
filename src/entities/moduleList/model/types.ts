export interface ModuleList {
  id: number;
  img: string;
  type: string;
  controller: string;
}

export interface ModuleListState {
  items: ModuleList[];
  isLoading: boolean;
  error: string | null;
}
