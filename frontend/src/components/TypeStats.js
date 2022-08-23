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
  height: "75vh",
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
  tooltip: {
    trigger: "item",
    formatter: "{a}<br/><strong>{b}</strong>: {c}"
  },
  title: {
    text: "File Types",
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
      name: "Document Format",
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