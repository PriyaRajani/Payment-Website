document.getElementById("trainForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let date = document.getElementById("date").value;

  if (from && to && date) {
      // Dummy train data
      const trains = [
          { no: "78654", name: "rajkot Express", time: "04:30 AM", cost: "₹ 200" },
          { no: "54876", name: "ahmedabad Express", time: "10:15 AM", cost: "₹ 250" },
          { no: "25312", name: "rajkot Passenger", time: "15:50 PM", cost: "₹ 300" },
          { no: "45698", name: "ahmedabad Passenger", time: "21:30 PM", cost: "₹ 350" },
          { no: "95464", name: "rajkot - ahmedabad Super Fast Train", time: "23:15 PM", cost: "₹ 500" }
      ];

      let trainTable = document.getElementById("trainData");
      trainTable.innerHTML = "";

      // Populate train data in table
      trains.forEach(function(train) {
          let row = document.createElement("tr");
          row.innerHTML = `
              <td>${train.no}</td>
              <td>${train.name}</td>
              <td>${train.time}</td>
              <td>${train.cost}</td>
          `;
          trainTable.appendChild(row);

          // Add event listener to each row
          row.addEventListener("click", function() {
              // Remove 'selected' class from other rows
              document.querySelectorAll("#trainData tr").forEach(function(tr) {
                  tr.classList.remove("selected");
              });
              // Add 'selected' class to this row
              row.classList.add("selected");

              // Enable "Book Now" button
              document.getElementById("bookNow").removeAttribute("disabled");
              document.getElementById("bookNow").classList.remove("hidden");
          });
      });

      // Show the train table
      document.getElementById("trainList").classList.remove("hidden");
  } else {
      alert("Please fill out all fields.");
  }
});

document.getElementById("bookNow").addEventListener("click", function() {
  // Hide train list and show class selection
  document.getElementById("trainList").classList.add("hidden");
  document.getElementById("classSelection").classList.remove("hidden");
});

// Optional: Add event listeners for selecting class
document.querySelectorAll(".class-box").forEach(function(box) {
  box.addEventListener("click", function() {
      alert(`You selected ${this.textContent} class!`);
  });
});
