

function initializer(){
    document.getElementById("customer").style.display="none";
    document.getElementById("stock").style.display="none";
    document.getElementById("transaction").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("customer-button").setAttribute("class","nav-link");
    document.getElementById("dashboard-button").setAttribute("class","nav-link");
    document.getElementById("stock-button").setAttribute("class","nav-link");
    document.getElementById("transaction-button").setAttribute("class","nav-link");
}

function customerClick(){
    initializer();
    document.getElementById("customer").style.display="block";
    document.getElementById("customer-button").setAttribute("class","nav-link active");
}

function dashboardClick(){
    initializer();
    document.getElementById("dashboard").style.display="block";
    document.getElementById("dashboard-button").setAttribute("class","nav-link active");
}

function stockClick(){
    initializer();
    document.getElementById("stock").style.display="block";
    document.getElementById("stock-button").setAttribute("class","nav-link active");
}

function transactionClick(){

}

function addToCartClick(){
    document.getElementById("grandTotal").innerText="RS. 750.00";
    totalChange();
}

function totalChange(){
    console.log("total changed");
    document.getElementById("payButton").innerText+=" ("+document.getElementById("grandTotal").innerText+")"
}

// Customer Table adding when click the save button.
function addCustomerDataToTable(){
    var name = $("#customerName").val();
    var code = $("#customerCode").text();
    var nic = $("#customerNic").val();
    var tel = $("#customerTel").val();
    
    console.log(name+" "+code+" "+nic+" "+tel); 

    $("tbody").append(
        "<tr>" + 
        "<th scope=\"row\">"+ code +"</th>" + 
        "<td>" + name + "</td>" + 
        "<td>" + nic + "</td>" + 
        "<td>" + tel + "</td>"  +
        "</tr>"
    );
}
