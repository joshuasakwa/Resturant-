import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore ('users',  {
    state: () => {
       
     const users={
        0:{
            name:'Joshua lusame',
            email:'jsakwa004@gmail.com',
            phone:254115244967,
            deliveryAddress:"50,Donholm",
            password:'Wewe2323',
            userType:"Admin",
            activeAccount:true

        },
        1:{
            name:'Mark spencer',
            email:'markspencer123.com',
            phone:254115244540,
            deliveryAddress:"70,Donholm",
            password:'Rtrt4545',
            userType:"customer",
            activeAccount:true
        },
        2:{
            name:'Edwin mark',
            email:'Edwinmark.com',
            phone:254115244560,
            deliveryAddress:"870,Donholm",
            password:'rtrt4545',
            userType:"customer",
            activeAccount:true
        },
        3:{
            name:'Mark spencer',
            email:'markspencer456.com',
            phone:254115244550,
            deliveryAddress:"4400,Donholm",
            password:'Rtrt4545',
            userType:"customer",
            activeAccount:true
        },
        4:{
            name:'Mark spencer',
            email:'markspencer789.com',
            phone:254115246784,
            deliveryAddress:"900,Donholm",
            password:'Rtrt4545',
            userType:"customer",
            activeAccount:false
        }
     }
        return { users }
    },
    actions:{
        
       }
    })