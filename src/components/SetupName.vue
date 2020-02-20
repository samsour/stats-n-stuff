<template>
    <section class="setup-name">
        <h2>{{ text }}</h2>
        <input v-model="name" @keydown.enter="save" ref="input" />
        {{ name }}
    </section>
</template>

<script>
export default {
    name: "setup-name",
    computed: {
        name: {
            get() {
                return this.$store.getters["name"];
            },
            set(name) {
                this.$store.commit("SET_NAME", name);
            }
        }
    },
    data: () => ({
        text: "What's your name?"
    }),
    methods: {
        save() {
            // save condition
            if(this.name.length > 0) {
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
.setup-name {

}
</style>