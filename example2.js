
function foo() {
    setImmediate(bar);
}

function bar() {
    setImmediate(foobar);
}

function foobar() {
    throw new Error("Oops!");
}

foo();