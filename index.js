 var katzDeliLine = [];
function takeANumber (katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(x){
  if(x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let name = x[0];
    x.slice(0)
    return `Currently serving ${name}.`
  }
}
function currentLine (x) {
  let line = [];
  if(x.length === 0) {
    return "The line is currently empty."
  } else {
    for(let i=0;i<x.length;i++) {
      line += (i+1) + ". " + x[i] + ", "
    }
    line = line.slice(0,-2)
    return `The line is currently: ${line}`
  }
}