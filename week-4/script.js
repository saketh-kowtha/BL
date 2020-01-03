$(document).ready(function() {


    var json = {};
    json.chart= {
        type: 'area',
        renderTo: "container"
    }
    json.xAxis = {
        labels:{enabled: false},
        gridLineColor:"transparent",
        tickLength: 0,
        lineColor: "transparent"
    }

    json.yAxis = {
        title: {text: null},
        gridLineColor:"transparent",
        labels:{enabled: false},
    }

    json.legend = {enabled: false}
    json.series = [{
            color: '#d9e1fd',
            data: [129.9, 171.5, 106.4, 19.2, 14.0, 176.0, 35.6, 148.5, 16.4, 194.1, 5.6, 154.4]
        }, {
            color: '#adb4f6',
            data: [129.9, 171.5, 106.4, 19.2, 14.0, 176.0, 35.6, 148.5, 16.4, 194.1, 5.6, 154.4].reverse()
        }]

    json.title= {text: null},

    
    $('#area_chart').highcharts(json);
    json.chart.type = "spline"
    json.xAxis.labels.enabled  =true
    json.yAxis.labels.enabled  =true
    $('#line_chart').highcharts(json);
 });


 $(document).ready(function() {
    $(window).resize(function() { 
        window.location.reload()
    });
    
});
