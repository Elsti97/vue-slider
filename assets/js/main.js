var app = new Vue(
  {
    el: '#root',
    data:{
      i: 0,
      centrato: 'text-center mt-5 text-primary',
      titolo: 'Slider',
      photos: [
      {image: 'https://picsum.photos/800/450?random=1'},
      {image: 'https://picsum.photos/800/450?random=2'},
      {image: 'https://picsum.photos/800/450?random=3'},
      {image: 'https://picsum.photos/800/450?random=4'},
      {image: 'https://picsum.photos/800/450?random=5'},
    ],
  },

  methods: {
    fotoSuccessiva(){
      if(this.i < this.photos.length -1){
        this.i++;
      } else {
        this.i = 0;
      }
    },

    fotoPrecedente(){
      if(this.i <= 0){
        this.i = this.photos.length - 1;
      } else {
        this.i--;
      }
    },
    cambiaFoto(indice){
      this.i = indice;
    }    
  }
});