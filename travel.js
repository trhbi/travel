var number = [50000, 30000, 40000, 10000, 20000]//配列

number.sort(
  function (a,b){
    if(a < b)return -1;
    if(a > b)return 1;
    return 0;
  }
);//配列をソート

console.log()

function aaa(index){
  var price = number[index];
  var div = document.createElement("div");
  div.textContent = price + "円";
  div.classList.add("box" + index);
  return div;
}

function OnButtonClick() {
    var i = 0;
    var container = document.querySelector(".contents");
    while(i < number.length){
      var elm = aaa(i);
      container.appendChild(elm);
      i = i + 1;
    }
}

var APIKEY = "ffb6062385e7eb4f";
 var endpoint = "http://webservice.recruit.co.jp/ab-road-air/ticket/v1/";

function createCondition(deperture, destination){
  return {
    key: APIKEY,
    city: destination,
    dept_detail: deperture,
    ym:07,
    format: "jsonp"
  };
}

function dataLoaded(data){
  console.log(data);
  alert(data.results.ticket[0].price.min + "円")
}

function search(){
  jQuery.ajax({
    url: endpoint,
    data: createCondition("HND", "ANK"),
    dataType: "jsonp",
    success:dataLoaded
  });
}

var start = document.querySelector("#start");
start.addEventListener("click", search);
