export interface IncrementCountAction {
  readonly type: 'INCREMENT';
}
export interface DecrementCountAction {
  readonly type: 'DECREMENT';
}
export type CountActions = IncrementCountAction | DecrementCountAction;
