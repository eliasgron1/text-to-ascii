const StringToAsciiCode = (string) => {
  const asciiNumArr = [...string].map(char => char.charCodeAt(0))
  const asciiNumStr = asciiNumArr.join('')
  return asciiNumStr
}

const AsciiCodeToString = (num) => {
  const numStr = num.toString()
  var asciiString = ""

  for (let i = 0; i < numStr.length; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j <= numStr.length) {
        const asciiCode = parseInt(numStr.substring(i, i + j));

        const foundChar = String.fromCharCode(asciiCode)

        if (foundChar && asciiCode > 31) {
          asciiString += foundChar
          i += j - 1
          break
        }
      }
    }
  }
  return asciiString
}


module.exports = { StringToAsciiCode, AsciiCodeToString }