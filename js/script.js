const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
  ];
  
  const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
  ]
  
  const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  ]
  
  
  let itemTemplate = "";
  let thumbTemplate = "";
  let currentIndexActive = 0;
  
  
  for (let i = 0; i < items.length; i++) {
    let classActive = "";
    if (i === currentIndexActive) {
      classActive = "active";
    }
    itemTemplate += `
    <div class="item ${classActive}">
      <img src="${items[i]}" />
        <div class="title">
          <h2>${title[i]}</h2>
          <p>${text[i]}</p>
        </div>
    </div>`;
    thumbTemplate += `
    <div class="thumb ${classActive}">
      <img src="${items[i]}" alt="" />
    </div>`;
  }
  
  
  
  const itemsContainer = document.querySelector(".items-container");
  const thumbsContainer = document.querySelector(".thumbs-container");
  
  
  
  itemsContainer.innerHTML = itemTemplate;
  thumbsContainer.innerHTML += thumbTemplate;
  
  
  
  const next = document.querySelector(" .fa-circle-chevron-down");
  const prev = document.querySelector(" .fa-circle-chevron-up");
  
  function slideDown() {
   
    const imgs = document.getElementsByClassName("item");
    imgs[currentIndexActive].classList.remove("active");
    const thumbs = document.getElementsByClassName("thumb");
    thumbs[currentIndexActive].classList.remove("active");
    
    if (currentIndexActive === 4) {
      currentIndexActive = 0;
    } else {
      currentIndexActive++;
    }
    
    imgs[currentIndexActive].classList.add("active");
    
    thumbs[currentIndexActive].classList.add("active");
  }
  function slideUp() {
    const imgs = document.getElementsByClassName("item");
    imgs[currentIndexActive].classList.remove("active");
    const thumbs = document.getElementsByClassName("thumb");
    thumbs[currentIndexActive].classList.remove("active");
  
    if (currentIndexActive === 0) {
      currentIndexActive = items.length - 1;
    } else {
      currentIndexActive--;
    }
  
    imgs[currentIndexActive].classList.add("active");
    
    thumbs[currentIndexActive].classList.add("active");
  }
  
  next.addEventListener("click", slideDown);
  prev.addEventListener("click", slideUp);