// 图例
// import Legend from './map_module/maptool/legend';
// 所有的工具
// import {
//   FullExtent,
//   FullScreen,
//   ISearchBoard,
//   ISearch,
//   LocationBoard,
//   Location,
//   Measurement,
//   MeasurementBoard,
//   RenderClear,
//   SearchBoard,
//   Search,
//   ZoomIn,
//   ZoomOut
// } from './map_module/maptool/toolbar';
// 地图类型（矢量、影像）
// import MapType from './map_module/maptool/mapType';
// 鹰眼
// import OverViewMap from './map_module/maptool/overviewMap';
import TableColumn from "./map_module/tableColumn/index";
import NoticTip from "./map_module/notic/notic";
import ScrollTop from "./map_module/scrollTop/index";

var components = [TableColumn, NoticTip, ScrollTop];
const install = function (Vue) {
  components.map(function (component) {
    console.log("component", component);
    Vue.component(component.name, component);
  });
};

export default {
  ...components,
  install,
};
