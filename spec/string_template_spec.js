describe("template function", function() {
  it("should be a function.", function() {
    expect("function").toEqual(typeof string_template);
  });
  describe("single string parameter.", function() {
    it("should be Hello, NAzT.", function() {
      expect("Hello, NAzT").toEqual(string_template("Hello, ${0}", "NAzT"));
    });
    it("should be Hello, World.", function() {
      expect("Hello, World").toEqual(string_template("Hello, ${0}", "World"));
    });
    it("should be Hi, NAzT.", function() {
      expect("Hi, NAzT").toEqual(string_template("Hi, ${0}", "NAzT"));
    });
    it("should be undefined.", function() {
      expect(undefined).toEqual(string_template("Hi, ${1}", "NAzT"));
    });
    it("should be undefined.", function() {
      expect(undefined).toEqual(string_template("Hi, ${1} ${2}", "NAzT"));
    });
    it("should be Hi, NAzT.", function() {
      expect("Hi, NAzT").toEqual(string_template("Hi, ${0} ${1}", "NAzT"));
    });
  });
  describe("single string in Array", function() {
    it("should be Hello, NAzT.", function() {
      expect("Hello, NAzT").toEqual(string_template("Hello, ${0}", ["NAzT"]));
    });
    it("should be Hello, World.", function() {
      expect("Hello, World").toEqual(string_template("Hello, ${0}", ["World"]));
    });
    it("should be Hi, NAzT.", function() {
      expect("Hi, NAzT").toEqual(string_template("Hi, ${0}", ["NAzT"]));
    });
    it("should be undefined.", function() {
      expect(undefined).toEqual(string_template("Hi, ${1}", ["NAzT"]));
    });
    it("should be undefined.", function() {
      expect(undefined).toEqual(string_template("Hi, ${1} ${2}", ["NAzT"]));
    });
    it("should be Hi, NAzT.", function() {
      expect("Hi, NAzT").toEqual(string_template("Hi, ${0} ${1}", ["NAzT"]));
    });
    it("should be Hi, NAzT.", function() {
      expect(undefined).toEqual(string_template("Hi, ${0} ${1}", [undefined, "NAzT"]));
    });
  });
  describe("string in Object [test in single]", function() {
    it("should be Hello, NAzT.", function() {
      expect("Hello, NAzT").toEqual(string_template("Hello, ${0}", {0: "NAzT"}));
    });
    it("should be Hello, World.", function() {
      expect("Hello, World").toEqual(string_template("Hello, ${0}", {0: "World"}));
    });
    it("should be Hi, NAzT.", function() {
      expect("Hi, NAzT").toEqual(string_template("Hi, ${0}", {0: "NAzT"}));
    });
    it("should be undefined.", function() {
      expect(undefined).toEqual(string_template("Hi, ${1}", {0: "NAzT"}));
    });
    it("should be undefined.", function() {
      expect(undefined).toEqual(string_template("Hi, ${1} ${2}", {0: "NAzT"}));
    });
    it("should be Hi, NAzT.", function() {
      expect(undefined).toEqual(string_template("Hi, ${0} ${1}", {1: "NAzT"}));
    });
    it("should be Hello, NAzT.", function() {
      expect("Hello, NAzT").toEqual(string_template("Hello, ${0} ${1}", {2: "2NAzT2", 1: "1NAzT", 0: "NAzT"}));
    });
  });
});
