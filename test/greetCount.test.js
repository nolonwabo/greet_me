describe("countNames", function(){
  it("should return number of namesGreeted", function(){
    assert.equal(countNames("Onwaba"), 1);
  });

  it("should return number of namesGreeted", function(){

    countNames("nolo");
    countNames("Andy");

    assert.equal(countNames("nolo"), 3);
  })
});
