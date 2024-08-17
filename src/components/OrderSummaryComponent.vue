<template>
    <div class="container">
        <img src="@assets/OrderSummaryComponent/images/illustration-hero.svg" class="header">
        <div class="body">
            <h2>Order Summary</h2>
            <p class="description">You can now listen to millions of songs, audiobooks, and podcasts on any device
                anywhere you like!</p>
            <div class="plan__container">
                <div class="plan__details">
                    <img src="@assets/OrderSummaryComponent/images/icon-music.svg" alt="">
                    <div class="name">
                        <b>Annual Plan</b>
                        <p>$59.99/year</p>
                    </div>
                </div>
                <a href="#" class="plan__action">Change</a>
            </div>
            <div class="plan__actions">
                <button class="proceed">Proceed to Payment</button>
                <button>Cancel Order</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$paleBLeu: hsl(225, 100%, 94%);
$brightBlue: hsl(245, 75%, 52%);

$veryPaleBlue: hsl(225, 100%, 98%);
$desaturatedBlue: hsl(224, 23%, 55%);
$darkBlue: hsl(223, 47%, 23%);

p, h2 {
    margin: 0;
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
    font-size: 16px;
    background-color: $paleBLeu !important;
    background-image: url("@assets/OrderSummaryComponent/images/pattern-background-desktop.svg");
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 800px) {
        background-image: url('@assets/OrderSummaryComponent/images/pattern-background-mobile.svg');
    }
}

.container {
  border-radius: 20px;
  max-width: 400px;
  overflow: hidden;
  background-color: white;
}

.header {
  width: 100%;
}

.body {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    color: $darkBlue;

    .description {
        color: $desaturatedBlue;
    }
}

.plan {
    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        background-color: rgb(244, 245, 247);
        border-radius: 5px;
    }

    &__details {
        display: flex;
        gap: 10px;

        .name {
            display: flex;
            flex-direction: column;
            align-items: baseline;

            p {
                margin: 0;
                color: $desaturatedBlue;
            }
        }
    }

    &__action {
        color: $brightBlue;
        text-decoration: underline;

        &:hover {
            opacity: 0.8;
        }
    }

    &__actions {
        display: flex;
        flex-direction: column;
        gap: 8px;

        button {
            background-color: inherit;
            opacity: 0.8;

            &:hover {
                opacity: 1;
                border: 0;
            }

            &.proceed {
                opacity: 1;
                background-color: $brightBlue;
                color: $veryPaleBlue;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}
</style>