class Chart {
    constructor(hours, minutes, createdAt, updatedAt) {
        this.hours = hours
        this.minutes = minutes
        this.createdAt = new Date(createdAt)
        this.updatedAt = new Date(updatedAt)
        this.feastHours = 24 - this.hours

    }
    calculations() {
        const startDate = this.createdAt.getTime();

        const endDate = this.updatedAt.getTime();



        const points = { x: startDate, y: this.hours }
        //    debugger

        this.buildChart(points)

    }

    render() {
        this.calculations();
    }
    buildChart(points) {

        JSC.chart('chartDiv', {
            // debug:true,
            type: 'column',
            yAxis: {
                // scale_type: 'stacked',
                label_text: 'Hours Fasted',
                // yAxis_scale_type: 'stacked',

            },
            series: [{ points: points }],
            title_label_text: 'Your Fast History',
            xAxis_label_text: 'Days',
            // xAxis_scale_type: 'time',
            series: [
                {
                    name: 'Fasting Time',
                    id: 'f1',
                    points: [
                        { x: '', y: '' },
                        { x: '', y: '' },
                        { x: '', y: '' },
                        { x: '', y: '' },
                        { x: '', y: '' }
                    ]
                }
            ]
        });
    }
}
