<script setup>
const isLoggedIn = JSON.parse(localStorage.getItem( "isLoggedIn"))
const isAdmin=true
</script>

<template>
      <v-app-bar color="teal-lighten-1">
        <v-app-bar-title>Kula Kwa Wingi</v-app-bar-title>
            <v-btn to="/">Home</v-btn>
            <v-btn to="/Menu">Menu</v-btn>
            <v-btn to="/Orders" v-if="isLoggedIn">My Orders</v-btn>
            <v-btn to="/Reservation"> Reservation</v-btn>
             <v-btn to="/Contactus">Contact us</v-btn>
          
                <v-btn to="/Admin"  v-if="isLoggedIn">Admin</v-btn>
            <v-avatar to="/UserProfile" v-if="isLoggedIn && isAdmin"><span class="text-h5 text-white">A</span>
            </v-avatar>

            <v-btn to="/Login"v-els>Login</v-btn>
           
      </v-app-bar>
</template>
