string func abc() {
    string res = "some cool text string"
    print(res)
    return res
}

int one = 1
char two = "2"

string a = " + string = WORKS!"
print(one + a)

string b = two + a
print(b)

abc()   // call some function

string c = one + two
print(c + " another cool string made from char, int and string!!!")