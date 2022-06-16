import { answer } from './answer';
import { secret } from './secret';
import { share } from './common-share';
function main() {
  const { answer } = import('./answer.js');
  const { secret } = import('./secret.js');
  console.log({
    secret,
    answer,
    share,
  });
}

main();
