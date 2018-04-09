tests({

  // Fill this in with your test cases

  'two numbers starting with 0': function() {
    eq("110", binary_addition(03, 03));
  },
  'one of them starts with 0': function() {
  	eq("100", binary_addition(000002, 2));
  },
  'two positive numbers': function() {
  	eq("100", binary_addition(2, 2));
  },
  'two negative numbers': function() {
  	eq("-100", binary_addition(-2, -2));
  },
  'one positive, one negative': function() {
  	eq("-1", binary_addition(2, -3));
  }

});