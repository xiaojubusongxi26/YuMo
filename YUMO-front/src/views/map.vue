<template>
  <div id="map" />
</template>

<script setup lang="ts">
import MapDataJson from "@/assets/map/ChinaBase.json";
import ProvincialDataJson from "@/assets/map/ProvincialBase.json";
import {
  Scene,
  LayerPopup,
  PointLayer,
  PolygonLayer,
  LineLayer,
} from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import { onMounted, onUnmounted } from "vue";

// ------------------------------ 初始化数据 ------------------------------
const mapData = MapDataJson;
const travelData = ProvincialDataJson;
(function () {
  mapData['features'].forEach((item: any) => {
    item.properties["value"] = Math.random() * 100;
    item.properties["travelList"] = [
      {
        imgs: [
          "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-l8r8dr.jpg",
          "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-yxwx9k2.jpg",
        ],
        content: "欲买桂花同载酒，终不似，少年游",
        time: "2024-04-19",
      },
      {
        imgs: [
          "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-l8r8dr.jpg",
          "https://xiaojubusongoss.oss-cn-beijing.aliyuncs.com/img/wallhaven-yxwx9k2.jpg",
        ],
        content: "欲买桂花同载酒，终不似，少年游",
        time: "2024-04-19",
      },
    ];
  });
})();

function init() {
  // 初始化地图
  const scene = new Scene({
    id: "map",
    map: new GaodeMap({
      center: [104.288144, 31.239692],
      zoom: 4.4,
      token: "128e02747b360c92ae6c113f1b7e48fe",
      mapStyle: "amap://styles/grey",
      resizeEnable: true,
    } as any),
  });
  scene.on("loaded", () => {
    // 地图数据
    const chinaPolygonLayer = new PolygonLayer({
      autoFit: true,
    }).source(mapData);
    chinaPolygonLayer
      .color("value", ["#1F1F20", "#606D80", "#567EBB", "#2B4C7E"])
      .shape("fill")
      .style({
        opacity: 1,
      });
    //  图层边界
    const layer2 = new LineLayer({
      zIndex: 2,
    })
      .source(mapData)
      .color("rgb(93,112,146)")
      .size(0.6)
      .style({
        opacity: 1,
      });

    scene.addLayer(chinaPolygonLayer);
    scene.addLayer(layer2);

    // 弹出层
    const layerPopup = new LayerPopup({
      items: [
        {
          layer: chinaPolygonLayer,
          customContent: (e) => {
            // 阻止滚动事件冒泡
            setTimeout(() => {
              const mapDom = document.querySelector(".map-popup");
              mapDom?.addEventListener("wheel", (e) => {
                e.stopPropagation();
              });
            }, 200);
            let resDiv = "";
            e.travelList.forEach((item: any) => {
              let imgsHtml = "";
              item?.imgs &&
                item.imgs.forEach((img: string) => {
                  imgsHtml += `<img src="${img}" alt="" />`;
                });
              resDiv += `
            <a href="javascript:;" class="tarvel-box">
                <div class="carousel">
                  ${imgsHtml}
                </div>
                <div class="tarvel-text">
                  <div class="content ellipsis-2">
                    ${item.content}
                  </div>
                  <div class="time">${item.time}</div>
                </div>
              </a>
          `;
            });
            return `<div class="map-popup">
              <div class="travel-total">
                ${e.name}
                总数：${Number.parseInt(e.value)}
              </div>
              <div style="scroll-snap-type: y mandatory;">${resDiv}</div>
            </div>`;
          },
        },
      ],
      trigger: "click",
    });
    scene.addPopup(layerPopup);

    // 省份名
    const labelLayer = new PointLayer({
      zIndex: 5,
    })
      .source(travelData, {
        parser: {
          type: "json",
          coordinates: "center",
        },
      })
      .color("#fff")
      .shape("name", "text")
      .size(12)
      .style({
        opacity: 1,
        fontWight: "900",
        stroke: "#fff",
        strokeWidth: 0.2,
        padding: [5, 5],
        textAllowOverlap: false,
      });

    scene.addLayer(labelLayer);
  });
}

onMounted(() => {
  init();
});
// ------------------------------ 销毁地图 ------------------------------
onUnmounted(() => {
  const mapDom = document.getElementById("map");
  mapDom?.remove();
});
</script>
<style lang="scss">
#map {
  width: 100vw;
  height: 99.5vh;
  overflow: hidden;
  position: absolute;
  top: 0;
}
.map-popup {
  box-sizing: border-box;
  width: 100%;
  max-height: 290px;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  .travel-total {
    color: #000;
    font-size: 16px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #9aa1ae;
  }
  .tarvel-box {
    display: block;
    margin-bottom: 10px;
    -webkit-user-drag: none;
    scroll-snap-align: center;
    color: #000;
    border-radius: 10px;
    background-color: #fff;
    transition: 0.3s all;
    box-sizing: border-box;
    border: 2px solid #fff;
    &:hover {
      border: 2px solid var(--theme-color);
      background-color: var(--theme-color);
      color: #fff;
    }
    .carousel {
      width: 100%;
      border-radius: 10px;
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      img {
        width: 100%;
        flex: none;
        height: 125px;
        scroll-snap-align: center;
        object-fit: cover;
        -webkit-user-drag: none;
      }
    }
    .tarvel-text {
      margin-top: 10px;
      padding: 0 5px;
      .content {
        line-height: 18px;
        font-size: 14px;
        padding-right: 5px;
      }
      .time {
        line-height: 24px;
        font-size: 12px;
        text-align: right;
      }
    }
  }
}
</style>
