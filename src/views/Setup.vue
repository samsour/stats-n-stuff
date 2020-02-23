<template>
    <div :class="$options.name">
        <setup-name v-if="activeSection === 'name'" @save="activateNext" />
        <setup-location v-if="activeSection === 'location'" @save="activateNext" />
    </div>
</template>

<script>
import SetupName from "../components/SetupName";
import SetupLocation from "../components/SetupLocation";

export default {
    name: "setup",
    components: {
        SetupLocation,
        SetupName
    },
    computed: {
        missingSettings(){
            return this.$store.getters["missingSettings"]
        }
    },
    data: () => ({
        activeSection: ""
    }),
    created() {
        this.activateNext();
    },
    methods: {
        activateNext() {
            if (this.missingSettings.length > 0) {
                this.activeSection = this.missingSettings[0];
            } else {
                const back = this.$store.state.lastRouteBeforeSetup;
                if (back) {
                    this.$router.replace(back);
                } else {
                    this.$router.replace("/");
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.setup {
}
</style>