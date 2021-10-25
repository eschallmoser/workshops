// YOUR CODE BELOW

// write it out! what do i need to do?
// the function needs to:
// 1) check the source for the searchValue
// 2) return the index (number) of the first instance of the searchValue found in the source
// 3) if searchValue is not found in source, return value of -1
// 4) if startIdx is provided as argument, the search for the searchValue in the source should
// begin at the startIdx and ignore any instances of the searchValue in the source that occurs before it
// 5) if no startIdx is provided, search for searchValue should begin at the actual beginning of the source

// 1 and 2: for loop
// 3: if statement inside above for loop
// 4 and 5: maybe this can be taken of with for loop

// need variables for:
// the return index, which needs to be a number--THIS IS DONE

// google search for:
// how to return the index of a specific character

const myIndexOf = (source, searchValue, startIdx = 0) => {
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    const substring = source.slice(i, i + searchValue.length);
    if (substring === searchValue) return i;
  }
  return -1;
};
