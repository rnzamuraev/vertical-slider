class Slider {
  constructor({
    slidesContainer = null,
    slidesContainer2 = null,
    slides = null,
    slides2 = null,
    next = null,
    prev = null,
    btnBlock = null,
    slideIndex = 0,
    transform = null,
    direction = "Y",
    autoPlay = 5000,
    play = false,
  } = {}) {
    if (slidesContainer === null) {
      // Если был задан только класс сдайдов
      this.slides = document.querySelectorAll(slides); // Получаем коллекцию слайдов
    } else {
      this.slidesContainer =
        document.querySelector(slidesContainer); // Если был задан сонтейнер со сдайдами то получаем сначала его
      this.slides = this.slidesContainer.children; // Получаем все слайды из контейнера
    }

    if (slidesContainer2 === null) {
      // Если был задан только класс сдайдов
      this.slides2 = document.querySelectorAll(slides2); // Получаем коллекцию слайдов
    } else {
      this.slidesContainer2 = document.querySelector(
        slidesContainer2
      ); // Если был задан сонтейнер со сдайдами то получаем сначала его
      this.slides2 = this.slidesContainer2.children; // Получаем все слайды из контейнера
    }

    this.next = document.querySelector(next); // Получаем кнопку вперед
    this.prev = document.querySelector(prev); // Получаем кнопку назад
    this.btnBlock = document.querySelectorAll(btnBlock);
    this.count = 1; // Шаг переключения слайдов
    this.transform = transform; // Скорость анимации переключения слайдов в милисекундах
    this.slideIndex = slideIndex; // Задаём индекс первого слайда по умолчанию 0 (первый слайд)
    this.direction = direction; // Задаём направление движения слайдов по умолчанию ось - Y
    this.autoPlay = autoPlay; // Задаем время авто переключения слайдов
    this.play = play; // Автопереключение слайдов по умолчанию выключено(False)

    if (this.slideIndex === slideIndex) {
      this.slideIndex2 =
        this.slides.length - (slideIndex + 1); // Задаём индекс первого слайда по умолчанию 0 (первый слайд)
    }
  }

  showSlide() {
    // if (this.count == 2) {
    //   if (this.slideIndex - 1 < 0) {
    //     this.slideIndex = this.slides.length - 2;
    //     this.slideIndex2 = 1;
    //   }
    // } else {
    if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
      this.slideIndex2 = 0;
    }
    // }

    // if (this.count === 2) {
    //   if (this.slideIndex + 1 > this.slides.length - 1) {
    //     this.slideIndex = 1;
    //     this.slideIndex2 = this.slides2.length - 2;
    //   }
    // } else {
    if (this.slideIndex > this.slides.length - 1) {
      this.slideIndex = 0;
      this.slideIndex2 = this.slides2.length - 1;
    }
    // }

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[
        i
      ].style.transform = `translate${this.direction}(0%)`;
      this.slides[i].style.zIndex = 0;
      //
      this.slides2[
        i
      ].style.transform = `translate${this.direction}(0%)`;
      this.slides2[i].style.zIndex = 0;
    }

    if (this.slideIndex === this.slides.length - 1) {
      // this.slideIndex2 === 0
      this.slides[0].style.transform = `translate${this.direction}(-100%)`;
      // this.slides[1].style.transform = `translate${this.direction}(-200%)`;

      this.slides2[
        this.slideIndex2 + 1
      ].style.transform = `translate${this.direction}(-100%)`;
      // this.slides2[
      // this.slideIndex2 + 2
      // ].style.transform = `translate${this.direction}(-200%)`;
      //
      this.slides[
        this.slideIndex - 1
      ].style.transform = `translate${this.direction}(100%)`;
      // this.slides[
      // this.slideIndex - 2
      // ].style.transform = `translate${this.direction}(200%)`;

      this.slides2[
        this.slides2.length - 1
      ].style.transform = `translate${this.direction}(100%)`;
      // this.slides2[
      // this.slides2.length - 2
      // ].style.transform = `translate${this.direction}(200%)`;
      //
    } else if (this.slideIndex === 0) {
      // this.slideIndex2 === this.slides.length - 1
      this.slides[
        this.slideIndex + 1
      ].style.transform = `translate${this.direction}(-100%)`;
      // this.slides[
      // this.slideIndex + 2
      // ].style.transform = `translate${this.direction}(-200%)`;

      this.slides2[0].style.transform = `translate${this.direction}(-100%)`;
      // this.slides2[1].style.transform = `translate${this.direction}(-200%)`;
      //
      this.slides[
        this.slides.length - 1
      ].style.transform = `translate${this.direction}(100%)`;
      // this.slides[
      // this.slides.length - 2
      // ].style.transform = `translate${this.direction}(200%)`;

      this.slides2[
        this.slideIndex2 - 1
      ].style.transform = `translate${this.direction}(100%)`;
      // this.slides2[
      // this.slideIndex2 - 2
      // ].style.transform = `translate${this.direction}(200%)`;
      //
    } else {
      this.slides[
        this.slideIndex + 1
      ].style.transform = `translate${this.direction}(-100%)`;
      // if (this.slideIndex + 1 === this.slides.length - 1) {
      // this.slides[0].style.transform = `translate${this.direction}(-200%)`;
      // } else {
      // this.slides[
      // this.slideIndex + 2
      // ].style.transform = `translate${this.direction}(-200%)`;
      // }

      this.slides2[
        this.slideIndex2 + 1
      ].style.transform = `translate${this.direction}(-100%)`;
      // if (
      // this.slideIndex2 + 1 ===
      // this.slides2.length - 1
      // ) {
      // this.slides2[0].style.transform = `translate${this.direction}(-200%)`;
      // } else {
      // this.slides2[
      // this.slideIndex2 + 2
      // ].style.transform = `translate${this.direction}(-200%)`;
      // }
      //
      this.slides[
        this.slideIndex - 1
      ].style.transform = `translate${this.direction}(100%)`;
      // if (this.slideIndex - 1 === 0) {
      // this.slides[
      // this.slides.length - 1
      // ].style.transform = `translate${this.direction}(200%)`;
      // } else {
      // this.slides[
      // this.slideIndex - 2
      // ].style.transform = `translate${this.direction}(200%)`;
      // }

      this.slides2[
        this.slideIndex2 - 1
      ].style.transform = `translate${this.direction}(100%)`;
      // if (this.slideIndex2 - 1 === 0) {
      // this.slides2[
      // this.slides2.length - 1
      // ].style.transform = `translate${this.direction}(200%)`;
      // } else {
      // this.slides2[
      // this.slideIndex2 - 2
      // ].style.transform = `translate${this.direction}(200%)`;
      // }
    }

    this.slides[this.slideIndex].style.zIndex = 10;
    this.slides2[this.slideIndex2].style.zIndex = 10;
  }

  changeSlide(n, n2) {
    this.slideIndex += n;
    this.slideIndex2 += n2;
    this.showSlide();
  }

  movementPrevSlide() {
    this.changeSlide(-this.count, this.count);

    if (this.slideIndex === this.slides.length - 1) {
      this.slides[0].style.zIndex = 5;
      this.slides2[
        this.slides2.length - 1
      ].style.zIndex = 5;
      //
      this.slides[this.slideIndex - 1].style.zIndex = 4;
      this.slides2[this.slideIndex2 + 1].style.zIndex = 4;
      //
    } else if (this.slideIndex === 0) {
      this.slides[this.slideIndex + 1].style.zIndex = 5;
      this.slides2[0].style.zIndex = 4;
      //
      this.slides[this.slides.length - 1].style.zIndex = 4;
      this.slides2[this.slideIndex2 - 1].style.zIndex = 5;
      //
    } else {
      this.slides[this.slideIndex + 1].style.zIndex = 5; //2
      this.slides2[this.slideIndex2 + 1].style.zIndex = 4; //1
      //
      this.slides[this.slideIndex - 1].style.zIndex = 4;
      this.slides2[this.slideIndex2 - 1].style.zIndex = 5;
    }
  }

  movementNextSlide() {
    this.changeSlide(this.count, -this.count);

    if (this.slideIndex === this.slides.length - 1) {
      this.slides[0].style.zIndex = 4;
      this.slides2[this.slideIndex2 + 1].style.zIndex = 5;
      //
      this.slides[this.slideIndex - 1].style.zIndex = 5;
      this.slides2[
        this.slides2.length - 1
      ].style.zIndex = 4;
      //
    } else if (this.slideIndex === 0) {
      this.slides[this.slideIndex + 1].style.zIndex = 4;
      this.slides2[0].style.zIndex = 5;
      //
      this.slides[this.slides.length - 1].style.zIndex = 5;
      this.slides2[this.slideIndex2 - 1].style.zIndex = 4;
      //
    } else {
      this.slides[this.slideIndex + 1].style.zIndex = 4;
      this.slides2[this.slideIndex2 + 1].style.zIndex = 5;
      //
      this.slides[this.slideIndex - 1].style.zIndex = 5;
      this.slides2[this.slideIndex2 - 1].style.zIndex = 4;
    }
  }

  disabledUp() {
    if (!this.prev.hasAttribute("disabled")) {
      this.movementPrevSlide();
      this.prev.setAttribute("disabled", "disabled");
      setTimeout(() => {
        this.prev.removeAttribute("disabled");
      }, this.transform);
    }
  }

  disabledDown() {
    if (!this.next.hasAttribute("disabled")) {
      this.movementNextSlide();
      this.next.setAttribute("disabled", "disabled");
      setTimeout(() => {
        this.next.removeAttribute("disabled");
      }, this.transform);
    }
  }

  keydown() {
    document.addEventListener("keydown", (event) => {
      if (event.key == "ArrowUp" || event.key == "w") {
        this.disabledUp();
      } else if (
        event.key == "ArrowDown" ||
        event.key == "s"
      ) {
        this.disabledDown();
      }
    });
  }

  prevSlide() {
    this.prev.addEventListener("click", () => {
      this.disabledUp();
    });
  }

  nextSlide() {
    this.next.addEventListener("click", () => {
      this.disabledDown();
    });
  }

  autoplay() {
    if (this.play) {
      setInterval(() => {
        this.disabledDown();
      }, this.autoPlay);
    }
  }

  render() {
    this.showSlide();
    this.autoplay();
    this.prevSlide();
    this.nextSlide();
    this.keydown();
  }
}

const slider = new Slider({
  prev: ".up-button",
  next: ".down-button",
  slidesContainer: ".main-slide",
  slidesContainer2: ".sidebar",
  slideIndex: 2,
  count: 2,
  transform: 500,
  // direction: "X",
  autoPlay: 10000,
  // play: "true",
});
slider.render();
