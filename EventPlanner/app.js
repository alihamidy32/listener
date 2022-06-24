

const listener = {
    name:'',
    giveName:function takeName() {
        listener.name = prompt('what is your name?' )
     
    },
    event:function greet(action) {
        if(action === 'hello there'){
            listener.giveName()
            console.log(`hi ${listener.name}`);
           
        }
    }
}
listener.event('hello there')