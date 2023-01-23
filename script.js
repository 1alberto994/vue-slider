const { createApp } = Vue

  createApp({
    data() {
      return {
         slides : 
            {
                    image: ['https://picsum.photos/id/0/200/',
                            'https://picsum.photos/id/1/200/',
                            'https://picsum.photos/id/2/200/',
                            'https://picsum.photos/id/3/200/',
                            'https://picsum.photos/id/4/200/',
                            'https://picsum.photos/id/5/200/'
                ]
                   
                }
                    
            
      }
      
    },
    activeSlides:0,
    methods:{
        
     avantiImg(){
        activeSlides++
     },
     indietroImg(){
        activeSlides--
     }
    }
  }).mount('#app')