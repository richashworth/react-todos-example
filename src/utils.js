export function removeElemFromArr(elem, arr) {
  var arr0 = arr;
  let index = arr.indexOf(elem);
  if(index > -1){
    arr.splice(index, 1);
  }
  return arr0;
}
