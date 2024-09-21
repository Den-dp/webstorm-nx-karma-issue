function sum(a, b) {
  return a + b;
}

describe("math", () => {
  it("sum integers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("sum doubles", () => {
    expect(sum(0.1, 0.2)).not.toBe(0.3);
  });
});
