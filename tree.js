'use strict';

//1. DOM structure
//2. FBs React
//3. CSS structure

//addition
//removal
//search

//type of tree = enumerating, pruning, grafting,  etc.


class Tree {
    constructor(){
      this._root = null;
    }
   
    _traverse(callback){
        function walk(node){
           callback(node);
           node.children.forEach(walk);
        }
        walk(this._root);
    }

    add(value, parentValue){
        var newNode = {
            value,
            children:[]
        };

        if(null == this._root){
            this._root = newNode;
            return;
        }


        this._traverse((node) =>{
            if(parentValue === node.value) {
                node.children.push(newNode);
            }
        });
    }

    remove(value){
        this._traverse((node) => {
            node.children.some((childNode, index) => {
                 if(value === childNode.value){
                     return !!node.children.splice(index, 1);
                 }
            });
        });
    }

    search(value){
        let exists = false;

        this._traverse((node) => {
              if(value === node.value){
                  exists = true;
              }       
        });

        return exists;
    }



}

module.exports = {
    Tree: Tree
}