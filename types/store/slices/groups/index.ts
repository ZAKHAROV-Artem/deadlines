export interface Group {
  color: string;
  deadLinesIds: string[];
  id: string;
  name: string;
}
export interface GroupsState {
  groups: Group[];
}
