import { prizeDraw } from '../../src/kata/PrizeDraw/prize-draw';

function testing(st, we, n, expected) {
  expect(prizeDraw(st, we, n)).toEqual(expected);
}

describe('Fixed Tests', () => {
  it('Basic tests rank', function() {
    testing(
      'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
      [4, 2, 1, 4, 3, 1, 2],
      4,
      'Benjamin'
    );
    testing(
      'Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden',
      [1, 3, 5, 5, 3, 6],
      2,
      'Matthew'
    );
    testing(
      'Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth',
      [3, 1, 4, 4, 3, 2],
      4,
      'Abigail'
    );
    testing('Lagon,Lily', [1, 5], 2, 'Lagon');
    testing(
      'Elijah,Michael,Avery,Sophia,Samantha',
      [2, 1, 5, 2, 2],
      3,
      'Sophia'
    );
    testing(
      'William,Willaim,Olivia,Olivai,Lily,Lyli',
      [1, 1, 1, 1, 1, 1],
      1,
      'Willaim'
    );
    testing(
      'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
      [4, 2, 1, 4, 3, 1, 2],
      8,
      'Not enough participants'
    );
    testing('', [4, 2, 1, 4, 3, 1, 2], 6, 'No participants');
    testing('Addison,William,Jayden', [3, 5, 6], 1, 'William');
    testing('Joshua,Grace,Isabella', [1, 5, 4], 1, 'Isabella');
    testing('Elijah,Addison', [3, 6], 2, 'Elijah');
    testing('Willaim,Liam,Daniel,Alexander', [6, 4, 6, 2], 2, 'Daniel');
    testing(
      'Avery,Olivai,Sophia,Michael,Elizabeth,Willaim,Liam',
      [5, 5, 3, 2, 1, 3, 6],
      5,
      'Sophia'
    );
    testing(
      'Liam,Madison,Lyli,Jacob,Matthew,Michael',
      [2, 6, 5, 5, 3, 4],
      6,
      'Liam'
    );
    testing('Sophia,Robert,Abigail,Grace,Lagon', [1, 2, 2, 6, 4], 5, 'Sophia');
    testing('Samantha,Ella', [5, 6], 1, 'Samantha');
    testing('Aubrey,Jayden', [3, 4], 2, 'Aubrey');
    testing('Jacob,Elijah', [4, 3], 1, 'Elijah');
  });
});

describe('Random Tests', function() {
  it('Random tests', function() {
    for (var i = 0; i < 50; i++) {
      var h = randint(1, 40);
      var st = combstr(exstr, h);
      var l = st.split(',').length;
      var we = combnbr(l);
      var k = randint(1, l - 1);
      var e = JSON.stringify(we);
      //console.log("Testing Rank: " + st + ", " + e + ", " + k);
      testing(st, we, k, rankRTU(st, we, k));
    }
  });
});

function randint(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}
//...............
function compRTU(a, b) {
  var r;
  var cp = b[1] - a[1];
  if (cp === 0) {
    if (a[0] < b[0]) r = -1;
    else r = 1;
  } else {
    r = cp;
  }
  return r;
}

function ponderRTU(s, w) {
  var ss = s.toUpperCase();
  var sm = 0;
  for (var c in ss) {
    sm += 1 + ss[c].charCodeAt(0) - 'A'.charCodeAt(0);
  }
  sm += ss.length;
  return sm * w;
}

function rankRTU(st, we, n) {
  if (st === '') return 'No participants';
  var f = st.split(',');
  if (n > f.length) return 'Not enough participants';
  var res = f
    .map(function(e, i) {
      return [f[i], ponderRTU(f[i], we[i])];
    })
    .sort(compRTU);
  return res[n - 1][0];
}
//...............
var exstr =
  'Sophia,Jacob,Isabella,Mason,Emma,William,Willaim,Olivia,Olivai,Jayden,Ava,Noah,Naoh,Emily,Michael,Abigail,Ethan,Madison,';
exstr +=
  'Alexander,Mia,Aiden,Chloe,Daniel,Elizabeth,Robert,Ella,Matthew,Addison,Elijah,Natalie,Joshua,Lily,Lyli,Liam,Grace,Andrew,Samantha,';
exstr +=
  'James,Avery,David,Sofia,Benjamin,Aubrey,Logan,Lagon,xxxxx,yyyyy,zzzzz';

function combstr(s, n) {
  var res = '';
  var f = s.split(',');
  var nb = [];
  var i = 0;
  while (i < n) {
    var h = randint(0, 44);
    if (nb.indexOf(h) === -1) {
      nb.push(h);
      res += f[h] + ',';
    }
    i++;
  }
  return res.slice(0, -1);
}
function combnbr(n) {
  var res = [];
  var i = 0;
  while (i < n) {
    var h = randint(1, 6);
    res.push(h);
    i++;
  }
  return res;
}
