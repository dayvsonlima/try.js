# try.js
> Sexy JavaScript fault-tolerant.


```js
var output = document
                .try('querySelector', 'div')
                .try('getAttribute', 'id')
                .try('slice', 0, 5);

console.log(output);
```
