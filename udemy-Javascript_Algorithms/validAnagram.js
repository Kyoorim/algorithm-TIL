// validAnagram ("", "") // true
// validAnagram("aaz", "zza") // false
// validAnagram("anagram", "nagaram") // true
// validAnagram("awesome", "awesom") // false

function validAnagram(first, second) {
  // add whatever parameters you deem necessary - good luck!
  if (first.length !== second.length) {
    return false;
  }

  const obj = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    obj[letter] ? obj[letter]++ : (obj[letter] = 1);
    // obj = {a: 3, n: 1, g: 1, r: 1, m: 1}
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // obj에 알파벳이 없다는 얘기이므로 바로 false 리턴
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }
  return true;
}
