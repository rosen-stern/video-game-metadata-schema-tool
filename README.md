# video-game-metadata-schema-tool
A tool to help create entries for the Video Game Metadata Schema (VGMS).

Tool: http://rosen-stern.github.io/video-game-metadata-schema-tool

Original VGMS: https://github.com/uwgamergroup/video-game-metadata-schema

Designed in October 2026 for LIS 536: Metadata for Interactive Media. 


# WHEN UPDATING TERMS...

## Adding or removing a term
Edit the respective .js file. No other actions needed. IF a term isn't part of the controlled vocabular (either as a type / category name or as a reference to something in the controlled vocabulary), follow the precedent of other similar terms to know how to list the scope note and other entries so they appear correctly in the graph and search results. For example, the phrase "Not part of controlled vocabulary, use <entry>" is actually not written in the scope notes and is instead added dynamically in visualizer.html. 

## Content / text edits for individual scope notes, terms, etc
Edit the respective .js file. No other actions needed.

## Adding a new .js file
 Comments are left with: " IF NEW JS FILE ADDED " to denote where to make changes to the HTML and script files when a new .js file is added. Each comment has a second half that explains what to do (normally adding on to a list of some kind).