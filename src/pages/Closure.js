import React from 'react'

function Clojure() {
  return (
    <div className = 'clojure'>
        <h1>Clojure</h1>
        <br></br>
        <h3>Origin</h3>
        <p>Initally designed in 2005</p>
        <br></br>
        <h3>Purpose</h3>
        <p>Was created as technical support for the telephone communication</p>
        <br></br>
        <h3>Model & Style</h3>
        <p>Functional
A programming paradigm that only writes programs in pure mathematical functions style.
This is designed to favor symbolic computation and list processing.

Scripting
A programming language that optimizes for the automation of task execution, rather than
manually by a human operator.

Dynamic
In essence, it’s a ‘recursion with memorization’ style of programming. This allows for 
more efficient code execution and efficiency.

Compiled
The language is processed using a compiler, not interpreter. The source file is translated 
into machine code before execution.</p>
        <br></br>
        <h3>Variables</h3>
        <p>Immutable
Name composed of letters, digits and the underscore character, unless they start with either a letter or an underscore
Variables can either be statically or dynamically bind
Runs within JVM, implement Garbage Collection, so there is no need for deallocation of unused variables.</p>
    </div>
  )
}

export default Clojure;