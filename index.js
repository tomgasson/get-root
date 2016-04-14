"use strict";
module.exports = function(){
  var root = document.getElementById('root');
  if (!root){
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
  }
  return root
}
