# currying.js

## Usage

Currying functions

```js
var currying = require('currying')

var max5 = currying(Math.max(5))
console.log(max5(3)) // 5
console.log(max5(30)) // 30
```