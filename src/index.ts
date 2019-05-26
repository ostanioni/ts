import sayHi from './fMod'
console.log('Hello fom TS');
sayHi('1');
interface first {
  propOne: number,
  propTwo: string,
}
function hjg(x: first): first {
  let o = {
    propOne: x.propOne + 1,
    propTwo: x.propTwo + '',
  };
  return o;
}
hjg({ propOne: 5, propTwo: 'djk' })