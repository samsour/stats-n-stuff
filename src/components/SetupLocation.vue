<template>
    <section class="setup-location">
        <h2>{{ text }}</h2>
        <input v-model="location" @keydown.enter="save" ref="input">
        {{ location }}
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
        text: "Where are you?"
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
}
</style>