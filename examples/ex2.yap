string text = "This text will be ciphered"

string[] shuffledAlphabet =  ["C", "5", "E", "I", "#", "L", "J", "G", "A",
                              "1", "P", "&", "@", "H", "8", "X", "W", "0",
                              "9", "K", "V", "R", "Z", "S", "D", "6", "O",
                              "4", " ", "3", "T", "F", "?", "B", "M", "N",
                              "$", "2", "%", "Y", "U", "7", "Q"]

string[] alphabet =           ["#", "$", "%", "&", "?", "@", "0", "1", "2",
                              "3", "4", "5", "6", "7", "8", "9", "A", "B",
                              "C", "D", "E", "F", "G", "H", "I", "J", "K",
                              "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                              "U", "V", "W", "X", "Y", "Z", " "]

string func cipher(string textToCipher) {
  string result = ""
  string[] arr = textToCipher.toUpperCase().toArray()      // ["T", "H", "I", "S", " ", "T", "E"...]

  for (string symbol in arr) {
    int index = alphabet.find(symbol)                      // T -> N, H -> S...
    result = result + shuffledAlphabet[index]
  }

  return result    // "NSDMQNVYNQ%D44Q0VQ9DFSVBVK"
}

string func decipher() {
  string result = ""
  string[] arr = textToCipher.toUpperCase().toArray()      // ["N", "S", "D", "M", "Q", "N", "V"...]

  for (string symbol in arr) {
    int index = shuffledAlphabet.find(symbol)              // N -> T, S -> H...
    result = result + alphabet[index]
  }

  return result
}

string ciphered = cipher(text) // "NSDMQNVYNQ%D44Q0VQ9DFSVBVK"

string original = decipher(ciphered) // "THIS TEXT WILL BE CIPHERED"