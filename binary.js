var addBinary = function(a, b) {
    let carry =0;
     let ans = "";
     for(let i = a.length-1,j = b.length-1;i>=0||j>=0||carry; i--,j-- ){

        let sum = carry;

            if(i>=0){
                sum +=Number(a[i]);
            }
            if(j>=0){
                 sum +=Number(b[j]);
            }

            ans = (sum%2)+ans;
            carry = Math.floor(sum/2);

     }

return ans;
    

    
};
