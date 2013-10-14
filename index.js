
/**
 * Expose 'Stack'
 */

module.exports = Stack;


/**
 * Initialize a new Stack
 *
 * @param {DomElement} parent the DOM element to stack
 * @param {DomElement} doc optional document's fragment parent
 * @api public
 */

function Stack(parent, doc) {
  this.parent = parent;
  this.fragment = document.createDocumentFragment();
  this.directory = [];
  this.current = null;
}


/**
 * Add dom in stack.
 *
 * @param {String} [name] dom name
 * @param {DomElement} [el] dom element
 * @api public
 */

Stack.prototype.add = function(name, dom) {
  this.directory.push(name);
  this.fragment.appendChild(dom);
};


/**
 * Set visible element from stack.
 *
 * @param {String} [name] dom name
 * @api public
 */

Stack.prototype.show = function( name ) {
  var index = this.directory.indexOf(name);
  if(index > -1) {
    var dom = this.fragment.childNodes[index];
    this.parent.appendChild(dom);
    this.directory.splice(index, 1);

    if(this.current) {
      this.add(this.current[0], this.current[1]);
    }

    this.current = [name, dom];
  }
};


/**
 * Set stack parent.
 *
 * @param {DomElement} [el] dom element
 * @api public
 */

Stack.prototype.parent = function( el ) {
  this.parent = el;
};