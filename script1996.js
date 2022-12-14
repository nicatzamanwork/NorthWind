function GetterFor96() {
  axios.get("https://northwind.vercel.app/api/orders").then((response) => {
    let myData = response.data;
    console.log(myData);

    myData.forEach((element) => {
      var TrCompanyName = document.createElement("tr");
      var TdCompanyName = document.createElement("td");
      var TdContactName = document.createElement("td");
      var TdFor96 = document.createElement("td");
      var TdContactTitle = document.createElement("td");
      var TdRegion = document.createElement("td");
      var DeleteButton = document.createElement("button");

      DeleteButton.setAttribute("class", "DeleteButton");

      TdFor96.innerHTML = element.orderDate;

      TrCompanyName.innerHTML = element.customerId;
      TdContactName.innerHTML = element.employeeId;
      TdRegion.innerHTML = element.shipAddress.country;

      TrCompanyName.appendChild(TdFor96);
      TrCompanyName.appendChild(DeleteButton);
      TrCompanyName.appendChild(TdRegion);
      TrCompanyName.appendChild(TdContactTitle);
      TrCompanyName.appendChild(TdContactName);
      TrCompanyName.appendChild(TdCompanyName);
      TbodyId.appendChild(TrCompanyName);
    });
  });
}

function GetterFor97() {
  axios.get("https://northwind.vercel.app/api/orders").then((response) => {
    let myData = response.data;
    console.log(myData);

    let filteredProductsBetween = myData.filter((element) => {
      let dateOrder = new Date(element.orderDate).getFullYear();
      return dateOrder >= 1996 && dateOrder <= 1997;
    });
    console.log(filteredProductsBetween);

    myData.forEach((element) => {
      var TrCompanyName = document.createElement("tr");
      var TdCompanyName = document.createElement("td");
      var TdContactName = document.createElement("td");
      var TdFor96 = document.createElement("td");
      var TdContactTitle = document.createElement("td");
      var TdRegion = document.createElement("td");
      var DeleteButton = document.createElement("button");

      DeleteButton.setAttribute("class", "DeleteButton");

      TdFor96.innerHTML = element.orderDate;
      TrCompanyName.innerHTML = element.customerId;
      TdContactName.innerHTML = element.employeeId;
      TdRegion.innerHTML = element.shipAddress.country;

      TrCompanyName.appendChild(TdFor96);
      TrCompanyName.appendChild(DeleteButton);
      TrCompanyName.appendChild(TdRegion);
      TrCompanyName.appendChild(TdContactTitle);
      TrCompanyName.appendChild(TdContactName);
      TrCompanyName.appendChild(TdCompanyName);
      TbodyId.appendChild(TrCompanyName);
    });
  });
}
