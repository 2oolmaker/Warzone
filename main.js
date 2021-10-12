
class Weapon {
  constructor(name, bv_lut_index, body_dmg_muls) {
    this.name = name;
    this.bv_lut_index = bv_lut_index;
    this.body_dmg_muls = body_dmg_muls;
  }
}

const MW_ARS = [
  new Weapon("AK-47", 3, []),
  new Weapon("AN-94", 3, [1.62, 1.62, 1.2, 1.2, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("AS VAL", 7, [1.57, 1.57, 1.25, 1.25, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("CR-56 AMAX", 4, [1.55, 1.55, 1.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("Kilo 141", 3, [1.5, 1.5, 1.01, 1.01, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("M13", 3, []),
  new Weapon("M4A1", 3, []),
  new Weapon("FN Scar 17", 3, [1.62, 1.62, 1.5, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("Grau 5.56", 3, []),
  new Weapon("RAM-7", 3, []),
  new Weapon("FAL", 3, [2.05, 2.05, 1.2, 1.2, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("FR 5.56", 3, [1.62, 1.62, 1.01, 1.01, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("Oden", 3, [1.62, 1.62, 1.62, 1.3, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0])
];

const CW_ARS = [
  new Weapon("Krig 6", 3, [1.5, 1.5, 1.1, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("EM2", 5, [1.5, 1.5, 1.2, 1.01, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("AK-47", 3, []),
  new Weapon("FFAR", 3, [1.4, 1.4, 1.2, 1.0, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("Groza", 3, [1.5, 1.5, 1.3, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("QBZ", 3, [1.5, 1.5, 1.2, 1.2, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("C58", 6, [1.58, 1.58, 1.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("XM4", 3, [1.5, 1.5, 1.5, 1.01, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("FARA", 3, [1.56, 1.56, 1.2, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0])
];

const MW_SRS = [
  new Weapon("HDR", 35, [2.1, 2.1, 2.1, 1.1, 1.1, 1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9]),
  new Weapon("AX-50", 32, [2.1, 2.1, 2.1, 1.1, 1.05, 1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9]),
  new Weapon("Kar 98k 1?", 36, [2.0, 2.0, 1.8, 1.8, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]), // unsure which of these is correct
  new Weapon("Kar 98k 2?", 38, [2.0, 2.0, 1.8, 1.8, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("Dragunov", 33, [2.0, 2.0, 2.0, 1.95, 1.01, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("EBR", 34, [3.0, 3.0, 1.1, 1.1, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  //new Weapon("SP-R 208 Mag?", 37, [2.0, 2.0, 1.8, 1.8, 1.01, 1.15, 1.15, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0])
];

const CW_SRS = [
  new Weapon("SKS", 34, [2.1, 2.1, 1.2, 1.2, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]),
  new Weapon("Swiss K31", 34, []),
  new Weapon("LW3", 35, []),
  new Weapon("Pellington", 39, []),
  new Weapon("ZRG", 40, [2.1, 2.1, 2.1, 1.7, 1.25, 1.1, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0])
];

const WEAPONS = MW_ARS.concat(CW_ARS).concat(MW_SRS).concat(CW_SRS) ;

const margin = {top: 30, right: 60, bottom: 50, left: 50};
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear().domain([0, 375 / 128]).range([0, width]);
var y_vel = d3.scaleLinear().domain([0, 1100]).range([height, 0]);
var y_dst = d3.scaleLinear().domain([0, 1800]).range([height, 0]);

var xAxis = d3.axisBottom().scale(x).ticks(5);

var yAxisLeft = d3.axisLeft().scale(y_vel).ticks(5);

var yAxisRight = d3.axisRight().scale(y_dst).ticks(5);

var line_vel = d3.line()
    .x((d) => x(d.time))
    .y((d) => y_vel(d.vel));

var line_dst = d3.line()
    .x((d) => x(d.time))
    .y((d) => y_dst(d.dst));

const bv_lut = (bv_lut) => {
  const INS_IN_M = 39.3701;
  const dst = Array.from(bv_lut.slice(1), (dst, i) => { return {
      "dst": dst / INS_IN_M,
      "time": (i / 128)
    };});

  const vel = Array.from({length: dst.length - 1},
    (u, i) => { return {
      "vel": (dst[i + 1].dst - dst[i].dst) * 128,
      "time": (dst[i + 1].time + dst[i].time) / 2
    };});

  return {
    "dst": dst,
    "vel": vel
  };
}

const draw_lines = (svg, data, color) => {
  svg.append("path")
      .attr("d", line_vel(data.vel))
      .style("stroke", color);

  svg.append("path")
      .style("stroke-dasharray", ("3, 3"))
      .style("stroke", color)
      .attr("d", line_dst(data.dst));
}

const draw_graph = () => {
  var svg = d3.select("#graph")
      .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
      .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("text")
        .attr("transform",
              "translate(" + (width / 2) + " ," +
                             (height + margin.top + 10) + ")")
        .style("text-anchor", "middle")
        .text("Time (s)");

    svg.append("g")
        .attr("class", "y axis")
        .style("fill", "steelblue")
        .call(yAxisLeft);

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left)
        .attr("x", -(height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Velocity (m/s) solid");

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + ", 0)")
        .style("fill", "red")
        .call(yAxisRight);

    svg.append("text")
        .attr("transform", "rotate(90)")
        .attr("y", -(width + margin.right))
        .attr("x", (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Distnace (m) dashed");
    return svg;
}

const plot_bvs = (indices, colors) => {
  data = Array.from(BV_LUTS, (lut, i) => bv_lut(lut));
  d3.select("#graph").selectAll("svg").remove();
  let svg = draw_graph();
  for (let i = 0, l = Math.min(indices.length, colors.length); i < l; ++i) {
    draw_lines(svg, data[indices[i]], colors[i]);
  }
}

var currently_graphed = [3, 4, 7];

const COLORS = [
  "MediumSeaGreen",
  "DarkOrange",
  "Maroon",
  "RoyalBlue",
  "Violet",
  "Crimson",
]

const table_set_colors = () => {
  let rows = document.getElementById("w_table").rows;
  for (let i = 1, l = rows.length; i < l; ++i) {
    let row = rows[i];
    let row_cg_index = currently_graphed.indexOf(parseInt(row.cells[1].innerText));
    console.log(row_cg_index);
    if ((row_cg_index != -1) && (row_cg_index < COLORS.length)) {
      row.style.color = COLORS[row_cg_index];
    } else {
      row.style.color = "initial";
    }
  }
}

const graph_toggle_line = (bv_index) => {
  let cg_index = currently_graphed.indexOf(bv_index);
  if (cg_index != -1) {
    /* remove from cg */
    currently_graphed.splice(cg_index, 1);
  } else if (currently_graphed.length < COLORS.length) {
    /* add to cg */
    currently_graphed.push(bv_index);
  }
  currently_graphed.sort();
  plot_bvs(currently_graphed, COLORS);
  table_set_colors();
}

const gen_table = (data) => {
  let table = document.getElementById("w_table");
  table.innerHTML = "";

  /* data */
  for (let i = 0, l = data.length; i < l; ++i) {
    let row = table.insertRow();
    row.insertCell().appendChild(document.createTextNode(data[i].name));
    let tgl_btn = document.createElement("button");
    tgl_btn.innerHTML = data[i].bv_lut_index;
    tgl_btn.onclick = () => graph_toggle_line(data[i].bv_lut_index);
    tgl_btn.style.width = "100%";
    row.insertCell().appendChild(tgl_btn);
    for (let j = 0, m = data[i].body_dmg_muls.length; j < m; ++j) {
      row.insertCell().appendChild(document.createTextNode(data[i].body_dmg_muls[j]));
    }

  }

  /* headers */
  let table_head = table.createTHead();
  let head_row = table_head.insertRow();
  head_row.insertCell().appendChild(document.createElement("th")
    .appendChild(document.createTextNode("Name")));
  head_row.insertCell().appendChild(document.createElement("th")
    .appendChild(document.createTextNode("BV Profile")));

  const mul_names = [
    "Head 1",
    "Head 2",
    "Neck",
    "Chest",
    "Stomach",
    "Other (O) 1",
    "O 2",
    "O 3",
    "O 4",
    "O 5",
    "O 6",
    "O 7",
    "O 8",
    "O 9",
    "O 10",
    "O 11",
    "O 12"
  ];

  for (let i = 0, l = mul_names.length; i < l; ++i) {
    head_row.insertCell().appendChild(document.createElement("th")
      .appendChild(document.createTextNode(mul_names[i])));
  }
}

const main = () => {
  gen_table(WEAPONS);
  plot_bvs(currently_graphed, COLORS);
  table_set_colors();
}

window.onload = () => {
  main();
}
