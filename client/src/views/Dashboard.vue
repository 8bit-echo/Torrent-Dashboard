<template>
  <div
    id="dashboard"
    class="container"
    ref="container"
  >
    <Controls />
    <Transmission />
  </div>
</template>

<script>
  import Controls from '@/components/Controls';
  import Transmission from '@/components/Transmission';
  import { mapState, mapActions } from 'vuex';
  import { setGlobalTimers, deviceType, isPWA } from '@/functions';

  export default {
    name: 'Dashboard',
    components: {
      Controls,
      Transmission
    },

    computed: {
      ...mapState(['torrents', 'selectedTorrent'])
    },

    methods: {
      ...mapActions(['getTorrents'])
    },

    created() {
      // get torrents and put it on a 7 second polling.
      this.getTorrents();
      setGlobalTimers('torrents');
    },

    mounted() {
      if (!isPWA()) {
        this.$refs.container.style.paddingTop = '16px';
      }
    },

    destroyed() {
      clearInterval(window.torrentTimer);
    }
  };
</script>

<style lang="scss">
  .container {
    width: 100%;
    height: 99.9%;
    display: grid;
    grid-template-columns: calc(100% / 3) auto;
    overflow: hidden;

    @media screen and (max-width: 415px) {
      grid-template-columns: 1fr;
      grid-template-rows: 100px auto;
      overflow: hidden;
    }
  }
</style>
