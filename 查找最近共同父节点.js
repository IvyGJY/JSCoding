// 查找两个节点的最近的一个共同父节点，可以包括节点自身
// oNode1 和 oNode2 在同一文档中，且不会为相同的节点

// 通过率25%
function commonParentNode(oNode1, oNode2) {
   
    while ((oNode1.parentNode!=null) && (oNode2.parentNode!=null)){
        if(oNode1.parentNode==oNode2.parentNode){
            return oNode1.parentNode
        }
    }
}

// 通过率100%
function commonParentNode(oNode1, oNode2) {
    for(;oNode1;oNode1=oNode1.parentNode){
        if(oNode1.contains(oNode2)){
            return oNode1;
        }
    }
}