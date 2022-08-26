import * as React from "react";
import ReactEcharts from "echarts-for-react";
import { useSelector} from "react-redux";

//Import json file. Used in {options}.


const DocStats = () => {
    const aadhar=useSelector((state) => state.stat.aadharCount);
    const ration=useSelector((state) => state.stat.rationCount);
    const passport=useSelector((state) => state.stat.passportCount);
    const pan=useSelector((state) => state.stat.panCount);
    const driving=useSelector((state) => state.stat.drivingCount);
    const marksheet=useSelector((state) => state.stat.marksheetCount);

  const data2=[
    {
      "value": aadhar,
      "name": "Aadhar Cards",
      "itemStyle": {
        "normal": {
          "color": "#5045f6"
        }
      }
    },
    {
      "value": pan,
      "name": "PAN Cards",
      "itemStyle": {
        "normal": {
          "color": "#f69846"
        }
      }
    },
    {
      "value": driving,
      "name": "Driving Licenses",
      "itemStyle": {
        "normal": {
          "color": "#ff4343"
        }
      }
    },
    {
      "value": passport,
      "name": "Passports",
      "itemStyle": {
        "normal": {
          "color": "#45dbf7"
        }
      }
    },
    {
      "value": ration,
      "name": "Ration Cards",
      "itemStyle": {
        "normal": {
          "color": "#f6d54a"
        }
      }
    },
    {
      "value": marksheet,
      "name": "Marksheet",
      "itemStyle": {
        "normal": {
          "color": "#f66d4a"
        }
      }
    },
  ]

//Array of names for legend in {options}
const dataNames2 = data2.map(i => i.name);
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
    formatter: "{a}<br/><strong>{b}</strong>: {c} "
  },
  title: {
    text: "Document Types",
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
    data: dataNames2,
    textStyle: {
      color: "#fff"
    }
  },
  series: [
    {
      name: "Document Type",
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
      data: data2
    }
  ]
};
    return(
    <div>
  <ReactEcharts option={option} style={style} className="pie-chart" />
  </div>)
};

export default DocStats;