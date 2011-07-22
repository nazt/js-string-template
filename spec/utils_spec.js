describe("Utilities Object", function() {
  it("should be a object", function() {
    expect("object").toEqual(typeof NAzT);
  });
  it("has Object property.", function() {
    expect(true).toEqual(NAzT.hasOwnProperty('Object'));
  });
  describe("NAzT.Object", function() {
    it("has toArray property.", function() {
      expect(true).toEqual(NAzT.Object.hasOwnProperty('toArray'));
    });
    describe("test with numeric key", function() {
      it("should return [1].", function() {
        expect([1]).toEqual(NAzT.Object.toArray({0: 1}));
      });
      it("should return [1, 2].", function() {
        expect([1, 2]).toEqual(NAzT.Object.toArray({0: 1, 1: 2}));
      });
      it("should return [1, 2, 3].", function() {
        expect([1, 2, 3]).toEqual(NAzT.Object.toArray({0: 1, 1: 2, 2: 3}));
      });
      it("should return [1, 2, 3].", function() {
        expect([1, 2, 3]).toEqual(NAzT.Object.toArray({2: 3, 1: 2, 0: 1}));
      });
    })
    describe("test with numeric-string key", function() {
      it("should return [1].", function() {
        expect([1]).toEqual(NAzT.Object.toArray({'0': 1}));
      });
      it("should return [1, 2].", function() {
        expect([1, 2]).toEqual(NAzT.Object.toArray({'0': 1, '1': 2}));
      });
      it("should return [1, 2, 3].", function() {
        expect([1, 2, 3]).toEqual(NAzT.Object.toArray({'0': 1, '1': 2, '2': 3}));
      });
      it("should return [1, 2, 3].", function() {
        expect([1, 2, 3]).toEqual(NAzT.Object.toArray({'2': 3, '1': 2, '0': 1}));
      });
    })
    describe("test object noncontinuous key", function() {
      it("should return false", function() {
        expect(false).toEqual(NAzT.Object.toArray({'2': 3, '0': 1}));
      });
    });
  });
});
