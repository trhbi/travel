var number = [50000, 30000, 40000, 10000, 20000]//配列

number.sort(
  function (a,b){
    if(a < b)return 1;
    if(a > b)return -1;
    return 0;
  }
);//配列をソート
