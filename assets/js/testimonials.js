const TestimonialsContainer = document.querySelector('.testimonialsContainer');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');

const testimonials = [
    {
        name: 'Jessica Nunes',
        photo: './assets/img/brooke-cagle-oTweoxMKdkA-unsplash.jpg',
        text: 'Estou muito satisfeita com os serviços da DentalCare! A equipe foi '+
                'incrível desde a recepção até o tratamento. Minha limpeza dental foi feita '+
                'com cuidado e eficiência. Recomendo a todos!'
    },
    {
        name: 'Juliana Ferreira',
        photo: './assets/img/michael-dam-mEZ3PoFGs_k-unsplash.jpg',
        text: 'Estou muito feliz com o resultado do meu tratamento ortodôntico na DentalCare! O '+ 
                'atendimento foi excepcional, e os aparelhos invisíveis realmente fizeram a diferença. '+ 
                'Recomendo de olhos fechados!'
    },
    {
        name: 'João Almeida',
        photo: './assets/img/darshan-patel-QJEVpydulGs-unsplash.jpg',
        text: 'Meu tratamento de canal na DentalCare foi excelente. O dentista foi gentil e '+ 
            'explicou tudo detalhadamente. O ambiente é confortável e acolhedor. '+
            'Recomendo totalmente!'
    },
];

let idx = 1;

function updateTestimonial() {
    const { name, photo, text } = testimonials[idx];
   
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
   
    idx++;
   
    idx = idx > testimonials.length - 1 ? 0 : idx;  
  }

setInterval(updateTestimonial, 10000)