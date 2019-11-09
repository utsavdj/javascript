function Carousel(carouselId, holdTime = 1500, transitionTime = 10) {
  this.carousel = document.getElementById(carouselId);
  this.sliderImage = this.carousel.getElementsByTagName('img')[0];
  this.imageHeight = this.sliderImage.height;
  this.imageWidth = this.sliderImage.width;

  this.carousel.style.height = this.imageHeight + 'px';

  this.carouselWrapper = this.carousel.getElementsByClassName('carousel-wrapper')[0];
  this.noOfImages = this.carouselWrapper.children.length;
  this.carouselWrapperWidth = this.noOfImages * this.imageWidth;
  this.carouselWrapper.style.width = this.carouselWrapperWidth + 'px';

  this.indicators = this.carousel.getElementsByClassName('carousel-indicator');

  this.imageIndex = 0;
  this.left = 0;
  this.isClicked = false;
  var SLIDE_TIMEOUT = 1;
  var SLIDE_RESET_RATE = 2 * transitionTime;

  this.init = function () {
    this.createCarouselArrow('previous', 'fas fa-chevron-left');
    this.createCarouselArrow('next', 'fas fa-chevron-right');
    this.createCarouselIndicators();
    this.activateIndicatorOnClick();
    this.automateSlider();
  };

  // this function creates adds carousel arrow buttons
  this.createCarouselArrow = function (arrowClass, iconClass) {
    this.arrowDiv = document.createElement("div");
    this.arrowDiv.setAttribute('class', arrowClass);
    this.arrowDiv.style.lineHeight = this.imageHeight + 'px';
    this.carousel.appendChild(this.arrowDiv);

    this.arrowIcon = document.createElement("i");
    this.arrowIcon.setAttribute('class', iconClass);
    this.carousel.getElementsByClassName(arrowClass)[0].appendChild(this.arrowIcon);
  };

  // this function creates adds carousel indicators
  this.createCarouselIndicators = function () {
    this.indicatorWrapper = document.createElement("ul");
    this.indicatorWrapper.setAttribute('class', 'carousel-indicators');
    this.carousel.appendChild(this.indicatorWrapper);

    for (var i = 1; i <= this.noOfImages; i++) {
      this.indicator = document.createElement("li");
      this.indicator.setAttribute('data-id', i.toString());
      if (i === 1) {
        this.indicator.setAttribute('class', 'carousel-indicator active');
      } else {
        this.indicator.setAttribute('class', 'carousel-indicator');
      }
      this.carousel.getElementsByClassName('carousel-indicators')[0].appendChild(this.indicator);
    }
  };


  // this function activates the indicator on click
  this.activateIndicatorOnClick = function () {
    var that = this;
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].onclick = function () {
        this.activeIndicatorIndex = that.getIndexOfClassWithClass('carousel-indicator', 'active');
        if (!that.isClicked && this.activeIndicatorIndex !== (this.getAttribute('data-id') - 1)) {
          that.isClicked = true;
          that.removeActiveIndicator();
          this.classList.add('active');
          this.activeIndicatorIndex = that.getIndexOfClassWithClass('carousel-indicator', 'active');
          that.animateOnIndicatorClick(this.activeIndicatorIndex)
        }
      }
    }
  };

  // this function slides the image when indicator is clicked
  this.animateOnIndicatorClick = function (activeIndicatorIndex) {
    var that = this;
    this.slideImage = setInterval(function () {
      this.activeIndicator = that.indicators[activeIndicatorIndex].getAttribute('data-id');
      if (that.imageIndex < (this.activeIndicator - 1)) {
        that.left -= transitionTime;
        if (((this.activeIndicator - 1) * that.imageWidth) <= Math.abs(that.left)) {
          this.onClearInterval();
        }
      } else {
        that.left += transitionTime;
        if (((this.activeIndicator - 1) * that.imageWidth) >= Math.abs(that.left) || that.left > 0) {
          this.onClearInterval();
        }
      }

      this.onClearInterval = function () {
        clearInterval(that.slideImage);
        that.isClicked = false;
        that.imageIndex = this.activeIndicator - 1;
        that.left = -((this.activeIndicator - 1) * that.imageWidth);
      };

      that.moveSlide(that.left);
      clearInterval(that.automate);
      that.automateSlider();
    }, this.left);
  };

  // this function moves the slider automatically
  this.automateSlider = function () {
    var that = this;
    this.automate = setInterval(function () {
      that.nextSlide();
    }, holdTime);
  };

  // this function changes the left position of carousel-wrapper
  this.moveSlide = function (left) {
    this.carouselWrapper.style.left = left + 'px';
  };

  this.activateIndicatorAndResetButton = function () {
    this.removeActiveIndicator();
    this.indicators[this.imageIndex].classList.add('active');
    this.isClicked = false;
  };

  this.init();

  this.carousel.getElementsByClassName('next')[0].onclick = function () {
    this.nextSlide();
  }.bind(this);

  // this function is called when next button or arrow is clicked or to move the slider automatically
  this.nextSlide = function () {
    if (!this.isClicked) {
      this.isClicked = true;
      this.imageIndex++;
      var that = this;
      if (this.imageIndex !== this.noOfImages) {
        this.slideImage = setInterval(function () {
          that.left -= transitionTime;
          if (Math.abs(that.left) >= that.imageIndex * that.imageWidth) {
            that.left = -(that.imageIndex * that.imageWidth);
            clearInterval(that.slideImage);
            that.activateIndicatorAndResetButton();
          }
          that.moveSlide(that.left);
        }, SLIDE_TIMEOUT);
      } else {
        this.resetSlider = setInterval(function () {
          that.left += SLIDE_RESET_RATE;
          if (that.left > 0) {
            that.left = 0;
            that.imageIndex = 0;
            clearInterval(that.resetSlider);
            that.activateIndicatorAndResetButton();
          }
          that.moveSlide(that.left);
        }, SLIDE_TIMEOUT);
      }
      clearInterval(this.automate);
      this.automateSlider();
    }
  };

  // this function is called when previous button or arrow is clicked
  this.carousel.getElementsByClassName('previous')[0].onclick = function () {
    var that = this;
    if (!this.isClicked) {
      this.isClicked = true;
      this.imageIndex--;
      if (this.imageIndex !== -1) {
        this.slideImage = setInterval(function () {
          that.left += transitionTime;
          if (Math.abs(that.left) <= that.imageIndex * that.imageWidth || that.left > 0) {
            that.left = -(that.imageIndex * that.imageWidth);
            clearInterval(that.slideImage);
            that.activateIndicatorAndResetButton();
          }
          that.moveSlide(that.left);
        }, SLIDE_TIMEOUT);
      } else {
        this.resetSlider = setInterval(function () {
          that.left -= SLIDE_RESET_RATE;
          if (Math.abs(that.left) >= (that.carouselWrapperWidth - that.imageWidth)) {
            that.left = -(that.carouselWrapperWidth - that.imageWidth);
            that.imageIndex = that.noOfImages - 1;
            clearInterval(that.resetSlider);
            that.activateIndicatorAndResetButton();
          }
          that.moveSlide(that.left);
        }, SLIDE_TIMEOUT);
      }
      clearInterval(this.automate);
      this.automateSlider();
    }
  }.bind(this);

  // helper functions
  this.getIndexOfClassWithClass = function (className, includesClass) {
    this.items = this.carousel.getElementsByClassName(className);
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].classList.contains(includesClass)) {
        return i;
      }
    }
  };

  this.removeActiveIndicator = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].classList.remove("active");
    }
  };
}
