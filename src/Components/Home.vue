<script setup>

</script>

<template>
     <!-- Carousel -->
        <v-container>
            <v-row>
                <v-carousel>
<v-carousel-item src="/images/karolina-kolodziejczak-7CLArMn7TCM-unsplash.jpg"></v-carousel-item>
<v-carousel-item src="/images/keesha-s-kitchen-9VKY7SXjHXE-unsplash.jpg"></v-carousel-item>
<v-carousel-item src="/images/alex-haney-CAhjZmVk5H4-unsplash.jpg"></v-carousel-item>
<v-carousel-item src="/images/kobby-mendez-xBFTjrMIC0c-unsplash.jpg"></v-carousel-item>
</v-carousel>
            </v-row>
        </v-container>

                <!-- About -->
      <v-container>
           <v-row>
               <v-card align="centre" >
               <p class="text-h4"><b>Welcome to kula kwa wingi!</b></p>
                <p class="text-h6">Welcome to Kula Kwa Wingi, where vibrant flavors meet quick service! Nestled in the heart of the city, our restaurant is a culinary haven that celebrates the best of both worlds: mouthwatering fast food and authentic African dishes.</p>
                <p class="text-h6">Craving a quick bite? Indulge in our juicy burgers, crispy fries, and creamy milkshakes, crafted for speed without compromising taste. For those seeking a taste of tradition, our African menu showcases rich, soulful dishes like Kenyan nyama choma, West African jollof rice, Ethiopian doro wat, and Tanzanian ugali paired with flavorful stews. Each dish is prepared with fresh ingredients and time-honored recipes that bring the essence of Africa to your plate.</p>
                  </v-card>
                    </v-row>
         </v-container>
                            <!-- News -->
                            <v-container>
                                <v-row>
                                 <v-col md="4">
                                  <v-card color="teal-lighten-1">
                                    <v-img
                                    src="/images/femoree-_VRo59IsqLo-unsplash.jpg" 
                                     class="align-end text-white"
                                     height="200"
                                      cover ></v-img>
                                    <v-card-title>Fried rice, vegetables & meat combination.</v-card-title>
                                    <v-card-subtitle>rice with tomato and egg on white ceramic plate</v-card-subtitle>
                                    
                                    <v-card-actions>
                                        <v-btn>Read more</v-btn>
                                    </v-card-actions>
                                    </v-card>
                                    </v-col>
                                    <v-col md="4">
                                    <v-card color="teal-lighten-1">
                                    <v-img
                                    src="/images/keesha-s-kitchen-eaSIzdS8pv0-unsplash.jpg" 
                                     class="align-end text-white"
                                     height="200"
                                      cover ></v-img>
                                    <v-card-title> Senegalese Yassa Chicken.</v-card-title>
                                    <v-card-subtitle>African Food Senegalese Yassa Chicken</v-card-subtitle>
                                    
                                    <v-card-actions>
                                        <v-btn>Read more</v-btn>
                                    </v-card-actions>
                                    </v-card>
                                     </v-col>
                                    <v-col md="4">
                                    <v-card color="teal-lighten-1">
                                    <v-img
                                    src="/images/chichi-ilyass-rSPRefpQetk-unsplash.jpg" 
                                     class="align-end text-white"
                                     height="200"
                                      cover ></v-img>
                                    <v-card-title>french fries.</v-card-title>
                                    <v-card-subtitle> Get the best frenc fries at a cheaper price</v-card-subtitle>
                                    
                                    <v-card-actions>
                                        <v-btn>Read more</v-btn>
                                    </v-card-actions>
                                    </v-card>



                                 </v-col>   
                                 
                                </v-row>
                            </v-container>
        <!-- Footer -->
        <v-container>
            <v-row>
              <v-footer class="text-center d-flex flex-column ga-2 py-4" color="teal-lighten-1">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkepurple-lighten-1din'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>  
            </v-row>
        </v-container>
        

</template>
