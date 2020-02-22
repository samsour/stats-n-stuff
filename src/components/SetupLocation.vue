<template>
    <section class="setup-location">
        <h2 class="setup-location__headline">{{ text.question }}</h2>
        <button @click="detectLocation" class="setup-location__button setup-location__button--primary">{{ text.automaticDetection }}</button>
        <button @click="activateManualMode" class="setup-location__button setup-location__button--secondary">{{ text.manualInput }}</button>
        {{ location }}
        <input v-if="manualMode" v-model="locationInput" @keydown.enter="save" ref="locationInput">
    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "setup-location",
    computed: {
        ...mapGetters({
            coordinates: "mapCoordinates",
            location: "location",
        })
    },
    data: () => ({
        text: {
            question: "Where are you right now?",
            automaticDetection: "Automatically detect your location",
            manualInput: "Manually set location"
        },
        locationInput: "",
        usingCurrentLocation: false,
        manualMode: false
    }),
    methods: {
        detectLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.$store.dispatch("findLocationByCoordinates" , position.coords);
                });
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        },
        activateManualMode() {
            console.log("manual mode");
            this.manualMode = true;
            this.$refs.locationInput.focus();
        },
        save() {
            // save condition
            if(this.location.length > 0) {
                this.$emit("save");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.setup-location {
    
    &__button {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 16px;
        display: block;
        cursor: pointer;
        background: transparent;
        border: 0;
        color: var(--color-primary);


        &--primary {
            background-color: var(--color-secondary);
            border: 2px solid var(--color-primary);
            padding: 20px;
            
            &:hover {
                background-color: var(--color-primary);
                color: var(--color-secondary);
            }
        }

        &--secondary {
            position: relative;

            &::after {
                content: "";
                display: block;
                height: 2px;
                width: 0%;
                margin: auto;
                background: var(--color-primary);
                transition: width 200ms ease-out;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }
        }
    }
}
</style>