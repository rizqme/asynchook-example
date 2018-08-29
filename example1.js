
function foo() {
    bar();
}

function bar() {
    foobar();
}

function foobar() {
    throw new Error("Oops!");
}

foo();