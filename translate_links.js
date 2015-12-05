var replace_list = [];
for (var i = 0; i < stree_list.length; i++) {
    var stree = stree_list[i];
    var name = stree["name"];
    var name_jp = stree["name_jp"];
    var name_both = name + " (" + name_jp + ")";
    replace_list.push([name_jp, name_both]);
}
// sort longest first
replace_list.sort(function compareElement0Length(a, b) {
    return b[0].length - a[0].length;
});

var tag, tag_text, match_text;
var matched = false;
var no_idx, tag_title;
var atags = document.getElementsByTagName("a");
for (var i = 0; i < atags.length; i++) {
    tag = atags[i];
    matched = false;
    tag_text = tag.innerText;
    for (var j=0; j<replace_list.length; j++) {
        // replace on exact match only
        if (tag_text == replace_list[j][0]) {
            tag.innerText = replace_list[j][1];
            matched = true;
            break;
        }
    }
    if (matched) {
        continue;
    }

    // if the no kanji is in the link, try matching a monster title or monster
    // name to the prefix before the no, and if found add a title attribute
    // with the monster name.
    no_idx = tag_text.indexOf("\u306e");
    if (no_idx == -1) {
        // if doesn't contain no kanji, could be full monster name, add tooltip
        // for that as well
        tag_title = tag_text;
    } else {
        tag_title = tag_text.substr(0, no_idx);
    }
    for (var j=0; j<monster_replace_list.length; j++) {
        match_text = monster_replace_list[j][0];
        if (tag_title == monster_replace_list[j][0]) {
            console.log("matched monster, setting title attr " + tag_title);
            tag.setAttribute("title", monster_replace_list[j][1]);
            matched = true;
            break;
        }
    }
}
