const common_share = 'common_share';

function main() {
  const { answer } = import('./async-a-d46a7dce.js');
  const { secret } = import('./async-b-94e384e4.js');
  console.log({
    secret,
    answer,
    common_share,
  });
}

main();

export { common_share as c };
