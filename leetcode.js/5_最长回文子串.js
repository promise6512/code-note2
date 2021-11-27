(function () {
    function longestPalindrome(s) {
        function search(s, left, right) {
            while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
                left--;
                right++;
            }
            return [left + 1, right - 1];
        }
        var start = 0;
        var end = 0;
        //console.log(s.length)
        for (var i = 0; i < s.length, i++;) {
            var left1 = search(s, i - 1, i + 1)[0];
            var right1 = search(s, i - 1, i + 1)[1];
            var left2 = search(s, i, i + 1)[0];
            var right2 = search(s, i, i + 1)[1];
            if (right1 - left1 > end - start) {
                start = left1;
                end = right1;
            }
            if (right2 - left2 > end - start) {
                start = left2;
                end = right2;
            }
        }
        return s.slice(start, end + 1);
    }
    ;
   console.log( longestPalindrome("babad"));
})();
