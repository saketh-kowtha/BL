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
    json.yAxis.labels.enabled  =false

    json.xAxis.categories = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    json.chart.type = "column"
    json.series = [{
        color: "#4E4DE8",
        data: [1,2,3,1, 1,2, 0.5]
    }]
    $('#current-chart').highcharts(json);




    $(".tag:contains(Approved)").css("background-color", "#4cceac")
    $(".tag:contains(Pending)").css("background-color", "#ff6f59")
    $(".tag:contains(Rejected)").css("background-color", "#db504a")


    
 });

