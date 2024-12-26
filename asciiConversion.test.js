const { StringToAsciiCode, AsciiCodeToString } = require("./index")


describe("ASCII Conversions", () => {
  var testText = "hello"
  var asciiCode = StringToAsciiCode(testText)
  var backToText = AsciiCodeToString(asciiCode)


  test("String to ASCII code functions", () => {
    expect(StringToAsciiCode("Hello")).toBe("72101108108111")
    expect(StringToAsciiCode("1234")).toBe("49505152")
    expect(StringToAsciiCode("!")).toBe("33")
    expect(StringToAsciiCode("a")).toBe("97")
  })

  test("Int to Ascii Char functions", () => {
    expect(AsciiCodeToString(3397)).toBe("!a")
    expect(AsciiCodeToString(72101108108111)).toBe("Hello")
  })

})