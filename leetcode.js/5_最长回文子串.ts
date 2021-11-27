(function(){
  function longestPalindrome(s: string): string {
    function search(s:string,left:number,right:number):number[]{
        while(left>=0 && right<=s.length-1 && s[left]===s[right]){
            left--;
            right++;
        }
        return [left+1,right-1];
    }
    let start:number = 0;
    let end:number = 0;
    for(let i = 0;i < s.length,i++;){
        let left1 = search(s,i-1,i+1)[0];
        let right1 = search(s,i-1,i+1)[1];
        let left2 = search(s,i,i+1)[0];
        let right2 = search(s,i,i+1)[1];
        if(right1 - left1 > end - start){
            start = left1;
            end = right1
        }
        if(right2 - left2 > end - start){
            start = left2;
            end = right2
        }
    }
    return s.slice(start,end+1);
  };
  longestPalindrome("babad")
})()
