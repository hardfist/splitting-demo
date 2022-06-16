import { share } from './common-share';
import { chunk_share } from './chunk-share';
export const secret = 43 + share + chunk_share;
