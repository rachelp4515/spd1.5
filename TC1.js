var MinStack = function() {
    this.stack=[]
    };
    
    MinStack.prototype.push = function(x) {
    this.stack.push(x)
    };
    
    MinStack.prototype.pop = function() {
    this.stack.pop()
    };
    
    MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
    };
    
    MinStack.prototype.getMin = function() {
    let min = Math.min(...this.stack)
    return min
    };