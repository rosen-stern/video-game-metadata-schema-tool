function getScopeNote(json_obj){
   if (json_obj.scope_note !== "") {    //if there's a scope note...
        return json_obj.scope_note;

    } else if (json_obj.use.length) { //if there's no scope note, hopefully there's a "use" term....

        use_terms = getStringFullOfLinks(selected_node_json_obj.use)

        return "Not part of controlled vocabulary. Use " + use_terms + " instead."

    } else { //hopefully we never get here...
        return "Not defined."
    }
}

function getExamples(json_obj){
     if (selected_node_json_obj.example !== "") { //IF there are examples, show them
            
            return json_obj.example;
        } else {
            return false;
        }

}

function getTypeTerm(json_obj){
       if (selected_node_json_obj.type !== "") {//if there is a type, show it 
            return selected_node_json_obj.type;
        } else {
            return false
        }
}

function getUseForTerms(json_obj){

        if (selected_node_json_obj.use_for.length) {//if there are "use for", show them

            return  getStringFullOfLinks(json_obj.use_for);
        } else {
            return false;
        }

 

}

function getBroaderTerm(json_obj){
       if (selected_node_json_obj.broader_term !== "") {//if is a "browder term", show them
            return getStringFullOfLinks(selected_node_json_obj.broader_term);
        } else {
            return false;
        }
}

function getNarrowerTerm(json_obj){
        if (selected_node_json_obj.narrower_term.length) {//if there are "narrower terms", show them
            return getStringFullOfLinks(selected_node_json_obj.narrower_term);
        } else {
            return false;
        }
}

//returns a string full of <span>s that use the openLInkedItem function. Able to take in either an array or a string
function getStringFullOfLinks(array, structure) {

    to_return = "";

    if (array.constructor !== Array) { //check if it's not an array. IF TRUE, it must be a string. SO let's make it an array so we can still iterate over it in the next step :)
        save_string = array;
        array = [];
        array.push("" + save_string);
    }

    
    for (var y = 0; y < array.length; y++) {
        //Do a sweet little trick here to send back a list of arrays, but each page can set their own onListOfLinksClick function since visualizer.js and term_search.js need to do different things on click.
        //SO the function "onlistoflinksclick" can be found on both term_search.js and visualizer.js
        to_return += "<span class=\"linked-item\" onClick=\"onListOfLinksClick(this)\">" + array[y] + "</span>";
        if (y + 1 < array.length) {
            to_return += ", ";
        }
    }

    return to_return;

}

//returns the full JSON object from the original array, since the cytoscape object loses a lot of its context (see "createCytoscapeElements")
function getFullJsonObject(id) {

    for (var i = 0; i < array_in_view.length; i++) {
        if (array_in_view[i].term == id) {
            return array_in_view[i];
        }
    }

}