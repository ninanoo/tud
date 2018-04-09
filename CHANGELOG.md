v1.0.0-rc.2 (2018-04-08)
========================

  * Support stack trace for Node.js's asynchronous call by using `async_wrap` binding and `async_hooks` module
  * Add `async: { run: true, init: true }` as attribute of `nodeAsyncCallLog` and `userAsyncCallLog`
  * Add some filters for dummy callbacks like `afterWrite`, `maybeReadMore_`, `nop` and `noop` functions for asynchronous stack trace
  * Change initialization interface `require('tud').init()` to `require('tud')()`
  * Rename attribute `stdioSyncMode` of initialization options to `useStdioWriteSync`

<br/>

v1.0.0-rc.1 (2018-04-03)
========================

  * Initial release