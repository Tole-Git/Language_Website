import React from 'react'

function Golang() {
  return (
    <div className = 'golang'>
        <h3>Golang</h3>
        <br></br>
        <h3>Origin</h3>
        <p>Go was developed in 2007 and released in 2009 initially as an open-source programming language based on C++, Python, & Java.</p>
        <br></br>
        <h3>Purpose</h3>
        <p>Go was made to solve general slowness, complex type systems, slow compilation time, and inefficient multi-threading.Go today is used for highly scalable, concurrent, and parallel applications, Cloud-based or server side applications, AI, and data science. </p>
        <br></br>
        <h3>Model & Style</h3>
        <p>Go is imperative, consisting of loops, statements, selections, and functions built with statements. Go allows types and methods, an object-oriented programming style (interfaces instead of class hierarchy), and functions connected together to make a program which can be described as Procedural.  Go provides dynamic typing capability, garbage collection, and a rich standard library. </p>
        <br></br>
        <h3>Variables</h3>
        <p>Variables in Go are immutable and both explicit and implicit. Variables in functions are allocated into stacks unless the compiler cannot prove the variable isnt referenced elsewhere. Since go contains automatic garbage collected, So there is no need to remove variables from memory by the user. Variables are stack, which means they are called within its block, and contain global and local variables.</p>
    </div>
  )
}

export default Golang;