# Neosumerian

Obviously this isn't really Sumerian, but it is an expression of how lovely a base-60 numeral system can be.

The important bit is `index.js` which is just a function called `neosumerian` which takes an int and returns a string for that int such that

0   -> o
1   -> di
2   -> fu
3   -> ga
4   -> hi
5   -> ju
6   -> ka
12  -> sa
24  -> ha
64  -> dihi

negatives are prefixed by `a` so

-1  -> adi
-4  -> ahi
-64 -> adihi

etc...

### License MIT
