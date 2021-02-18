class Chart {
    constructor(hours, minutes, createdAt, updatedAt) {
        this.hours = hours
        this.minutes = minutes
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.feastHours = 24 - this.hours
        debugger
    }
    calculations() {
        this.createdAt = createdAt
        this.hours = hours

        const startDate = createdAt.getDate();
        // const endDate = this.updatedAt.getDate();


        const pointsData = (startDate, hours)
        const points = pointsData.map(d => {
            return { x: d.startDate, y: d.hours };
        })
        buildChart(points).render();
    }

    render() {
        this.calculations();
    }
    buildChart(points) {

        JSC.chart('chartDiv', {
            type: 'column',
            yAxis: {
                scale_type: 'stacked',
                label_text: 'Hours Fasted',
                // yAxis_scale_type: 'stackedFull',

            },
            series: [{ points: points }],
            title_label_text: 'Your Fast History',
            xAxis_label_text: 'Days',
            xAxis_scale_type: 'time',
            series: [
                {
                    name: 'Fasting Time',
                    id: 'f1',
                    points: [
                        { x: '', y: 10 },
                        { x: '', y: 10 },
                        { x: '', y: 20 },
                        { x: '', y: 10 },
                        { x: '', y: 20 }
                    ]
                }

                // {
                //     name: 'Feasting Time',
                //     id: 'f2',
                //     points: [
                //         { x: 'endDate', y: 14 },
                //         { x: 'endDate', y: 14 },
                //         { x: 'endDate', y: 4 },
                //         { x: 'Thursday', y: 14 },
                //         { x: 'Friday', y: 4 }
                //     ]
                // }
            ]

        });
    }
}


