import React from "react";
import "./App.css";

// https://jsonplaceholder.typicode.com/users

function App() {
 return (
  <div>
   <div class="user-profile-card">
    <div class="profile-header">
     <h2 class="name">John Doe</h2>
    </div>
    <div class="profile-content">
     <p class="email">johndoe@example.com</p>
     <p class="address">123 Main Street, City, Country</p>
     <p class="phone">+1 123-456-7890</p>
    </div>
   </div>
  </div>
 );
}

export default App;
