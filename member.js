function memberAux(item, arr, {key = x => x, test = (x, y) => x === y}) {
  return arr.some(arrElm => test(item, key(arrElm)));
}

export default function memberAux(item, arr, {key = x => x, test = (x, y) => x === y}) {
    return arr.some(arrElm => test(item, key(arrElm)));
}