<template>
  <div class="station-board-entry">
    <div>{{ name }} - {{ origin }}</div>
    <div><span :class="{'green': time == rtTime || !rtTime}">{{ time }}</span>
    <span v-if="rtTime && time !== rtTime" class="red"> +{{ delay }} min ({{ rtTime }})</span></div>
  </div>
</template>

<script>
export default {
  name: 'station-board-entry',
  props: ['name', 'origin', 'stop', 'time', 'date', 'rtTime', 'rtDate', 'trainCategory', 'trainNumber'],
  computed: {
    delay() {
        const time1 = new Date(), time2 = new Date();
        time1.setHours(...this.time.split(":"));
        time2.setHours(...this.rtTime.split(":"));
        const delay = Math.abs((time1.getTime() - time2.getTime()) / 1000 / 60);
        return delay;
    }
  }
}
</script>

<style lang="scss" scoped>
.red {
  color: #e94a4a
}

.green {
  color: rgb(68, 204, 113);
}
</style>