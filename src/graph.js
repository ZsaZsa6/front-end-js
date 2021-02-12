let chart = JSC.chart('chartDiv', {
    type: 'column',
    yAxis: {
        scale_type: 'stacked',
        label_text: 'Hours Fasted'
    },
    title_label_text: 'Your Fast History',
    xAxis_label_text: 'Days',
    series: [
        {
            name: 'Fasting Time',
            id: 'f1',
            points: [
                { x: 'Monday', y: 20 },
                { x: 'Tuesday', y: 16 },
                { x: 'Wednesday', y: 22 },
                { x: 'Thursday', y: 23 },
                { x: 'Friday', y: 23 }

            ]
        },
        {
            name: 'Feasting Time',
            points: [
                { x: 'Monday', y: 4 },
                { x: 'Tuesday', y: 8 },
                { x: 'Wednesday', y: 2 },
                { x: 'Thursday', y: 1 },
                { x: 'Friday', y: 1 }
            ]
        }
    ]
});


//  name: 'Saw', 
//       id: 's1', 
//       points: [ 
//         { x: 'Q1', y: 230 }, 
//         { x: 'Q2', y: 240 }, 
//         { x: 'Q3', y: 267 }, 
//         { x: 'Q4', y: 238 } 
//       ] 
//     }, 
//     { 
//       name: 'Hammer', 
//       points: [ 
//         { x: 'Q1', y: 325 }, 
//         { x: 'Q2', y: 367 }, 
//         { x: 'Q3', y: 382 }, 
//         { x: 'Q4', y: 371 } 
//       ] 
//     }