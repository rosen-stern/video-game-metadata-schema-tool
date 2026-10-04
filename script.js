var details_empty_state_div = document.getElementById("details-empty-state");

var details_content_div = document.getElementById("details-content");
var term_id_h2 = document.getElementById("term-id");
var scope_note_p = document.getElementById("scope-note");
var further_description_wrapper_div = document.getElementById("further-description-wrapper");
var examples_span = document.getElementById("examples");
var type_term_span = document.getElementById("type-term");
var relationship_links_wrapper_div = document.getElementById("relationship-links-wrapper");
var use_for_div = document.getElementById("use-for");
var broader_term_div =  document.getElementById("broader-term");
var narrower_term_div =  document.getElementById("narrower-term");
var related_div =  document.getElementById("related");


var cy = cytoscape({
  container: document.getElementById('cy'),
   style: [{
      selector: 'node',
      css: {
        'label': 'data(id)',
        'text-valign': 'bottom',
        'text-halign': 'center',
        'text-wrap': 'wrap',
        'text-max-width': '200px',
        'height': '60px',
        'width': '60px',
        'border-color': 'black',
        'border-opacity': '1',
        "text-background-opacity": 1,
        "text-background-color": "white"
      }
    },
    {
      selector: ':selected',
      css: {
    //     'label':function (element) { 
    //     return `${element.data("id")} \n ${element.data("scope_note")}`
    // },
        'background-color': 'blue',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'z-index': '1',
        
      }
    },
    {
            selector: 'node.highlight',
            style: {
                'border-color': '#FFF',
                'border-width': '2px'
            }
        },
        {
            selector: 'node.semitransp',
            style:{ 'opacity': '0.5' }
        },
        {
            selector: 'edge.highlight',
            style: { 'mid-target-arrow-color': '#FFF' }
        },
        {
            selector: 'edge.semitransp',
            style:{ 'opacity': '0.2' }
        }
  ],
   elements: createCytoscapeElements(gameplay_genres)
});

setCytoscapeLayout();

highlightNodesOnSelect();

document.addEventListener("DOMContentLoaded", (event) => {
  cy.fit();
});


function setCytoscapeLayout(){
var layout = cy.layout(
   {
  name: 'concentric',

  fit: true, // whether to fit the viewport to the graph
  padding: 30, // the padding on fit
  startAngle: 3 / 2 * Math.PI, // where nodes start in radians
  sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: false, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10, // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
  height: undefined, // height of layout area (overrides container height)
  width: undefined, // width of layout area (overrides container width)
  spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  concentric: function( node ){ // returns numeric value for each node, placing higher nodes in levels towards the centre
  return node.degree();
  },
  levelWidth: function( nodes ){ // the variation of concentric values in each level
  return nodes.maxDegree() / 4;
  },
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: undefined, // callback on layoutready
  stop: undefined, // callback on layoutstop
  transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
}
);

layout.run();

}

function highlightNodesOnSelect(){
//https://stackoverflow.com/questions/31510992/how-to-highlight-neighbouring-nodes-in-cytoscape-js
var previous_node;
var previous_sel;
cy.on("click","node",(e)=>
{
    var sel = e.target;
    var id = e.target.id();

    updateDetails(sel);

    if ((id != previous_node) && (previous_node != undefined ) && (previous_sel != undefined))
        
    {

        cy.elements().removeClass("semitransp");
        previous_sel.removeClass("highlight").outgoers().union(previous_sel.incomers()).removeClass("highlight");

        cy.elements().difference(sel.outgoers().union(sel.incomers())).not(sel).addClass("semitransp");
        sel.addClass("highlight").outgoers().union(sel.incomers()).addClass("highlight");

        previous_sel = sel;
        previous_node = id;

    }

    else
    
    {
        
        cy.elements().difference(sel.outgoers().union(sel.incomers())).not(sel).addClass("semitransp");
        sel.addClass("highlight").outgoers().union(sel.incomers()).addClass("highlight");
        previous_sel = sel;
        previous_node = id;

    }
    

})

}

