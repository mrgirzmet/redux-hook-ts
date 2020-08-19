export interface SetNameAction {
  readonly type: 'SET_NAME';
  payload: string;
}

export type NameActions = SetNameAction;
