var customerName = "bob"

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
  return customerName
}


function setBestCustomer() {
  bestCustomer = 'not bob'
  console.log(bestCustomer)
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Prudence'

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'Maria'
}
