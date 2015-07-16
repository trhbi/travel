var number = [50000, 30000, 40000, 10000, 20000];//配列

number.sort(
  function (a,b){
    if(a < b)return -1;
    if(a > b)return 1;
    return 0;
  }
);//配列をソート

var APIKEY = "ffb6062385e7eb4f";
 var endpoint = "http://webservice.recruit.co.jp/ab-road-air/ticket/v1/";

function createCondition(deperture, destination, month, cheep){
  return {
    key: APIKEY,
    city: destination,
    dept_detail: deperture,
    ym:month,
    order:cheep,
    format: "jsonp"
  };
}

function renderTicket(ticket, index){
  var elm = document.createElement("div");
  elm.textContent = ticket.price.min + "円";
  elm.classList.add("box" + index);
  return elm;
}

function compareTicket(a, b){
  return a.price.min -  b.price.min;
}

function dataLoaded(data){
  console.log(data);
  var outer = document.querySelector("#output");
  var tickets = data.results.ticket;
  tickets.sort(compareTicket); // チケットを並び替え
  var i = 0;
  while(i < tickets.length){
    outer.appendChild(renderTicket(tickets[i], i));
    i = i + 1;
  }
}

function search(){
  var a = document.getElementById("month").value;
  console.log(a);

  jQuery.ajax({
    url: endpoint,
    data: createCondition("HND", "IST", a, "1"),
    dataType: "jsonp",
    success:dataLoaded
  });
}

var start = document.querySelector("#start");
start.addEventListener("click", search);
