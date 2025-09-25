<script setup>
 const menuItem={
    
        name: "Cake",
        image:"/images/menu/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
        price:250,
     description:'strawberry cake piece',
        category:'snack'
        
    }
  
</script>

<template>
<v-container fluid class="d-flex fill height" align="centre">
    <v-row>

        <v-col md="6">

            <v-card  class="pa-6 rounded-lg" justify="centre">

             <v-img :src="menuItem.image" cover height="500"></v-img>

       </v-card>

        </v-col>
          <v-col md="6">
             <v-card  class="pa-6 rounded-lg" justify="centre">

              <v-card-title>{{ menuItem.name }}</v-card-title>
              <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
              <v-card-text>{{ menuItem.description }}</v-card-text>
              <v-card-text>Quantity<v-text-field></v-text-field></v-card-text>
              <v-card-actions>
                <v-btn color="teal-lighten-1">Order</v-btn>
              </v-card-actions>

             </v-card>

        </v-col>

    </v-row>

</v-container>

</template>
