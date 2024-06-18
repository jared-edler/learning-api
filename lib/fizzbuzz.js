function fizzbuzz(parameter) {
  if(parameter % 15 == 0){
    return "fizzbuzz"
  }

  if(parameter % 3 == 0){
    return "fizz"
  } 

  if(parameter % 5 == 0){
    return "buzz"
  }

  if(typeof parameter == "string"){
    return("Error, you have entered a string!!!")
  }
  
  return parameter
}

module.exports = fizzbuzz;