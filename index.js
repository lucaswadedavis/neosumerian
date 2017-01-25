function neosumerian(n) {
  if (n === 0) return 'o';
  const str = [];
  if (n < 0) {
    str.push('a');
    n *= -1;
  }
  const c = [
    'b',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'r',
    's',
    't',
    'v',
    'w',
    'y',
    'z',
    'sh',
    'th'
  ];

  const v = ['a', 'i', 'u'];

  while (n > 0) {
    str.push(c[n % 20] + v[n % 3]);
    n = Math.floor(n / 60);
  }

  return str.join('');
};
