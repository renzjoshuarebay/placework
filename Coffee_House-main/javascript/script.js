
const produtos = [
    {
      titulo: "Expresso",
      descricao: "Classic and delicious",
      preco: "₱60",
      imagem: "imagens/expresso.jpg",
    },
    {
      titulo: "Coffee with milk",
      descricao: "Tasty and balanced",
      preco: "₱70",
      imagem: "imagens/leite.jpg",
    },
    {
      titulo: "Cappuccino",
      descricao: "Tasty and balanced",
      preco: "₱110",
      imagem: "imagens/cappuccino.avif",
    },
    {
        titulo: "Mocha",
        descricao: "Tasty and balanced",
        preco: "₱130",
        imagem: "imagens/mocha.jpg",
    },
    {
        titulo: "Machiato",
        descricao: "Tasty and balanced",
        preco: "₱70",
        imagem: "imagens/machiato.jpg",
    },
    {
        titulo: "Affogato",
        descricao: "Tasty and balanced",
        preco: "₱180",
        imagem: "imagens/affogato.jpg",
    },
    {
        titulo: "Mocha natalino",
        descricao: "Tasty and balanced",
        preco: "₱180",
        imagem: "imagens/natal.avif",
    },
    {
        titulo: "Panetone coffee",
        descricao: "Tasty and balanced",
        preco: "₱180",
        imagem: "imagens/panetone.jpg",
    },
  ];
  
  
  function criarCards() {
    const template = document.getElementById("card-template");
    const container = document.getElementById("cards-container");
  
    produtos.forEach(produto => {
      const clone = template.content.cloneNode(true);
  
      
      clone.querySelector("img").src = produto.imagem;
      clone.querySelector("img").alt = produto.titulo;
      clone.querySelector(".card-title").textContent = produto.titulo;
      clone.querySelector(".descricao").textContent = produto.descricao;
      clone.querySelector(".text-muted").textContent = produto.preco;
  
      
      container.appendChild(clone);
    });
  }
  
  
  document.addEventListener("DOMContentLoaded", criarCards);
  





  const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    
    function updateActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.parentNode.classList.remove('active'));
        navLinks[index].parentNode.classList.add('active');
    }

    
    window.addEventListener('scroll', updateActiveLink);

   
    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            navLinks.forEach((link) => link.parentNode.classList.remove('active'));
            this.parentNode.classList.add('active');
        });
    });


    ScrollReveal().reveal('.home',{
      origin: 'left',
      duration: 2000,
      distance: '20%'
    });


    ScrollReveal().reveal('.promo',{
      origin: 'right',
      duration: 2000,
      distance: '20%'
    });

    ScrollReveal().reveal('#cards-container',{
      origin: 'right',
      duration: 2000,
      distance: '30%',
      delay: 300,
    });

    ScrollReveal().reveal('.chef',{
      origin: 'left',
      duration: 2000,
      distance: '20%',
      delay: 100,
    });


    ScrollReveal().reveal('.user1',{
      origin: 'lright',
      duration: 2000,
      distance: '20%',
    });

    ScrollReveal().reveal('.user2',{
      origin: 'right',
      duration: 2000,
      distance: '20%',
      delay: 250,
    });

    ScrollReveal().reveal('.user3',{
      origin: 'right',
      duration: 2000,
      distance: '20%',
      delay: 500,
    });

    ScrollReveal().reveal('.icone-cafe',{
      origin: 'left',
      duration: 2000,
      distance: '20%',
    });



    




    