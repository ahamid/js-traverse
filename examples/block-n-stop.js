traverse = require('traverse');

var treedata = [{
  a: {
    block: true,
    ab: {
      name: "ab leaf"
    }
  },
  b: {
    stop: true,
    bc: {
      name: "bc leaf",
    } 
  },
  c: {
    cd: {
      name: "cd leaf"
    }
  }
}]

result = traverse(treedata).map(function (item) {
  item.visited = true;
  if (item.block) {
    this.block();
  } else if (item.stop) {
    this.stop(); 
  }
});

console.log(JSON.stringify(result, null, 2));
