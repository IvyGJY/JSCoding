Array.prototype.uniq = function () {
    var arr = [];
    var flag = true;
    for (var i=0; i<this.length;i++){
        if (arr.indexOf(this[i]) == -1){
           if(this[i] != this[i]){
                if(flag){
                    arr.push(this[i]);
                    flag = false;
                }
           }else{
            arr.push(this[i]);
           }     
        } 
    }
    return arr;
}

// // ES6
// Array.prototype.uniq = function () {
//     return Array.from(new Set(this));
// }

var ori = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
console.log(ori.uniq());



