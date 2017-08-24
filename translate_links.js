var tag, tag_text, match_text;
var matched = false;
var name, name_jp;
var no_idx, tag_title;
var atags = document.getElementsByTagName("a");
for (var i = 0; i < atags.length; i++) {
    tag = atags[i];
    matched = false;
    tag_text = tag.innerText;
    for (var j=0; j<stree_replace_list.length; j++) {
        name = stree_replace_list[j]["name"];
        name_jp = stree_replace_list[j]["name_jp"];
        // replace on exact match only
        if (tag_text == name_jp) {
            tag.innerText = name + " (" + name_jp + ")";
            matched = true;
            break;
        }
    }
    if (matched) {
        continue;
    }

    // match kitchen skill names, replace with english and make title jp
    for (var j=0; j<kitchen_replace_list.length; j++) {
        name = kitchen_replace_list[j]["name"];
        name_jp = kitchen_replace_list[j]["name_jp"];
        // replace on exact match only
        if (tag_text == name_jp) {
            tag.innerText = name;
            tag.setAttribute("title", name_jp);
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
