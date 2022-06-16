const share = 'share';

function main() {
  const { answer } = import('./answer-e6f63c6c.js');
  const { secret } = import('./secret-4d03b3ab.js');
  console.log({
    secret,
    answer,
    share,
  });
}

main();

export { share as s };
