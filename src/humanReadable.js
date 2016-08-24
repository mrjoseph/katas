
export function humanReadable(seconds) {
  let secRemainder = seconds % 60;
  let n = seconds - secRemainder;
  let mins = n / 60;
  let minsRemainder = mins % 60;
  let hours = mins / 60;

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}
return "" + pad(Math.floor(hours)) + ":" + pad(minsRemainder) + ":"+ pad(secRemainder);
  
}