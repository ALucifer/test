<template>
  <div>
      <div class="header__container">
          <div class="header__menu">
              <img class="logo" src="@assets/LandingPage/images/logo.svg" alt="">
              <a href="#" class="link">Try It Free</a>
          </div>
          <div class="header__content">
              <div>
                  <h1>Build The Community Your Fans Will Love</h1>
                  <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                  <a href="">Get Started For Free</a>
              </div>
              <img src="@assets/LandingPage/images/illustration-mockups.svg" alt="">
          </div>
      </div>
  </div>
</template>

<style lang="scss">
$pink: hsl(322, 100%, 66%);
$paleCyan: hsl(193, 100%, 96%);
$darkCyan: hsl(192, 100%, 9%);
$grayishBlue: hsl(208, 11%, 55%);

@font-face {
    font-family: 'Poppins';
    src: url('@assets/LandingPage/fonts/Poppins/Poppins-Black.ttf');
}

body {
  font-size: 18px;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins';
    font-weight: 900;
}

.hero {
    background-color: $paleCyan;
}

.header {
  &__container {
    background-image: url("@assets/LandingPage/images/bg-hero-desktop.svg");
    height: 45vh;
    background-color: $paleCyan;
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    padding: 30px 60px;

    .logo {
      height: 30px;
    }

    .link {
      color: $darkCyan;
      background-color: white;
      padding: 8px 32px;
      box-shadow: 1px 1px 3px -3px black;
      border-radius: 50px;
    }
  }

    &__content {
        display: flex;
        gap: 20px;
        padding: 60px;
    }
}
</style>