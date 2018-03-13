function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; musicians[i]; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array
}

function johnLennonFacts(facts){
  while (facts[i]) {
  facts[i] += "!!!"
  }
return facts
}

function iLoveTheBeatles(number) {
  var array = []
    do {
      array.push("I love the Beatles!")
        number++
    } while (number < 15)
    return array
}
