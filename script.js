const { createApp } = Vue

  createApp({
    data() {
      return {
         
            
               image: ['https://picsum.photos/id/0/200/',
                        'https://picsum.photos/id/1/200/',
                        'https://picsum.photos/id/2/200/',
                        'https://picsum.photos/id/3/200/',
                        'https://picsum.photos/id/4/200/',
                        'https://picsum.photos/id/5/200/'
                     ],
               text:[
                  "QUESTO COMPUTER è BELLISSIMO",
                  "QUESTO COMPUTER è  ECONOMICO",
                  "QUESTO COMPUTER è  STUPENDO",
                  "QUESTO COMPUTER è  SULLA MEDIA",
                  "QUESTO COMPUTER è  TOP",
                  "QUESTO COMPUTER è  IL FUTURO"
               ],
                        
                     activeImage:0,
                     activeText:0    
            
                 
                    
            
      }
      
    },
    
    methods:{
        
     avantiImg(){
      
        if(this.activeImage==this.image.length -1){
         this.activeImage=0
        }
        else{
         this.activeImage++
        }
     },
     indietroImg(){
      
      if(this.activeImage==0){
         this.activeImage=this.image.length -1
        }
        else{
         this.activeImage--
        }
        
     },
     avantiText(){
      
      if(this.activeText==this.text.length -1){
       this.activeText=0
      }
      else{
       this.activeText++
      }
   },
   indietroText(){
    
    if(this.activeText==0){
       this.activeText=this.text.length -1
      }
      else{
       this.activeText--
      }
      
   }
    }
  }).mount('#app')