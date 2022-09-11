// @TODO: YOUR CODE HERE!
d3.csv("../assets/data/data.csv").then(function(Data) {
console.log(Data);
var state=[];
var poverty=[];
var healthcare=[];


Data.forEach(element=>{
    var x= Object.values(element);
    state.push(x[2]);
    poverty.push(x[3]);
    healthcare.push(x[9]);
});


   y(state,poverty,healthcare); 
    

});


function y(state,poverty,healthcare){
    console.log(state,poverty,healthcare);


var svg=d3.select('body').append('svg');
svg.attr('width','2000px').attr('height','2000px');



for (let i=0; i<poverty.length;i++){

svg.append('circle')
.attr('cx',parseFloat(poverty[i]*50)-300)
.attr('cy',-1*(parseFloat(healthcare[i]*20))+600)
.attr('r',10)
.attr('fill','yellow');

svg.append("text")
	.text(state[i])
	.attr("x",parseFloat(poverty[i]*50)-300 )
	.attr("y",-1*(parseFloat(healthcare[i]*20))+600)
    .attr("text-anchor", "middle");

}
	
svg.append('line')
.style("stroke", "lightgreen")
.style("stroke-width", 10)
.attr('x1',100)
.attr('y1',600)
.attr('x2',100)
.attr('y2',0);

svg.append('line')
.style("stroke", "lightgreen")
.style("stroke-width", 10)
.attr('x1',0)
.attr('y1',520)
.attr('x2',1200)
.attr('y2',520);

svg.append('circle')
.style('cx',100)
.style('cy',520)
.attr('r',5)
.attr('fill','red');

for (let i=0;i<11;i++){
    svg.append('line')
    .style("stroke", "lightgreen")
    .style("stroke-width", 10)
    .attr('x1',100)
    .attr('y1',480-40*i)
    .attr('x2',80)
    .attr('y2',480-40*i);
}


for (let i=1;i<8;i++){
    svg.append('line')
    .style("stroke", "lightgreen")
    .style("stroke-width", 10)
    .attr('x1',100+100*i)
    .attr('y1',520)
    .attr('x2',100+100*i)
    .attr('y2',540);
}

for (let i=0;i<11;i++){
    svg.append('text')
    .text(6+2*i)
    .attr('x',75)
    .attr('y',480-40*i);
}

for (let i = 1; i<8; i++){
    svg.append('text')
    .text(8+2*i)
    .attr('x',100+100*i)
    .attr('y',545);
}

svg.append('text')
.text('Lacks Healthcare (%)')
.style("font-size","30px")
.attr('x',60)
.attr('y',400)
.attr('transform','rotate(-90,60,400)');

svg.append('text')
.text('Poverty (%)')
.style("font-size","30px")
.attr('x',400)
.attr('y',600)


}