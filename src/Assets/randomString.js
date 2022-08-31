export function randomStr(arr) {
    var ans = '';
    for (var i = 16; i > 0; i--) {
        ans +=
            arr[Math.floor(Math.random() * arr.length)];
    }

    return ans[0] + ans[1] + ans[2] + ans[3] + "-" + ans[4] + ans[5] + ans[6] + ans[7] + "-" + ans[8] + ans[9] + ans[10] + ans[11] + "-" + ans[12] + ans[13] + ans[14] + ans[15]
}