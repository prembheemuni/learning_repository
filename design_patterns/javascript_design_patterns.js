// call , apply, bind

function say(name){
    console.log(this.name,name)
}

say.call({name : "prem"},"kumar")

say.apply({name : "prem"},["kumar"])

const sayFunc = say.bind({name:"prem"})
sayFunc("kumar")



// Factory 
// Factory is an object that creates object
function Developer(name) {
    this.name = name
    this.type = "Developer"
}

function Tester(name) {
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory(){
    this.create = (name,type) => {
        switch(type){
            case 1:
                return new Developer(name)
            case 2 :
                return new Tester(name)
        }
    }
    
} 

const employeeFactory = new EmployeeFactory()
const dev1 = employeeFactory.create("Prem",1)
const test1 = employeeFactory.create("Kumar",2)
console.log(dev1, test1)


// Singleton
// Using single ton we can only create one instance of the class, if we try to create another it only gives the created instance object.
const singleton = (function(){
    function ProcessManager(){
        this.numOfProcess = 0
        this.increaseProcessByN = (n) => {
            this.numOfProcess = this.numOfProcess + n
        }
    }
    
    let pManager;
    function createProcessManager(){
        pManager = new ProcessManager()
        return pManager
    }
    
    return {
        getProcessManager : ()=>{
            if(!pManager) {
                pManager = createProcessManager()
            }
            return pManager
        }
    }
})()

const pr = singleton.getProcessManager();
pr.increaseProcessByN(5)
console.log(pr)
const pr2 = singleton.getProcessManager();
console.log(pr2)
