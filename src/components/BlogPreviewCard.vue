<template>
  <div class="card__container">
      <img src="@assets/BlogPreviewCard/images/illustration-article.svg" class="card__hero" alt="">
      <p class="card__label">Learning</p>
      <p class="card__date">Published 21 Dec 2023</p>
      <h3 class="card__title"> HTML & CSS foundations</h3>
      <p class="card__description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
      <p class="card__author">
          <img src="@assets/BlogPreviewCard/images/image-avatar.webp" class="author__image"  alt=""/>
          <b>Greg Hooper</b>
      </p>
  </div>
</template>

<style lang="scss">
$yellow: hsl(47, 88%, 63%);
$white: hsl(0, 0%, 100%);
$grey500: hsl(0, 0%, 42%);
$grey950:  hsl(0, 0%, 7%);

@font-face {
    font-family: 'Figtree';
    src: url('@assets/BlogPreviewCard/fonts/Figtree-VariableFont_wght.ttf');
}

@font-face {
    font-family: 'Figtree-Bold';
    src: url('@assets/BlogPreviewCard/fonts/static/Figtree-Bold.ttf');
}

@font-face {
    font-family: 'Figtree-ExtraBold';
    src: url('@assets/BlogPreviewCard/fonts/static/Figtree-ExtraBold.ttf');
}

#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    background-color:  $yellow;
    font-family: 'Figtree', serif;
}
p {
  font-size: 16px;
}

p, h3 {
  margin: 0;
}


.card {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 16px;
    max-width: 336px;
    padding: 16px;
    background-color: $white;
    border-radius: 16px;
    border: 1px solid $grey500;
    box-shadow: 10px 10px 0 $grey950;
  }

  &__hero {
    border-radius: 8px;
  }

  &__label {
    background-color: $yellow;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
  }

  &__description {
    text-align: left;
    color: $grey500
  }

  &__title {
      font-family: 'Figtree-ExtraBold';
    &:hover {
      color: $yellow;
      cursor: pointer;
    }
  }

  &__author {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}

.author {
    font-family: 'Figtree-ExtraBold';
  &__image {
    width: 32px;
  }
}
</style>