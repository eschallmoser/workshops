// YOUR CODE BELOW

const getLongestName = (familyTree) => {
  //store the longest name
  let longestName = "";

  //grab all the names in the current level of
  //the family tree
  familyNames = Object.keys(familyTree);

  //iterate over the names
  familyNames.forEach((name) => {
    // if a name is longer than the current
    //max, set it as the max
    if (name.length >= longestName.length) {
      longestName = name;
    }
    //if the name leads to a sub-tree, then...
    if (familyTree[name]) {
      //recruse on the sub-tree, store the
      //longest name in the sub tree
      const longestSubName = getLongestName(familyTree[name]);
      //if stored sub tree had a longer name than the current
      //level of the tree, store it as the max
      if (longestSubName.length > longestName.length) {
        longestName = longestSubName;
      }
    }
  }); //return the longest name
  return longestName;
};
