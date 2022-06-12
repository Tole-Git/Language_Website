import React from 'react'

function Erlang() {
  return (
    <div className = 'erlang'>
        <h3>Erlang</h3>
        <br></br>
        <h3>Origin</h3>
        <p>First version in 1986, created as a prioprietary language within Ericsson.
Later released as an open source language in year 1998</p>
        <br></br>
        <h3>Purpose</h3>
        <p>"Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution and fault tolerance." - "www.erlang.org"

"OTP is set of Erlang libraries and design principles providing middle-ware to develop these systems. It includes its own distributed database, applications to interface towards other languages, debugging and release handling tools." - "www.erlang.org"</p>
        <br></br>
        <h3>Model & Style</h3>
        <p>Erlang is imperative, consisting of loops, statements, selections, and functions built with statements. Erlang allows types and methods, an object-oriented programming style (interfaces instead of class hierarchy), and functions connected together to make a program which can be described as Procedural.  Go provides dynamic typing capability, garbage collection, and a rich standard library. </p>
        <br></br>
        <h3>Variables</h3>
        <p>Variables in Erlang are immutable and both explicit and implicit. Variables in functions are allocated into stacks unless the compiler cannot prove the variable isnt referenced elsewhere. Since go contains automatic garbage collected, So there is no need to remove variables from memory by the user. Variables are stack, which means they are called within its block, and contain global and local variables.</p>
    </div>
  )
}

export default Erlang;