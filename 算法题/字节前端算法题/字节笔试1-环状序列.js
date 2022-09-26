// 求解环状序列的最小表示，字符串只是由ATGC四种字符串组成
// 例如：ATGCATGC的最小表示为ATGC
// 例如：ATGCATGCATGC的最小表示为ATGC
// 例如：ATGCATGCATGCATGC的最小表示为ATGC
// 例如：ATGCATGCATGCATGCATGC的最小表示为ATGC

function minRep(s) {
    var n = s.length;
    var i = 0, j = 1, k = 0;
    while (i < n && j < n && k < n) {
        var t = s[(i + k) % n].charCodeAt() - s[(j + k) % n].charCodeAt();
        if (t == 0) {
            k++;
        } else {
            if (t > 0) {
                i = i + k + 1;
            } else {
                j = j + k + 1;
            }
            if (i == j) {
                j++;
            }
            k = 0;
        }
    }
    return Math.min(i, j);
}

var s = "ATCA";
var i = minRep(s);
console.log(s.substring(i, s.length) + s.substring(0, i));


