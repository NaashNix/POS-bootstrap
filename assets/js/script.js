var z =jQuery.noConflict();
initializer()
z("#POSDashboard").css("display", "block");
z("#posButton").attr("class", "nav-link active");

// Making Customer and Item arrys.
const customers = [];
const items = [];

function initializer() {
    document.getElementById("customerPage").style.display = "none";
    document.getElementById("itemListPage").style.display = "none";
    // document.getElementById("sample").style.display="none";
    document.getElementById("POSDashboard").style.display = "none";
    document.getElementById("posButton").setAttribute("class", "nav-link");
    document.getElementById("customerButton").setAttribute("class", "nav-link");
    document.getElementById("reportButton").setAttribute("class", "nav-link");
    document.getElementById("stockButton").setAttribute("class", "nav-link");
}

function customerClicked() {
    initializer();
    document.getElementById("customerPage").style.display = "block";
    document.getElementById("customerButton").setAttribute("class", "nav-link active");
}

function posClicked() {
    initializer();
    document.getElementById("POSDashboard").style.display = "block";
    document.getElementById("posButton").setAttribute("class", "nav-link active");
}

function stockClicked() {
    initializer();
    document.getElementById("itemListPage").style.display = "block";
    document.getElementById("stockButton").setAttribute("class", "nav-link active");
}

function reportClicked() {
    // initializer();
    // document.getElementById("sample").style.display="block";
    // document.getElementById("reportButton").setAttribute("class","nav-link active");
}

function customerFormValidation(){
    const customerName = "([A-z])\w+"
    const customerAddress = "^[a-zA-Z0-9\s,'/-]*$"
    const email = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/</>"

    const cName = z("#customerName").val();

    if (cName.match(cName)) {
        
    }else {
        
    }

}  



// function dashboardClick(){
//     initializer();
//     document.getElementById("dashboard").style.display="block";
//     document.getElementById("dashboard-button").setAttribute("class","nav-link active");
// }

// function stockClick(){
//     initializer();
//     document.getElementById("stock").style.display="block";
//     document.getElementById("stock-button").setAttribute("class","nav-link active");
// }

// function transactionClick(){

// }

// function addToCartClick(){
//     document.getElementById("grandTotal").innerText="RS. 750.00";
//     totalChange();
// }

// function totalChange(){
//     console.log("total changed");
//     document.getElementById("payButton").innerText+=" ("+document.getElementById("grandTotal").innerText+")"
// }

// // Customer Table adding when click the save button.
// function addCustomerDataToTable(){

//     $("#customerTable tr").off('click');

//     var name = $("#customerName").val();
//     var code = $("#customerCode").text();
//     var nic = $("#customerNic").val();
//     var tel = $("#customerTel").val();

//     console.log(name+" "+code+" "+nic+" "+tel); 

//     $("tbody").append(
//         "<tr>" + 
//         "<th scope=\"row\">"+ code +"</th>" + 
//         "<td>" + name + "</td>"  + 
//         "<td>" + nic + "</td>" + 
//         "<td>" + tel + "</td>"  +
//         "</tr>"
//     );


//     $("#customerTable tr").click(function () {
//         let custId = $(this).children(":eq(0)").text();
//         let custName = $(this).children(":eq(1)").text();
//         let custAddress = $(this).children(":eq(2)").text();
//         let custTp = $(this).children(":eq(3)").text();

//         console.log(custId, custName, custAddress, custTp);
//     });

// }   

// $("#customerTable tr").click(function () {
//     let custId = $(this).children(":eq(0)").text();
//     let custName = $(this).children(":eq(1)").text();
//     let custAddress = $(this).children(":eq(2)").text();
//     let custTp = $(this).children(":eq(3)").text();

//     console.log(custId, custName, custAddress, custTp);
// }); 

// var customerDB;
// var customerObject;

// $("#customerSave").click(function(){
//     customerObject = 
//     customerDB.unshift()
// })


// ------------------------------

function customerSave() {

    if (z("#customerName").val() == "") {
        // console.log("Please Enter Customer Name");
        z("#customerName").css({
            'border' : '3px solid red'
         });

        alert("Please Enter Valid Name");

    } else if (z("#customerAddress").val() == "") {
        console.log("Please Enter Customer Address");

    } else if (z("#customerTelephone").val()=="") {
        console.log("Please Enter Telephone Number");
    } else if (q("#customerEmail").val()=="") {
        console.log("Please Enter Customer Email");
    } else {
        console.log("No Problem");
        let customer = {
            name: q("#customerName").val(),
            address: q("#customerAddress").val(),
            telephone: q("#customerTelephone").val(),
            email: q("#customerEmail").val(),
            account: "Gold"
        };

        customers.push(customer);
    }

    console.log(customers[0].name);



}

function clearCustomerAddForm() {
    console.log("Cleared");
    q("#customerEmail").val("");
    q("#customerAddress").val("");
    q("#customerTelephone").val("");
    q("#customerName").val("");
}

