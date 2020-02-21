<template>
    <section class="setup-location">
        <h2 class="setup-location__headline">{{ text.question }}</h2>
        <button class="setup-location__button setup-location__button--primary">{{ text.option1 }}</button>
        <button class="setup-location__button setup-location__button--secondary">{{ text.option2 }}</button>
    
        <input v-if="manualMode" v-model="location" @keydown.enter="save" ref="input">
    </section>
</template>

<script>
export default {
    name: "setup-location",
    computed: {
        location: {
            get() {
                return this.$store.getters["location"];
            },
            set(locationName) {
                this.$store.commit("SET_LOCATION", locationName);
            }
        }
    },
    data: () => ({
        text: {
            question: "Where are you right now?",
            option1: "Automatically detect your location",
            option2: "Manually set location"
        },
        manualMode: false,
        usingCurrentLocation: false
    }),
    methods: {
        save() {
            // save condition
            if(this.location.length > 0) {
                this.$emit("save");
            }
        }
    },
    mounted() {
        this.$refs.input.focus();
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