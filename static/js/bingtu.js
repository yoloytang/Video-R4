var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
  renderer: "svg", // <-- 改成 SVG 渲染器
  useDirtyRect: false, // 这个参数在 SVG 模式下通常无效，但保留也无妨
});
var app = {}; // Placeholder if needed

var option;

// --- Chart Data (Robustness label in Outer Ring, Horizontal Rotation) ---
var data = [
  { // Perspective Reasoning
    name: "Perspective\nReasoning",
    itemStyle: { color: "#7EB6E6" },
    children: [
      { name: "Perspective\nType\nReasoning", value: 440, originalValue: 606, itemStyle: { color: "#BED9F3" } },
      { name: "Line\nRelationship\nReasoning", value: 151, originalValue: 151, itemStyle: { color: "#BFDFF7" } },
      { name: "Perspective\nTransformation\nSpotting", value: 213, originalValue: 213, itemStyle: { color: "#CCE6F6" } },
      { name: "Vanishing Point\nCounting", value: 114, originalValue: 114, itemStyle: { color: "#D5EEF5" } },
      { name: "Out-of-View\nReasoning", value: 230, originalValue: 308, itemStyle: { color: "#DCEBFA" } }
    ]
  },
  { // Perspective Perception
    name: "Perspective\nPerception",
    itemStyle: { color: "#F4A2A4" },
    children: [
      { name: "Vanishing Point\nPerception", value: 156, originalValue: 156, itemStyle: { color: "#FCE7E7" } },
      { name: "Lens Distortion\nPerception", value: 200, originalValue: 285, itemStyle: { color: "#FAD5D6" } },
      { name: "Critical Line\nPerception", value: 123, originalValue: 123, itemStyle: { color: "#F8C4C5" } },
      { name: "View Angle\nPerception", value: 162, originalValue: 162, itemStyle: { color: "#F6B3B5" } }
    ]
  },
  { // Perspective Robustness
    name: "Perspective\nRobustness", // Parent data item
    itemStyle: { color: "#C2D9A0" }, // Parent color
    label: { show: false }, // Hide label on parent segment
    children: [
      { // Child data item (where label is shown)
        name: "Perspective\nRobustness", // Label text
        value: 440, // Required by ECharts
        originalValue: 593, // Value for the label
        itemStyle: { color: "#C2D9A0", borderWidth: 0 }, // Match color, try remove border
        label: {
          show: true // Ensure label is shown on this child segment
          // No 'rotate' property, defaults to level 2 setting (horizontal/radial)
        }
      }
    ]
  }
];

// --- Chart Configuration Options (Final Version with thicker rings) ---
option = {
  series: {
    type: "sunburst",
    data: data,
    radius: [0, "85%"], // Adjusted overall radius
    sort: null, // Keep data order
    emphasis: { focus: "ancestor" }, // Highlight ancestors on hover
    startAngle: 180, // Start position
    label: {
      // Default text style for labels (if not overridden by rich text)
      textStyle: {
        fontSize: 14,
        fontFamily: "Times New Roman",
        color: '#000', // Default color
        fontWeight: 'normal' // Default weight
      },
      // --- Corrected Label Formatter (Handles parent totals and rich text styling) ---
      formatter: function (params) {
        // Don't format if label is explicitly hidden
        if (params.data.label && params.data.label.show === false) { return ''; }

        var name = params.name || '';
        var originalValue = params.data.originalValue;
        var isLeaf = !params.data.children || params.data.children.length === 0;
        var valueStr = ''; // Initialize the value part of the label

        // --- Calculate Value String ---
        if (isLeaf && originalValue !== undefined) {
            // For LEAF nodes, use their own originalValue
            valueStr = `\n{small|${"(" + originalValue + ")"}}`;
        } else if (!isLeaf) {
            // For PARENT nodes, calculate sum from children
            var totalValue = 0;
            if (params.data.children) {
                params.data.children.forEach(function (child) {
                    if (child.originalValue !== undefined) { totalValue += child.originalValue; }
                });
            }
            // Create value string ONLY for the specific parent nodes that need it displayed
            if (name === "Perspective\nReasoning" || name === "Perspective\nPerception") {
               valueStr = `\n{small|${"(" + totalValue + ")"}}`;
            }
        }

        // --- Apply Rich Styles and Combine Name + Value ---
        if (name === "Perspective\nReasoning") {
          // Apply boldBlue style to name, append its calculated value string
          return `{boldBlue|${name}}${valueStr}`;
        } else if (name === "Perspective\nPerception") {
          // Apply boldRed style to name, append its calculated value string
          return `{boldRed|${name}}${valueStr}`;
        } else if (name === "Perspective\nRobustness" && isLeaf) { // Apply style to the leaf node label
           // Apply boldGreen style to name, append its leaf value string
           return `{boldGreen|${name}}${valueStr}`;
        }

        // --- Handle Other Labels (mostly the other leaf nodes) ---
        if (isLeaf) {
             // Return name + its leaf value string
             return `${name}${valueStr}`;
        }

        // Fallback for any other cases
        return name;
      },
      // --- Rich Text Style Definitions ---
      rich: {
        small: { // Style for the "(value)" part
          fontSize: 12,
          fontFamily: "Times New Roman",
          fontWeight: "bold",
          lineHeight: 15,
        },
        boldBlue: { // Style for Reasoning name
          color: '#003366', // Deep Blue
          fontWeight: 'bold',
          fontSize: 14,
          fontFamily: "Times New Roman"
        },
        boldRed: { // Style for Perception name
          color: '#B22222', // Deep Red (Firebrick)
          fontWeight: 'bold',
          fontSize: 14,
          fontFamily: "Times New Roman"
        },
        boldGreen: { // Style for Robustness name
          color: '#006400', // Deep Green
          fontWeight: 'bold',
          fontSize: 14,
          fontFamily: "Times New Roman"
        }
      },
    },
    // --- Level Configuration (Thicker Rings) ---
    levels: [
      {}, // Level 0 (center)
      { // Level 1 (Parents: Reasoning, Perception) -> Tangential Rotation
        r0: "10%", r: "40%",
        itemStyle: { borderRadius: 6, borderWidth: 4 },
        label: { rotate: "tangential", align: "center", position: "inside" }
      },
      { // Level 2 (Children, incl. Robustness label) -> Default Rotation (Horizontal/Radial)
        r0: "40%", r: "85%",
        itemStyle: { borderRadius: 6, borderWidth: 4 },
        label: { align: "center", position: "inside" }
      }
    ],
  },
};

// --- Apply Options and Set up Resize Listener ---
if (option && typeof option === "object") {
  myChart.setOption(option);
}
window.addEventListener("resize", myChart.resize);