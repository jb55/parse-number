
# parse-number

  Normalize number parsing, always return `NaN` or `Number`

  [![Build Status](https://travis-ci.org/jb55/parse-number.png)](https://travis-ci.org/jb55/parse-number)

  [![browser support](https://ci.testling.com/jb55/parse-number.png)](https://ci.testling.com/jb55/parse-number)

## Installation

  Install with npm

    $ npm install parse-number

  Install with component

    $ component install jb55/parse-number

## API

### parseNumber(any)

*always* returns a `Number` or `NaN`

### parseNumber.str(any except `Array`)

*always* returns a `Number` or `NaN`

Simpler check if you know you dont have an array

## Example

```js
var parseNumber = require('parse-number')

parseNumber(null) // NaN
parseNumber(undefined) // NaN
parseNumber("") // NaN
parseNumber("0") // == 0
parseNumber(123) // == 123
parseNumber("1.2234") // == 1.2234
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
