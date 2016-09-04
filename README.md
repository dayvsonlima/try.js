# try.js
> Sexy JavaScript fault-tolerant.


```js
var output = document
                .try('querySelector', 'div')
                .try('getAttribute', 'id')
                .try('slice', 0, 5);

console.log(output);
```

## Install

Bower

```
bower install tryjs --save
```

## Setup

Include the script located on the `dist` folder.

```html
<script src="dist/try.min.js"></script>
```
