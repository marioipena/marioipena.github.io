const csvUrl = "https://raw.githubusercontent.com/charleyferrari/CUNY_DATA_608/master/module6/d3_lab/ue_industry.csv";
d3.csv(csvUrl).then(function(data) {

    

    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.index))
        .range([1180, 20]);
    
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.Agriculture))
        .range([580, 20]);

    d3.select('#part4')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', d => 5)
        .attr('cx', d => xScale(d.index))
        .attr('cy', d => yScale(d.Agriculture));

});
