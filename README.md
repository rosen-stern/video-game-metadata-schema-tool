# video-game-metadata-schema-tool
A tool to help create entries for the Video Game Metadata Schema (VGMS).

Tool: http://rosen-stern.github.io/video-game-metadata-schema-tool

Original VGMS: https://github.com/uwgamergroup/video-game-metadata-schema

Designed in October 2026 for LIS 536: Metadata for Interactive Media. 


# WHEN UPDATING TERMS...

## Adding or removing a term
Edit the respective .js file. No other actions needed. IF a term isn't part of the controlled vocabular (either as a type / category name or as a reference to something in the controlled vocabulary), follow the precedent of other similar terms to know how to list the scope note and other entries so they appear correctly in the graph and search results. For example, the phrase "Not part of controlled vocabulary, use <entry>" shouldn't be written into the scope notes. The function getScopeNote in term_functions.js dynamically sets that string so it can link to the proper term in context.

## Content / text edits for individual scope notes, terms, etc
Edit the respective .js file. No other actions needed.

## Adding a new .js file
 Add to the array in term_functions.js and add to the import locations on certain pages like visualizer.html and term_search.html. For easy finding, just search for " IF NEW JS FILE ADDED " and follow the instructions. 


 # WHEN WRITING CODE...

If you need to iterate through an array of terms, you can use the array directly (e.g. "transaction_types[0].scope_note").

To iterate through all terms, or the title of all the groups of terms, use the all_terms array defined in term_functions.js, which includes the array's display name (human readable), id (best for use in HTML classes and IDs), and array (the actual array which you can also iterate through).