

//  const time = Fast.hours + Fast.minutes
// }
//  +0000
// let points = data.map(d => {
//     return { x: d.date, y: d.hours };
//   });



let chart = JSC.chart('chartDiv', {
    type: 'column',
    yAxis: {
        scale_type: 'stackedFull',
        label_text: 'Hours Fasted',
        yAxis_scale_type: 'time'
    },
    title_label_text: 'Your Fast History',
    xAxis_label_text: 'Days',
    // xAxis_scale_type: 'time',
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


