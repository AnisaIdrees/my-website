let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
})
/////////////////////////////////////////////////////////////////////////////////////
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
/////////////////////////////////////////////////////////////////////////////////////



import {
  auth,
  db,
  query,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  signOut,
  
}
  from "./firebase.configure.js"















const getAllUsers = async () => {
  try {
    const ref = query(collection(db, "users"));

    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      console.log(" Snapshot received, total users:", querySnapshot.size);

      if (querySnapshot.empty) {
        console.log("⚠ No matching documents.");
        return;
      }

      let index = 1;
      const usersTable = document.getElementById("all-users");
      usersTable.innerHTML = "";

      querySnapshot.forEach((_user) => {
        let user = _user.data();
        console.log("User Data:", user);


        let statusColor = user?.isActive ? "text-success " : "text-danger ";
        let statusText = user?.isActive ? "Active" : "Blocked";

        usersTable.innerHTML += `
                    <tr>
                        <th scope="row">${index++}</th>
                        <td>${user?.firstName || "N/A"}</td>  
                        <td>${user?.lastName || "N/A"}</td>   
                        <td>${user?.email || "N/A"}</td>      
                        <td>${user?.contactInfo || "N/A"}</td>  
                        <td class="${statusColor}">${statusText}</td> 
                        <td>
                            <button type="button" onclick="updateStatus('${_user.id}', ${user?.isActive})" class="btn btn-sm btn-outline-primary">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" onclick="deleteUser('${_user.id}')" class="btn btn-sm btn-outline-danger">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                `;
      });
    });

  } catch (error) {
    console.error("Error fetching users:", error);
  }


};
window.updateStatus = async (id, currentStatus) => {
  try {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, {
      isActive: !currentStatus // Toggle active status
    });
    console.log("Status Updated Successfully");
  } catch (error) {
    console.error(" Error updating status:", error);
  }
};


///////////// delete button
window.deleteUser = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete!",
      cancelButtonText: "Cancel",
      width: "300px",
      padding: "10px",
      customClass: {
        popup: "small-popup"
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(doc(db, "users", id));
        Swal.fire({
          title: "Deleted!",
          text: "User has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          width: "250px",
        });
        console.log(" User Deleted Successfully");
      }
    });

  } catch (error) {
    console.error("Error deleting user:", error);
    Swal.fire({
      title: "Error!",
      text: "Something went wrong.",
      icon: "error",
      width: "300px",
      showConfirmButton: false,
      timer: 1500
    });
  }
};

getAllUsers();
/////////////////////////////////////// logout//////////////////////////////////////

















document.getElementById("signOut")?.addEventListener("click", async () => {
  try {
      const result = await Swal.fire({
          title: "Are you sure?",
          text: "You will be logged out!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, Logout",
          cancelButtonText: "Cancel"
      });

      if (result.isConfirmed) {
          await signOut(auth);
          Swal.fire("Logged Out!", "You have been logged out successfully.", "success");
          console.log("Logout hogya!");
          
          // Redirect agar zaroori ho toh
          window.location.href = "/index.html";
      }
  } catch (error) {
      Swal.fire("Error!", "Logout nahi hua. Please try again.", "error");
      console.log("Logout nahiiiiii hua!", error);
  }
});


// //////////////// graph///////////////////////////////
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
      duration: 2000,
      easing: 'easeInOutBounce'
  }
};

let barCtx = document.getElementById("barChart").getContext("2d");
new Chart(barCtx, {
  type: "bar",
  data: {
      labels: ["Pizza", "Pasta", "Burger", "Sushi", "Tacos"],
      datasets: [{
          label: "Favorites",
          data: [50, 40, 30, 20, 35],
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
          borderRadius: 8
      }]
  },
  options: {
      ...chartOptions,
      scales: { y: { beginAtZero: true } }
  }
});

let pieCtx = document.getElementById("pieChart").getContext("2d");
new Chart(pieCtx, {
  type: "doughnut",
  data: {
      labels: ["Pizza", "Pasta", "Burger", "Sushi", "Tacos"],
      datasets: [{
          label: "Favorite Distribution",
          data: [50, 40, 30, 20, 35],
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
          hoverOffset: 8
      }]
  },
  options: chartOptions
});

let lineCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineCtx, {
  type: "line",
  data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [{
          label: "User Engagement",
          data: [5, 15, 25, 40, 60],
          borderColor: "#36a2eb",
          backgroundColor: "rgba(54, 162, 235, 0.3)",
          fill: true,
          tension: 0.4
      }]
  },
  options: chartOptions
});