<template>
  <div class="about">
    <baidu-map
      class="aboutMap"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
    >
      <!-- 版权信息控件 -->
      <bm-copyright
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :copyright="[
          {
            id: 1,
            content: 'Copyright Message',
            bounds: { ne: { lng: 110, lat: 40 }, sw: { lng: 0, lat: 0 } },
          },
          { id: 2, content: '<a>我是版权信息</a>' },
        ]"
      >
      </bm-copyright>
      <!-- 城市列表控件 -->
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <!-- 全景视角控件 -->
      <bm-panorama></bm-panorama>
    </baidu-map>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      center: {
        lng: 0,
        lat: 0,
      },
      zoom: 2,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.center.lng = 120.21194;
      this.center.lat = 30;
      this.zoom = 11;
    },
  },
};
</script>

<style scoped lang="less">
.about {
  .aboutMap {
    width: 100%;
    height: 843.4px;
  }
}
</style>
