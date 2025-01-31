# Node.js Port 8080 Already in Use

This repository demonstrates a common error in Node.js: attempting to start a server on a port that is already in use (port 8080 in this case). The `bug.js` file contains the erroneous code, and `bugSolution.js` provides a solution.

## Problem

The provided Node.js code creates a simple HTTP server that attempts to listen on port 8080. If another application or process is already using this port, the server will fail to start. This will typically result in an error message indicating that the port is busy.

## Solution

The solution involves checking if the port is available before attempting to bind to it.  If the port is in use, the server will gracefully handle the error by providing appropriate information.  Alternatively, you could change the port number.