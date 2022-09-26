let shape ={
   type:this.name,
    getType:function(){
        return this.type
    },
    
}

function Triangle (a,b,c){
    this.a =a;
    this.b=b;
    this.c=c;
}
Triangle.prototype=shape

Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c
}

console.log(new Triangle(1,2,4).getPerimeter())