function createCytoscapeElements(old_array){

    var newCytoscapeElementArray = [];

    for(i = 0; i < old_array.length; i++){
// console.log(old_array[i].term)

    //Add a node for each term
            //scopenote fallback string incase there's no definition or "use" term.
            var scope_note_check = "Not defined."

            //Check if term has a usable scopenote
            if(old_array[i].scope_note !== "") {
                scope_note_check = old_array[i].scope_note;

                //MOVED THIS CHECK TO THE FUNCTION: UPDATE DETAILS.
            // //Check if term has a "use" array
            // } else if(old_array[i].use.length){
            //     var use_terms = "";

            //     for(var y = 0; y < old_array[i].use.length; y++){
            //         use_terms += "'" + old_array[i].use[y] + "'";
            //         if(y+1 < old_array[i].use.length){
            //             use_terms += ", ";
            //         }
            //     }

            //     scope_note_check = "Use " + use_terms + ".";
            }

            newCytoscapeElementArray.push({
                data: {
                    id: old_array[i].term,
                    scope_note: scope_note_check,
                    
                }
            })


            //Add connections to any "related terms"
    if (old_array[i].related_terms.length){
        for(var x = 0; x < old_array[i].related_terms.length; x++){
            // console.log("ADDING RELATED TERM CONNECTION: " + old_array[i].term + "-" + old_array[i].related_terms[x])
            newCytoscapeElementArray.push({
                data: {
                    id: old_array[i].term + "-" + old_array[i].related_terms[x],
                    source: old_array[i].term,
                    target: old_array[i].related_terms[x]
                } 
            })
        }
    }

//Add connections to any "Use" []
    if (old_array[i].use.length){
        for(var x = 0; x < old_array[i].use.length; x++){
            newCytoscapeElementArray.push({
                data: {
                    id: old_array[i].term + "-" + old_array[i].use[x],
                    source: old_array[i].term,
                    target: old_array[i].use[x]
                } 
            })
        }
    }


//Add connections to any "Use for" []

    if (old_array[i].use_for.length){
        for(var x = 0; x < old_array[i].use_for.length; x++){
            newCytoscapeElementArray.push({
                data: {
                    id: old_array[i].term + "-" + old_array[i].use_for[x],
                    source: old_array[i].term,
                    target: old_array[i].use_for[x]
                } 
            })
        }
    }

//Add connections to any "Broader term" ""
    if (old_array[i].broader_term !== ""){
        // console.log("ADDING TYPE CONNECTION: " + old_array[i].term + "-" + old_array[i].type);
        newCytoscapeElementArray.push({
            data: {
                id: old_array[i].term + "-" + old_array[i].broader_term,
                source: old_array[i].term,
                target: old_array[i].broader_term
            } 
        })
    }


    //if narrower terms exist, add connections
    if (old_array[i].narrower_term.length){
        // console.log("ADDING NARROWER TERM CONNECTION: " + old_array[i].term + "-" + old_array[i].narrower_term[x]);
        for(var x = 0; x < old_array[i].narrower_term.length; x++){
            newCytoscapeElementArray.push({
                data: {
                    id: old_array[i].term + "-" + old_array[i].narrower_term[x],
                    source: old_array[i].term,
                    target: old_array[i].narrower_term[x],
                } 
            })
        }
    }


    //Add connections to any "type"
    if (old_array[i].type !== ""){
        // console.log("ADDING TYPE CONNECTION: " + old_array[i].term + "-" + old_array[i].type);
        newCytoscapeElementArray.push({
            data: {
                id: old_array[i].term + "-" + old_array[i].type,
                source: old_array[i].term,
                target: old_array[i].type
            } 
        })
    }
}

return newCytoscapeElementArray;

}

function noConnectionYet(a, b, json_array){
//check if A comes before B, if yes then return TRUE  because t here is no connection yet

for(var i = 0; i < json_array.length; i++){

    if(json_array[i].term == a){
        return true;
    } else if (json_array[i].term == b) {
        return false;
    }

}


}

function updateDetails(selected_node_id){   
    selected_scope_note = selected_node_id._private.data.scope_note;

    //TODO:
    //THE USE ARRAY IS NOT PASSED THROUGH THE NODE GRAPH. SO THERE'S NO WAY TO ACCESS IT LIKE THIS.
    //YOU'LL HAVE TO EITHER: FIGURE OUT ANOTHER WAY TO GET THE CONTEXT IN THE DETAILS PANE...
    //...OR MAKE A FUNCTION THAT CAN RETURN THE FULL JSON OBJECT FROM THE ORIGINAL ARRAY, SO IT CAN GRAB THE CLEAN IDs OF EACH OF THE RELATED TERMS.
    //THAT MIGHT BE BEST, CONSIDERING THAT A SIMILAR PROCESSES IS NEEDED FOR USE-FOR, NARROWER-TERM, AND RELATED.
    selected_use_array = selected_node_id._private.data.use;

    details_empty_state_div.style.display = "none";

    term_id_h2.innerHTML = selected_node_id.id();


    if(selected_scope_note !==""){    //if there's a scope note...
        scope_note_p.innerHTML = selected_scope_note;

    } else if(selected_use_array.length){ //if there's no scope note, hopefully there's a "use" term....
    
                var use_terms = "";

                for(var y = 0; y < selected_use_array.length; y++){
                    use_terms += "'" + selected_use_array[y] + "'";
                    if(y+1 < selected_use_array.length){
                        use_terms += ", ";
                    }
                }



        scope_note_p.innerHTML = "Not part of controlled vocabulary. Use: " + use_terms + " instead."

    } else { //hopefully we never get here...
        scope_note_p.innerHTML = "Not defined."
    }

    //TODO: ON click of linked item, highlight that item in the graph.

}

//TODO: Add functionality to view other json graphs
//TODO: Add protagonist flow
//TODO: add a non-visualized view