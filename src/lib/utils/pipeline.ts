import { Pipeline } from '../types';

export const pipeline: Pipeline[] = [
  { $sort: { sortIndex: 1, title: 1 } }
];
