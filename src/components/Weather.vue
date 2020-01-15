<template>
  <div class="weather">
    Weather component
  </div>
</template>

<script>
export default {
  name: 'weather',
  props: {
    location: String,
    language: String
  },
  data() {
    return {
      baseUrl: '//api.weatherstack.com/',
      accessKey: '5b91bf1c9ac7e5e0b0d863d3d11b6076'
    }
  },
  mounted() {
    fetch(`${this.baseUrl}?access_key=${this.accessKey}&query=${this.location}&language=${this.language}`)
    .then(response => {
      console.log(response.json())
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
