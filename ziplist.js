/*
 * Created by richardkahakui on 2/5/17.
 */
/*
*
* E27: 5 problems (part 2)
*/

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2){
    const resultList = [];
    for (let i = 0; i < list1.length; i++) {
        resultList.push(list1[i], list2[i]);
    }
    return resultList;
}

//underscore version
function zipListTheSimpleWay(list1,list2){
  return _.flatten(_.zip(list1, list2));
}
console.log(zipList(testList1, testList2));

console.log(zipListTheSimpleWay(testList1, testList2));

/*
 function zipList(list1,list2){
 var i = 0;
 var j = 0;
 var listr = [];
 for(; i < list1.length; i++){
 listr[listr.length] = list1[i];
 listr[listr.length] = list2[j];
 j++;
 }

 return listr
 }
 console.log(zipList([1,2,3,4],['a','b','c','d']));

 function zipListTheSimpleWay(list1, list2){
 var x = _.zip(list1,list2);
 return _.flatten(x);
 }
 console.log(zipListTheSimpleWay([1,2,3,4],['a','b','c','d'
 ]));
 */