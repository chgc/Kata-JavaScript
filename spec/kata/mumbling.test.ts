import { accum } from '../../src/kata/Mumbling/mumbling';

function testing(st, expected) {
  expect(accum(st)).toEqual(expected);
}

describe('Fixed Tests accum', function() {
  it('Basic tests', function() {
    testing(
      'ZpglnRxqenU',
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
    );
    testing(
      'NyffsGeyylB',
      'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
    );
    testing(
      'MjtkuBovqrU',
      'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
    );
    testing(
      'EvidjUnokmM',
      'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
    );
    testing(
      'HbideVbxncC',
      'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
    );
    testing(
      'VwhvtHtrxfE',
      'V-Ww-Hhh-Vvvv-Ttttt-Hhhhhh-Ttttttt-Rrrrrrrr-Xxxxxxxxx-Ffffffffff-Eeeeeeeeeee'
    );
    testing(
      'KurgiKmkphY',
      'K-Uu-Rrr-Gggg-Iiiii-Kkkkkk-Mmmmmmm-Kkkkkkkk-Ppppppppp-Hhhhhhhhhh-Yyyyyyyyyyy'
    );
    testing(
      'NctlfBlnmfH',
      'N-Cc-Ttt-Llll-Fffff-Bbbbbb-Lllllll-Nnnnnnnn-Mmmmmmmmm-Ffffffffff-Hhhhhhhhhhh'
    );
    testing(
      'WegunHvbdmV',
      'W-Ee-Ggg-Uuuu-Nnnnn-Hhhhhh-Vvvvvvv-Bbbbbbbb-Ddddddddd-Mmmmmmmmmm-Vvvvvvvvvvv'
    );
    testing(
      'VoywwSpqidE',
      'V-Oo-Yyy-Wwww-Wwwww-Ssssss-Ppppppp-Qqqqqqqq-Iiiiiiiii-Dddddddddd-Eeeeeeeeeee'
    );
    testing(
      'VbaixFpxdcO',
      'V-Bb-Aaa-Iiii-Xxxxx-Ffffff-Ppppppp-Xxxxxxxx-Ddddddddd-Cccccccccc-Ooooooooooo'
    );
    testing(
      'OlyqvYwkuzF',
      'O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff'
    );
    testing(
      'JrhfdMtchiH',
      'J-Rr-Hhh-Ffff-Ddddd-Mmmmmm-Ttttttt-Cccccccc-Hhhhhhhhh-Iiiiiiiiii-Hhhhhhhhhhh'
    );
    testing(
      'JiwpcSwslvW',
      'J-Ii-Www-Pppp-Ccccc-Ssssss-Wwwwwww-Ssssssss-Lllllllll-Vvvvvvvvvv-Wwwwwwwwwww'
    );
    testing(
      'EagpiEvmabJ',
      'E-Aa-Ggg-Pppp-Iiiii-Eeeeee-Vvvvvvv-Mmmmmmmm-Aaaaaaaaa-Bbbbbbbbbb-Jjjjjjjjjjj'
    );
    testing(
      'RznlcEmuxxP',
      'R-Zz-Nnn-Llll-Ccccc-Eeeeee-Mmmmmmm-Uuuuuuuu-Xxxxxxxxx-Xxxxxxxxxx-Ppppppppppp'
    );
    testing(
      'OrggaExarzP',
      'O-Rr-Ggg-Gggg-Aaaaa-Eeeeee-Xxxxxxx-Aaaaaaaa-Rrrrrrrrr-Zzzzzzzzzz-Ppppppppppp'
    );
    testing(
      'DriraMtedfB',
      'D-Rr-Iii-Rrrr-Aaaaa-Mmmmmm-Ttttttt-Eeeeeeee-Ddddddddd-Ffffffffff-Bbbbbbbbbbb'
    );
    testing(
      'BjxseRxgtjT',
      'B-Jj-Xxx-Ssss-Eeeee-Rrrrrr-Xxxxxxx-Gggggggg-Ttttttttt-Jjjjjjjjjj-Ttttttttttt'
    );
    testing(
      'EquhxOswchE',
      'E-Qq-Uuu-Hhhh-Xxxxx-Oooooo-Sssssss-Wwwwwwww-Ccccccccc-Hhhhhhhhhh-Eeeeeeeeeee'
    );
  });
});

describe('Random Tests', function() {
  for (let i = 0; i < 100; i++) {
    let s1 = doEx();
    let ans = accumSol109(s1);
    it('Test : ' + i.toString() + ' s1: ' + s1 + ' --> ' + ans, function() {
      testing(s1, ans);
    });
  }
});

function randint(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function accumSol109(s) {
  function capitalize(s) {
    return s.toLowerCase().replace(/\b./g, function(a) {
      return a.toUpperCase();
    });
  }
  var a = s.split(''),
    res = '';
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < i + 1; j++) res += a[i];
    res += '-';
  }
  return capitalize(res.substr(0, res.length - 1));
}
//................

function doEx() {
  var i = 0;
  var res = '';
  while (i < 11) {
    if (i % 5 === 0) var n = randint(65, 90);
    else n = randint(97, 122);
    res += String.fromCharCode(n);
    i++;
  }
  return res;
}
