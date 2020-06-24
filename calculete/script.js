let vue = new Vue({
    el: '#app',
    data: {
        result:'',
        number: [0,1,2,3,4,5,6,7,8,9],
        operation:['%','*','-','+'],
    },
    methods:{
        input: function(up){
            this.result=this.result.toString();
            this.result += up;


        },
        reset: function(){
            this.result ="";

        },
        calc: function(){
            this.result = eval(this.result);

        },
        
    },
    
})


let calk = (a)=>{
    
result = eval(a)

return result

}
module.exports = calk; 