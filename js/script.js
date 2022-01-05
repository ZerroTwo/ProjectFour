

window.onload = function () {
   // .slide__active
   new SliderBar({
      fieldCards: '.block-one',
      cards: '.main__cards-menu',
      addClasssCards: 'lock',

      sliderPoint: '.slider__point',
      slideActiveValue: 'slider__point-value',
      addClassSlide: 'slide__active',


   });

   new SliderBar({
      fieldCards: '.block-two',
      cards: '.main__cards-menu',    //карточки которые нужно скрыть
      addClasssCards: 'lock',                   //класс для скрытия

      sliderPoint: '.slider__point',
      slideActiveValue: 'slider__point-value',
      addClassSlide: 'slide__active',


   });

   function SliderBar(propors) {
      let that = this;

      that.fieldCards = document.querySelector(propors.fieldCards);

      that.cards = document.querySelectorAll(propors.fieldCards + ' ' + propors.cards);
      that.sliderPoint = document.querySelector(propors.fieldCards + ' ' + propors.sliderPoint);
     
      that.addClassSlide = propors.addClassSlide;
      that.addClasssCards = propors.addClasssCards;



      that.addEvent = function (n, slideActiveValue) {
         slideActiveValue.addEventListener('click', function () {
            for (let i = 0; i < that.slidePoint.length; i++) {
               that.slidePoint[i].classList.remove(that.addClassSlide);
               that.cards[i].classList.add(that.addClasssCards);
            }
            slideActiveValue.classList.add(that.addClassSlide);
            that.cards[n].classList.remove(that.addClasssCards);
         }
         )
      }


      that.createPointValue = function (n) {
         that.slideActiveValue = document.createElement('div');
         if (n == 0) {
            that.slideActiveValue.classList.add(that.addClassSlide);
         }
         that.slideActiveValue.classList.add(propors.slideActiveValue);
         that.sliderPoint.append(that.slideActiveValue);

         that.addEvent(n, that.slideActiveValue);

      }


      for (let i = 0; that.cards.length > i; i++) {
        
         that.createPointValue(i);
      }

      that.slidePoint = document.querySelectorAll(propors.fieldCards + ' ' + '.slider__point-value');




   };













   new MenuBurger({
      btn: '.header__menu .menu__icon',
      menuBody: '.header__menu .menu__body',
      blockBody: true,

      scroll: false,
      fromEl: '',
      toEl: '',
   });

   function MenuBurger(propos) {
      let that = this;
      let body = document.querySelector("body");
      that.btn = document.querySelector(propos.btn);
      that.menuBody = document.querySelector(propos.menuBody);
      that.blockBody = propos.blockBody || false;
      that.scroll = propos.scroll || false;



      if (that.scroll) {
         that.fromEl = document.querySelectorAll(propos.fromEl);
         that.toEl = document.querySelectorAll(propos.toEl);

         for (let i = 0; i < that.fromEl.length; i++) {
            that.fromEl[i].addEventListener('click', function (event) {
               that.toEl[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
               that.removeBurger();
               event.preventDefault();
            });
         };
      };

      that.addBurger = function () {
         that.btn.classList.toggle('active');
         that.menuBody.classList.toggle('active');
         if (that.blockBody) {
            body.classList.toggle('overflow');
         };
      };

      that.removeBurger = function (event) {
         that.btn.classList.remove('active');
         that.menuBody.classList.remove('active');
         if (that.blockBody) {
            body.classList.remove('overflow');
         };
      };
      that.btn.addEventListener('click', that.addBurger);
      that.menuBody.addEventListener('click', that.removeBurger);
   };


}
