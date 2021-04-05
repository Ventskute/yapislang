string[] LABELS = ["_MAIN", "_GALLERY", "_SETTINGS", "_AUTHORS", "EXTRA"];

char func getFirstChar(string textValue) {               // example of type coercion (typecasting)
  char part = (char)textValue.substr(0, 1)
  return part
}

string func capitalize(string label) {                     // example of capitalizing ('SOME' -> 'Some' or 'some' -> 'Some')
  string newLabel = label.substr(0, 1).toUpperCase() + label.substr(1).toLowerCase()
  return newLabel
}

string func getMenuItems(string[] labels) {                // example of conditions, equations and array append
  string menuLabels = []

  for (string label in labels) {                    // iterate through array
    if (getFirstChar(label) == (char)"_") {         // equate chars to match condition
      menuLabels.push(capitalize(label.substr(1)))  // push to an array
    }
  }

  return menuLabels
}

string[] menuLabels = getMenuItems(LABELS)
// ['Main', 'Gallery', 'Settings', 'Authors']