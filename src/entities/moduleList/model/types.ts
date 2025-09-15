export interface ModuleList {
  id: number;
  img: string;
  type: string;
  controller: string;
  name: string;
  onClick: () => void;
}

export interface ModuleListState {
  items: ModuleList[];
  isLoading: boolean;
  error: string | null;
}
