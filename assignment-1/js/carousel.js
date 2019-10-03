function initCarousel(timeout) {
  sliderImage = document.getElementsByClassName('carousel-image')[0];
  var imageHeight = sliderImage.height;
  var imageWidth = sliderImage.width;

  var carousel = document.getElementsByClassName('carousel')[0];
  carousel.style.height = imageHeight + 'px';
  var screeWidth = screen.width;
  if (screeWidth > 768) {
    carousel.style.width = (imageWidth / screeWidth) * 100 + '%';
  } else {
    carousel.style.width = '100%';
  }

  createCarouselArrow('previous', 'fas fa-chevron-left');
  createCarouselArrow('next', 'fas fa-chevron-right');

  function createCarouselArrow(arrowClass, iconClass) {
    var arrowDiv = document.createElement("div");
    arrowDiv.setAttribute('class', arrowClass);
    arrowDiv.style.lineHeight = imageHeight + 'px';
    carousel.appendChild(arrowDiv);

    var arrowIcon = document.createElement("i");
    arrowIcon.setAttribute('class', iconClass);
    document.getElementsByClassName(arrowClass)[0].appendChild(arrowIcon);
  }

  var carouselWrapper = document.getElementsByClassName('carousel-wrapper')[0];
  var noOfImages = carouselWrapper.children.length;
  var carouselWrapperWidth = noOfImages * imageWidth;
  carouselWrapper.style.width = carouselWrapperWidth + 'px';

  function createCarouselIndicators() {
    var indicatorWrapper = document.createElement("ul");
    indicatorWrapper.setAttribute('class', 'carousel-indicators');
    document.body.insertBefore(indicatorWrapper, carousel.nextSibling);

    for (var i = 1; i <= noOfImages; i++) {
      var indicator = document.createElement("li");
      indicator.setAttribute('data-id', i.toString());
      if (i === 1) {
        indicator.setAttribute('class', 'carousel-indicator active');
      } else {
        indicator.setAttribute('class', 'carousel-indicator');
      }
      document.getElementsByClassName('carousel-indicators')[0].appendChild(indicator);
    }
  }

  createCarouselIndicators();

  var indicators = document.getElementsByClassName('carousel-indicator');

  var counter = 0;
  var left = 0;
  var clicked = false;

  function moveSlide(left) {
    carouselWrapper.style.left = left + 'px';
  }

  function activateIndicatorAndResetButton() {
    removeActiveIndicator();
    indicators[counter].classList.add('active');
    clicked = false;
  }

  document.getElementsByClassName('next')[0].onclick = nextSlide;

  function nextSlide() {
    if (!clicked) {
      clicked = true;
      counter++;
      if (counter !== noOfImages) {
        var slideImage = setInterval(slideImageOnNextClick, timeout);

        function slideImageOnNextClick() {
          left -= 10;
          moveSlide(left);
          if (left % (counter * imageWidth) === 0) {
            clearInterval(slideImage);
            activateIndicatorAndResetButton();
          }
        }
      } else {
        var resetSlider = setInterval(resetSliderOnNextClick, timeout);

        function resetSliderOnNextClick() {
          left += 30;
          if (left === 0) {
            left = 0;
            counter = 0;
            clearInterval(resetSlider);
            activateIndicatorAndResetButton();
          }
          moveSlide(left);
        }
      }
    }
  }


  document.getElementsByClassName('previous')[0].onclick = previousSlide;

  function previousSlide() {
    if (!clicked) {
      clicked = true;
      counter--;
      if (counter !== -1) {
        var slideImage = setInterval(slideImageOnPreviousClick, timeout);

        function slideImageOnPreviousClick() {
          left += 10;
          moveSlide(left);
          if (left % (counter * imageWidth) === 0 || left === 0) {
            clearInterval(slideImage);
            activateIndicatorAndResetButton();
          }
        }
      } else {
        var resetSlider = setInterval(resetSliderOnPreviousClick, timeout);

        function resetSliderOnPreviousClick() {
          left -= 30;
          if (-left === carouselWrapperWidth - imageWidth) {
            left = -(carouselWrapperWidth - imageWidth);
            counter = noOfImages - 1;
            clearInterval(resetSlider);
            activateIndicatorAndResetButton();
          }
          moveSlide(left);
        }
      }
    }
  }

  activateIndicatorOnClick();

  function activateIndicatorOnClick() {
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].onclick = function () {
        if (!clicked) {
          clicked = true;
          removeActiveIndicator();
          this.classList.add('active');
          var activeIndicatorIndex = getIndexOfClassWithClass('carousel-indicator', 'active');
          animateOnIndicatorClick(activeIndicatorIndex)
        }
      }
    }
  }

  function animateOnIndicatorClick(activeIndicatorIndex) {
    var slideImage = setInterval(function () {
      var activeIndicator = indicators[activeIndicatorIndex].getAttribute('data-id');
      if (counter < (activeIndicator - 1)) {
        left -= 30;
      } else {
        left += 30;
      }

      if (-((activeIndicator - 1) * imageWidth) === left) {
        clearInterval(slideImage);
        clicked = false;
        counter = activeIndicator - 1;
      }

      moveSlide(left);
    }, left);
  }

  function getIndexOfClassWithClass(className, includesClass) {
    var items = document.getElementsByClassName(className);
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(includesClass)) {
        return i;
      }
    }
  }

  function removeActiveIndicator() {
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("active");
    }
  }
}