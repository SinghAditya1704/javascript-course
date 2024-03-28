let add = function(){
    console.log("add");
    const five = 3 + 2;
};
function performTask(task) {
    task();
    console.log("Task performed!");
}
performTask(add);

function foo() {
    return function() {
        console.log('what gets printed');

    };
}

foo
foo();
foo()();