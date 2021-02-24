class Chart {
 
    constructor() {
    }

    render() {
        
    const data = Object.values(Fast.all).map(fast => [fast.createdAt, fast.hours])
    JSC.chart('chartDiv', { 
      debug: true, 
      type: 'column', 
      yAxis: { 
        scale_type: 'stacked', 
        label_text: 'Hours'
      }, 
      title_label_text: 'Fasting History', 
      xAxis_label_text: 'Date', 
      xAxis: { scale_type: 'time' },
            series: [
                {
                    name: 'Fasting Time',
                    id: 'f1',
                    points: data
                    
                }                               
            ]
        });
    }
}
