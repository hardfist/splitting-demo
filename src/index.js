import { answer } from './async-a';
import { secret } from './async-b';
import { common_share } from './common-share';
function main() {
  const { answer } = import('./async-a.js');
  const { secret } = import('./async-b.js');
  console.log({
    secret,
    answer,
    common_share,
  });
}

main();
