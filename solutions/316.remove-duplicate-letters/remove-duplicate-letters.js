/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    // start with replacing with empty space, will optimize later
    function createMap(s, start, vis) {
        let m = new Map();        
        for (let i = start, count; i < s.length; ++i) {
            if (vis.has(s[i])) continue;
            count = m.get(s[i]) || 0;
            m.set(s[i], count + 1);
        }        
        return m;
    }
    // 
    let vis = new Set();    
    let pos = 0;
    let res = '';
    let oldMap = createMap(s, 0, vis);
    
    while (pos < s.length) {
        if (vis.has(s[pos])) {
            ++pos;
            continue;
        }
        let m = createMap(s, pos, vis);
        for (let i = pos, count; i < s.length; ++i) {
            if (vis.has(s[i])) continue;
            if (s[i] < s[pos]) {
                pos = i;
            }
            count = m.get(s[i]) - 1;
            m.set(s[i], count);
            if (count === 0) break;
        }
        if (!vis.has(s[pos])) {
            vis.add(s[pos]);
            res += s[pos];
        }
        ++pos;
    }
    return res;
    
};