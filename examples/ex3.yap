string html = "<div>some text</div>"

string[] func parseHTML(string html) {
  string[] result = []

  string[] arr = html.toArray()    // ["<", "d", "i", "v", ">", "s"...]

  string temp = ""

  for (string symbol in arr) {
    if (symbol == "<") {          // tag found
      int slash = arr.find("/")    // search for closing tag

      if (slash == 1) {          // if tag is closing </div>
        result.push(temp)        // push text to result
        temp = ""                // empty temp text
      }

      int index = arr.find(">")                // find closing of tag
      string tag = html.substr(0, index)      // get tag
      result.push(tag)                        // push tag in result
      html = html.substr(index)                // cut string
    } else {
      temp = temp + symbol            // if symbol is not a tag
      html = html.substr(1)            // add it to temp string
    }
  }

  return result
}

string[] parsed = parseHTML(html)    // ["<div>", "some text", "</div>"]