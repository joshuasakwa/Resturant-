import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore ('menu',  {
    state: () => {
       
        const menu={
    0:{
        name: "Cake",
        image:"/images/menu/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
        price:250,
     description:'Raspberry Pistachio Layer Cake',
     longDescription:'A beautifully presented slice of a multi-layered cake, elegantly adorned with fresh raspberries, making it a delightful centerpiece for any dessert table. The cake is served on a sleek, black plate with a subtle white rim, which contrasts strikingly with the vibrant colors of the dessert. The cake itself features several distinct layers: the outer layers appear to be a light, creamy sponge cake with a hint of green, possibly infused with pistachio, giving it a sophisticated and nutty flavor profile. Sandwiched between these layers is a generous spread of rich, pink raspberry cream, adding a tart and fruity contrast to the cakes texture and taste.' ,  
     category:'snack'
        
    },

      1:{
        name:'friedRice',
        image:'/images/menu/annie-spratt-Pk6nuEXu_Lo-unsplash.jpg',
        price:480,
        description:'FriedRice',
        longDescription:'Features a vibrant and appetizing dish of paella, presented in a large, black skillet that sits prominently on a smooth, light gray stone surface. The paella is a colorful medley of ingredients, with a rich, saffron-infused rice base that gives it a warm, golden-orange hue. Scattered throughout the dish are succulent shrimp, their tails curling upward, adding a touch of seafood elegance. The rice is studded with tender pieces of vegetables, including diced red bell peppers and peas, which contribute bursts of color and texture. Freshly chopped cilantro is sprinkled generously across the top, lending a bright green contrast and a hint of herbaceous flavor.', 
        category:'food'
    },

     2:{
        name:'Pizza',
        image:'/images/menu/chad-montano-MqT0asuoIcU-unsplash.jpg',
        price:1200,
        description:'pizza large',
        longDescription:'depicts a mouthwatering, rustic pizza served on a dark wooden cutting board, evoking a cozy, homemade vibe perfect for casual dining or sharing with friends. The pizza features a thin, golden-brown crust thats slightly charred at the edges, suggesting its been baked to crispy perfection in a hot oven. The base is generously coated with a rich, red tomato sauce that peeks through the toppings, providing a tangy foundation for the flavors.', 
        category:"snack"
    },

     3:{
        name:'Spaghetti',
        image:'/images/menu/danijela-prijovic-qits91IZv1o-unsplash.jpg',
        price:275,
        description:'Italian spaghetti ',
        longDescription:'The spaghetti strands are long and twirled elegantly, coated in a glossy, hearty meat sauce that boasts a rich, deep red hue, infused with finely chopped tomatoes and ground meat—likely beef—creating a classic, comforting Italian-inspired dish. The sauce clings perfectly to the al dente pasta, with visible flecks of herbs and spices adding depth and aroma, evoking the slow-simmered flavors of a traditional ragù.', 
        category:'food'
    },
     4:{
         name:'Noodles',
        image:'/images/menu/ikhsan-baihaqi-pbc2wXbQYpI-unsplash.jpg',
        price: 355,
        description:'instant Noodles',
        longDescription:'The noodles are a generous tangle of thin, spaghetti-like strands, coated in a rich, reddish-orange sauce that suggests a flavorful blend of tomatoes and spices, elevating the dish beyond typical instant fare. Small chunks of ground meat, possibly beef or pork, are mixed into the noodles, adding a hearty, savory depth to each bite.', 
        category:'food'
    },

     5:{
        name:'Cake',
        image:'/images/menu/jacob-thomas-6jHpcBPw7i8-unsplash.jpg',
        price:800,
        description:'Black forest cake',
        longDescription:'a stunning Black Forest cake, a multi-layered masterpiece that exudes indulgence and elegance, served on a simple white plate against a smooth, light gray backdrop that highlights its rich colors. The cake stands tall with four distinct layers of deep, moist chocolate sponge, each separated by generous fillings that add texture and flavor. ', 
        category:'Snack'
    },

     6:{
        name:'Burger',
        image:'/images/menu/mae-mu-I7A_pHLcQK8-unsplash.jpg',
        price:220,
        description:'Burger',
        longDescription:'a stunning Black Forest cake, a multi-layered masterpiece that exudes indulgence and elegance, served on a simple white plate against a smooth, light gray backdrop that highlights its rich colors. The cake stands tall with four distinct layers of deep, moist chocolate sponge, each separated by generous fillings that add texture and flavor. ', 
        category:'Snack'
    },

     7:{
        name:"Breakfast package",
        image:"/images/menu/randy-fath-SQ20tWzxXO0-unsplash.jpg",
        price:340,
        description:'Coffee , Toasts ,Orange juice , Oranges and Strawberries',
        longDescription:'a plate of golden French toast, stacked in a neat triangle of four thick slices, each piece perfectly browned with a slightly crispy exterior and a soft, fluffy interior.', 
        category:'food'
    },

     8:{
        name:'Fries',
        image:'/images/menu/sama-hosseini-iOqJG1R__gA-unsplash.jpg',
        price:270,
        description:'French fries',
        longDescription:'Each fry is adorned with delicate sprigs of fresh parsley, their vibrant green tips adding a burst of color and a subtle herbaceous freshness that contrasts beautifully with the warm, earthy tones of the potatoes.', 
        category:'Food'
    },

     9:{
        name:'Soda',
        image:'/images/menu/jonny-caspari-sQNq223Rr54-unsplash.jpg',
        price:100,
        description:'Cocacola,Cocacola zero sugar,Fanta,Sprite,Pepsi ',
        longDescription:'cold tasty rich Cocacola,Cocacola zero sugar,Fanta,Sprite,Pepsi ', 
        category:'drink'
    }
}
     const selectedMenuItem=ref(null)
        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})