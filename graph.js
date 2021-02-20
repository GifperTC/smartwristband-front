// window.onload = function () {

//     var chart = new CanvasJS.Chart("Graph of motion", {
//         animationEnabled: true,
//         theme: "dark2",
//         title:{
//             text: "Graph of calories and movement"
//         },
//         data: [{        
//             type: "line",
//             indexLabelFontSize: 16,
//             dataPoints: dps
//         }]

//     });

//     var dps = [];
//     var xVal = 0;
//     var yVal = 100; 
//     var updateInterval = 1000;
//     var dataLength = 7; // number of dataPoints visible at any point

//     // var coin = [{x: 0, y: 100},{x: 2, y: 23},{x: 4, y: 50},{x: 8, y: 150}] 

//     var updateChart = function (count) {

// 	    count = count || 1;

// 	    for (var j = 0; j < count; j++) {

//             fetch("http://158.108.182.16:50014/information", {method: "GET"})
//             .then((data) => data.json())
//             .then((datas) => {
//                 var value = datas[Object.keys(datas)];
//                 var array_num = Object.keys(value);
//                 var info = value[array_num];
//                 yVal = info.calories;
                
//                 // var time = info.movement_time;
//             })
//             .catch((error) => console.log("error", error));

// 		    dps.push({
// 			    x: xVal,
// 			    y: yVal
// 		    });
// 		    xVal++;
// 	    }

// 	    if (dps.length > dataLength) {
// 		    dps.shift();
// 	    }

// 	    chart.render();
//     };

//     updateChart(dataLength);
//     setInterval(function(){updateChart()}, updateInterval);

// }

/* DEMO FROM WEB */

window.onload = function () {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title :{
            text: "Graph of calories and movement"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
    
    var xVal = 0;
    var yVal = 100; 
    var updateInterval = 1000;
    var dataLength = 20; // number of dataPoints visible at any point
    
    var updateChart = function (count) {
    
        count = count || 1;
    
        for (var j = 0; j < count; j++) {
            yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }
    
        if (dps.length > dataLength) {
            dps.shift();
        }
    
        chart.render();
    };
    
    updateChart(dataLength);
    setInterval(function(){updateChart()}, updateInterval);
    
    }