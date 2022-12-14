let TbodyId = document.getElementById("TbodyId");

function Poster() {
  axios
    .post("https://northwind.vercel.app/api/categories")
    .then(function (response) {
      console.log(response);
      alert("Posted Successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
}
var DeleteButton = document.createElement("button");
function Getter() {
  axios.get("https://northwind.vercel.app/api/suppliers").then((response) => {
    let myData = response.data;
    console.log(myData);

    myData.forEach((element) => {
      var TrCompanyName = document.createElement("tr");
      var TdCompanyName = document.createElement("td");
      var TdContactName = document.createElement("td");

      var TdContactTitle = document.createElement("td");
      var TdRegion = document.createElement("td");

      TrCompanyName.innerHTML = element.companyName;
      TdContactName.innerHTML = element.contactName;
      TdContactTitle.innerHTML = element.contactTitle;
      TdRegion.innerHTML = element.address?.country;

      TrCompanyName.appendChild(DeleteButton);
      TrCompanyName.appendChild(TdRegion);
      TrCompanyName.appendChild(TdContactTitle);
      TrCompanyName.appendChild(TdContactName);
      TrCompanyName.appendChild(TdCompanyName);
      TbodyId.appendChild(TrCompanyName);
    });
  });
}

function myRegion() {
  for (let i = 0; i < countries.length; i++) {
    var x = document.getElementById("optionValue").options[i].value;
    document.getElementById("demo").innerHTML = x;
  }
}
function Delete(id) {
  axios
    .delete(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then((res) => {
      console.log(res.data.id);
    });
}

function Updater() {
  axios.get("https://northwind.vercel.app/api/suppliers").then((response) => {
    let myData = response.data;
  });
}
