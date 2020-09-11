/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
const killProcess = function(pid, ppid, kill) {
  const adjList = constructGraph(ppid, pid);
   const resultArr = [];
   const queue = [kill];

   while (queue.length) {
     let child = queue.shift();
     resultArr.push(child);
     if (adjList.has(child)) {
       let children = adjList.get(child);
       for (const node of children) {
         queue.push(node);
       }
     }
   }
   return resultArr;
 }

 const constructGraph = (ppid, pid) => {
   const graph = new Map();

   for (let i = 0; i < ppid.length; i++) {
     let parent = ppid[i];
     let child = pid[i];
     if (graph.has(parent)) {
       let childrenArray = graph.get(parent);
       childrenArray.push(child)
       graph.set(parent, childrenArray);
     } else {
       graph.set(parent, [child]);
     }
   }

   return graph;
 }
