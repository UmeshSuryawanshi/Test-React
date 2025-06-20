let isIsomorphic = function (s, t) {
  console.log("Source : " + s);
  console.log("Target : " + t);
    let map = new Map();
  
    for (var i = 0; i < s.length; i++) {
      if (!map.has(s[i])) {
        map.set(s[i], t[i]);
      } else {
        if (map.get(s[i]) !== t[i]) {
          return false;
        }
      }
    }
    const iterator1 = map.values();
    
    return new Set([...iterator1]).size === map.size;
  };
  
  let test = isIsomorphic('add','agg');
  console.log("IsIsomorphic Result : " + test);