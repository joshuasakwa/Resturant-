<script setup>
import { provideSelection } from 'vuetify/lib/components/VDataTable/composables/select';


const menu={
    0:{
        name: "Cake",
        image:"/images/menu/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
        price:250,
     description:'strawberry cake piece',
        category:'snack'
        
    },

      1:{
        name:'friedRice',
        image:'/images/menu/annie-spratt-Pk6nuEXu_Lo-unsplash.jpg',
        price:480,
        description:'FriedRice',
        category:'food'
    },

     2:{
        name:'Pizza',
        image:'/images/menu/chad-montano-MqT0asuoIcU-unsplash.jpg',
        price:1200,
        description:'pizza large',
        category:"snack"
    },

     3:{
        name:'Spaghetti',
        image:'/images/menu/danijela-prijovic-qits91IZv1o-unsplash.jpg',
        price:275,
        description:'Italian spaghetti ',
        category:'food'
    },
     4:{
         name:'Noodles',
        image:'/images/menu/ikhsan-baihaqi-pbc2wXbQYpI-unsplash.jpg',
        price: 355,
        description:'instant Noodles',
        category:'food'
    },

     5:{
        name:'Cake',
        image:'/images/menu/jacob-thomas-6jHpcBPw7i8-unsplash.jpg',
        price:800,
        description:'Black forest cake',
        category:'Snack'
    },

     6:{
        name:'Burger',
        image:'/images/menu/mae-mu-I7A_pHLcQK8-unsplash.jpg',
        price:220,
        description:'Burger',
        category:'Snack'
    },

     7:{
        name:"Breakfast package",
        image:"/images/menu/randy-fath-SQ20tWzxXO0-unsplash.jpg",
        price:340,
        description:'Coffee , Toasts ,Orange juice , Oranges and Strawberries',
        category:'food'
    },

     8:{
        name:'Fries',
        image:'/images/menu/sama-hosseini-iOqJG1R__gA-unsplash.jpg',
        price:270,
        description:'French fries',
        category:'Food'
    },

     9:{
        name:'Soda',
        image:'/images/menu/jonny-caspari-sQNq223Rr54-unsplash.jpg',
        price:100,
        description:'Cocacola,Cocacola zero sugar,Fanta,Sprite,Pepsi ',
        category:'drink'
    }

   
}

</script>

<template>
<h1> Menu</h1>

    <v-container>

        <v-row>
            <v-col md="3" v-for="item in menu" :key ='item'>
                <v-card color="teal-lighten-1" >
                    <v-img :src="item.image" height="200" cover></v-img>
                    <v-row>
                        <v-col md="6">
                            <v-card-title style="font-size: small;">{{item.name  }}</v-card-title>
                        </v-col>
                        <v-col md="6">
                            <v-chip     >{{ item.category }}</v-chip>
                        </v-col>
                    </v-row>
                    <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                    <v-card-actions>
                        <v-card-title class="align-start">{{ item.price }}</v-card-title>
                        <v-btn class="align-end">order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
