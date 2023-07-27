export interface ContextType {
    selectedFilters: string[];
    setSelectedFilters:  React.Dispatch<React.SetStateAction<string[]>>;
    projectsList: any,
    setProjectsList: React.Dispatch<React.SetStateAction<any>>;
  }