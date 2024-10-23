declare global {
  function myFunc(): boolean;
  var myVar: number;
}

globalThis.myFunc = () => true;
globalThis.myVar = 1;
