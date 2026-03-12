import { Params } from '../types';

export function getIsDefault(
  params: Params,
  default_params: Params
): boolean {
  return (
    params.limit === default_params.limit &&
    params.skip === default_params.skip &&
    params.grouped === default_params.grouped &&
    params.lang === default_params.lang
  );
}
