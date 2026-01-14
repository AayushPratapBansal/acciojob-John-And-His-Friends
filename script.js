function PrintDeveloperbyMap() {
  arr.map(emp => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(emp => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  let result = arr.filter(emp => emp.profession !== "admin");
  console.log(result);
}

function concatenateArray() {
  let newArr = [
    { id: 5, name: "alex", age: "22", profession: "developer" },
    { id: 6, name: "bob", age: "21", profession: "intern" },
    { id: 7, name: "emma", age: "23", profession: "admin" },
  ];

  let finalArr = arr.concat(newArr);
  console.log(finalArr);
}
