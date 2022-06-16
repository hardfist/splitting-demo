## input

- index.js: module in main chunk
- async-a: module in async chunk
- async-b: moudle in async chunk
- async-share: common module shared by async chunk
- common-share: common module shared by async chunk and main chunk

## output

- index.js: contains index.js and common-share.js
- async-b-xxx: async-b module
- async-a-xxx: async-a module
- async-share: common module shared by async chunk
