

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