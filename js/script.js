
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.updateBalance = function(deposit, withdraw) {
  this.balance += deposit;
  this.balance -= withdraw;
}


var acc = new Account();
var accs = [];



$(document).ready(function() {
  $("#formNewAccount").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val(); 
    var initDeposit = parseInt($("#initDeposit").val());

    acc = new Account(name, initDeposit);
    accs.push(acc);  
    $("#currentBalance").text("$" + acc.balance);
    $("#nameShow").text(acc.name);
    $("#name").val("");
    $("#initDeposit").val("");
    $(".output").show();

    $("#radio-" + acc.name).last().click(function(event) {
      var test = $("input:radio[name=accounts]:checked").val();
     
      for (var i = 0; i < accs.length; i++) {
        if (accs[i].name === test) {
          $("#currentBalance").text("$" + accs[i].balance);
          $("#nameShow").text(accs[i].name);
          $("#name").val("");
          $("#initDeposit").val("");
          $(".output").show();
        } 
      }
    });  
  }) 

  $("#formWithDep").submit(function(event) {
    event.preventDefault();
    var accountName = $("#accountName").val();
    var deposit = $("#deposit").val(); 
    var withdraw = $("#withdraw").val();

    if (deposit === "") { 
      deposit = 0;
    } else {
      deposit = parseInt(deposit);
    }

    if (withdraw === "") {
      withdraw = 0;
    } else {
      withdraw = parseInt(withdraw);
    }

    for (var i = 0; i < accs.length; i++) {
      if (accs[i].name === accountName) {
        accs[i].updateBalance(deposit, withdraw);
      }
    }

    //output
    $("#deposit").val("");
    $("#withdraw").val("");


  });

  

});