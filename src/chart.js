class Chart {
    constructor(hours, minutes, createdAt, updatedAt) {
        this.hours = hours
        this.minutes = minutes
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.feastHours = 24 - this.hours
        // debugger

        // this.startDate = createdAt.getDate();
        // this.endDate = updatedAt.getDate();

    }
    render() {
        // startDate = createdAt.getDate();
        // endDate = updatedAt.getDate();
        this.hours.map
        startDate = `${this.createdAt}`.getDate()
        endDate = `${this.updatedAt}`.getDate()
        debugger


        JSC.chart('chartDiv', {
            type: 'column',
            yAxis: {
                scale_type: 'stackedFull',
                label_text: 'Hours Fasted',
                yAxis_scale_type: 'stackedFull',
                yAxis: [{}, { id: "y2" }],
                series: [{'f1'}, { yAxis: "y2" }]
            },
            title_label_text: 'Your Fast History',
            xAxis_label_text: 'Days',
            // xAxis_scale_type: 'time',
            series: [
                {
                    name: 'Fasting Time',
                    id: 'f1',
                    points: [
                        { x: startDate, y: this.hours },
                        { x: '', y: this.hours },
                        { x: 'startDate', y: this.hours },
                        { x: "startDate", y: this.hours },
                        { x: "startDate", y: this.hours }

                    ]
                },
                {
                    name: 'Feasting Time',
                    id: 'f2',
                    points: [
                        { x: 'endDate', y: this.feastHours },
                        { x: 'endDate', y: this.feastHours },
                        { x: 'endDate', y: this.feastHours },
                        { x: 'Thursday', y: this.feastHours },
                        { x: 'Friday', y: this.feastHours }
                    ]
                }
            ]
        });
    }
}


