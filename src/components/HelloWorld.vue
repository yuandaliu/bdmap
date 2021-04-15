<template>
  <baidu-map class="bmap" center="杭州" :scroll-wheel-zoom="true">
    <!-- 比例尺控件 -->
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
    <!-- 缩放控件 -->
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <!-- 地图类型切换控件 -->
    <bm-map-type
      :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
      anchor="BMAP_ANCHOR_TOP_LEFT"
    ></bm-map-type>
    <!-- 缩略图控件 -->
    <bm-overview-map
      anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      :isOpen="true"
    ></bm-overview-map>
    <!-- 定位控件 -->
    <bm-geolocation
      anchor="BMAP_ANCHOR_BOTTOM_LEFT"
      :showAddressBar="true"
      :autoLocation="true"
    ></bm-geolocation>
  </baidu-map>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
.bmap {
  width: 100%;
  height: 843.4px;
}
</style>
