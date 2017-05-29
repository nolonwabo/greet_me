describe("helloFunction", function(){
  it("should greet nolo in english", function(){
assert.equal(helloFunction('Hello, Nolo'))
  })
    it("should greet nolo in afrikaans", function(){
      assert.equal(helloFunction('Hallo, Nolo'))
    })
    it("should greet nolo in isixhosa", function(){
      assert.equal(helloFunction('Molo, Nolo'))
    })
});
