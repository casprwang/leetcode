/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = n => {
    let ugly = [1,...Array(n-1).fill(0)]
    let f2=0,f3=0,f5=0
    for(var i=1; i<n; i++){
        var min = Math.min.apply(Math, [2*ugly[f2],3*ugly[f3],5*ugly[f5]]);
        ugly[i] = min;
        if (2*ugly[f2] === min) f2++
        if (3*ugly[f3] === min) f3++
        if (5*ugly[f5] === min) f5++
    }
    return ugly[n-1]
}