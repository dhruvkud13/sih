import * as React from "react";
import { render } from "react-dom";
import ReactEcharts from "echarts-for-react";
import { useSelector} from "react-redux";

//Import json file. Used in {options}.


const Stats = () => {
    const jpeg = useSelector((state) => state.stat.jpegCount);
    const pdf = useSelector((state) => state.stat.pdfCount);
    console.log(jpeg);
    console.log(pdf);
const data=[
    {
      "value": pdf,
      "name": "PDFs",
      "itemStyle": {
        "normal": {
          "color": "#f845f1"
        }
      }
    },
    {
      "value": jpeg,
      "name": "JPEGs",
      "itemStyle": {
        "normal": {
          "color": "#ad46f3"
        }
      }
    }
  ]

//Array of names for legend in {options}
const dataNames = data.map(i => i.name);

//Chart style
const style = {
  height: "100vh",
  width: "100%"
};

//Chart options
let option = {
  backgroundColor: "rgb(43, 51, 59)",
  toolbox: {
    show: true,
    feature: {
      mark: {
        show: true
      },
      magicType: {
        show: true,
        type: ["pie", "funnel"]
      },
      restore: {
        show: true,
        title: "Restore"
      },
      saveAsImage: {
        style: {
            color: "#fff",
        },
        show: true,
        title: "Save Image"
      }
    }
  },
  graphic: [
    {
      type: "group",
      rotation: Math.PI / 4,
      bounding: "raw",
      right: 200,
      bottom: 100,
      z: 100,
      children: [
        {
          type: "rect",
          left: "center",
          top: "center",
          z: 100,
          shape: {
            width: 600,
            height: 50
          },
          style: {
            fill: "rgba(0,0,0,0.3)"
          }
        },
        {
          type: "text",
          left: "1px",
          top: "center",
          z: 100,
          style: {
            fill: "#fff",
            text: "ICCR DMS 2022",
            font: "bold 26px Microsoft YaHei"
          }
        }
      ]
    },
    // {
    //   type: "group",
    //   left: "0",
    //   top: "bottom",
    //   children: [
    //     {
    //       type: "rect",
    //       z: 100,
    //       left: "center",
    //       top: "middle",
    //       shape: {
    //         width: 190,
    //         height: 90
    //       },
    //       style: {
    //         fill: "#fff",
    //         stroke: "#555",
    //         lineWidth: 2,
    //         shadowBlur: 8,
    //         shadowOffsetX: 3,
    //         shadowOffsetY: 3,
    //         shadowColor: "rgba(0,0,0,0.3)"
    //       }
    //     },
    //     {
    //       type: "text",
    //       z: 100,
    //       left: "center",
    //       top: "middle",
    //       style: {
    //         fill: "#333",
    //         text: ["Document Statistics", "With multiple lines."].join("\n"),
    //         font: "14px Arial"
    //       }
    //     }
    //   ]
    // }
  ],
  // Hover Tooltip
  // {a} = series:[{name:}]
  // {b} = series:[{data: [{name:}]}]
  // {c} = series:[{data: [{value:}]
  tooltip: {
    trigger: "item",
    formatter: "{a}<br/><strong>{b}</strong>: {c} Suffix"
  },
  title: {
    text: "Document Statistics",
    left: "center",
    top: 20,
    textStyle: {
      color: "#ffffff"
    }
  },
  calculable: true,
  legend: {
    icon: "circle",
    x: "center",
    y: "50px",
    data: dataNames,
    textStyle: {
      color: "#fff"
    }
  },
  series: [
    {
      name: "Series Name",
      type: "pie",
      animationDuration: 2000,
      animationEasing: "quarticInOut",
      radius: [10, 150],
      avoidLabelOverlap: false,
      startAngle: 90,
      hoverOffset: 5,
      center: ["50%", "50%"],
      roseType: "area",
      selectedMode: "multiple",
      label: {
        normal: {
          show: true,
          formatter: "{c}" // {c} data: [{value:},]
        },
        emphasis: {
          show: true
        }
      },
      labelLine: {
        normal: {
          show: true,
          smooth: false,
          length: 20,
          length2: 10
        },
        emphasis: {
          show: true
        }
      },
      data: data
    }
  ]
};
    return(
    <div>
  <ReactEcharts option={option} style={style} className="pie-chart" />
  </div>)
};

export default Stats;