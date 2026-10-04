var cytoscape_engagement_mechanisms = [];





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
        "text-background-color": "lightgray"
      }
    },
    {
      selector: ':selected',
      css: {
        'label':function (element) { 
        return `${element.data("id")} \n ${element.data("scope_note")}`
    },
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      }
    }
  ],
   elements: createCytoscapeElements(gameplay_genres)
});

function createCytoscapeElements(oldArray){

    var newCytoscapeElementArray = [];

    for(i = 0; i < oldArray.length; i++){
// console.log(oldArray[i].term)

    //Add a node for each term
        if(oldArray[i].scope_note !== ""){

            newCytoscapeElementArray.push({
                data: {
                    id: oldArray[i].term,
                    scope_note: oldArray[i].scope_note,
                    
                }
            })

        } else {

            newCytoscapeElementArray.push({
                data: {
                    id: oldArray[i].term,
                }
            })

        }


            //Add connections to any "related terms"
    if (oldArray[i].related_terms.length){
        for(var x = 0; x < oldArray[i].related_terms.length; x++){
            // console.log("ADDING RELATED TERM CONNECTION: " + oldArray[i].term + "-" + oldArray[i].related_terms[x])
            newCytoscapeElementArray.push({
                data: {
                    id: oldArray[i].term + "-" + oldArray[i].related_terms[x],
                    source: oldArray[i].term,
                    target: oldArray[i].related_terms[x]
                } 
            })
        }
    }

//Add connections to any "Use" []
    if (oldArray[i].use.length){
        for(var x = 0; x < oldArray[i].use.length; x++){
            newCytoscapeElementArray.push({
                data: {
                    id: oldArray[i].term + "-" + oldArray[i].use[x],
                    source: oldArray[i].term,
                    target: oldArray[i].use[x]
                } 
            })
        }
    }


//Add connections to any "Use for" []

    if (oldArray[i].use_for.length){
        for(var x = 0; x < oldArray[i].use_for.length; x++){
            newCytoscapeElementArray.push({
                data: {
                    id: oldArray[i].term + "-" + oldArray[i].use_for[x],
                    source: oldArray[i].term,
                    target: oldArray[i].use_for[x]
                } 
            })
        }
    }

//Add connections to any "Broader term" ""


    //if narrower terms exist, add connections
    if (oldArray[i].narrower_term.length){
        // console.log("ADDING NARROWER TERM CONNECTION: " + oldArray[i].term + "-" + oldArray[i].narrower_term[x]);
        for(var x = 0; x < oldArray[i].narrower_term.length; x++){
            newCytoscapeElementArray.push({
                data: {
                    id: oldArray[i].term + "-" + oldArray[i].narrower_term[x],
                    source: oldArray[i].term,
                    target: oldArray[i].narrower_term[x],
                } 
            })
        }
    }


    //Add connections to any "type"
    if (oldArray[i].type !== ""){
        // console.log("ADDING TYPE CONNECTION: " + oldArray[i].term + "-" + oldArray[i].type);
        newCytoscapeElementArray.push({
            data: {
                id: oldArray[i].term + "-" + oldArray[i].type,
                source: oldArray[i].term,
                target: oldArray[i].type
            } 
        })
    }
}

return newCytoscapeElementArray;

}

function noConnectionYet(a, b, jsonArray){
//check if A comes before B, if yes then return TRUE  because t here is no connection yet

for(var i = 0; i < jsonArray.length; i++){

    if(jsonArray[i].term == a){
        return true;
    } else if (jsonArray[i].term == b) {
        return false;
    }

}


}