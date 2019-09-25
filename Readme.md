# Debugging JS

## Goals
- setting breakpoints to debug code at a specific line
- pausing/resuming the script execution
- productivity tips and tricks for the Dev Tool
- setting watch expressions
- navigating the call stack

## Fundamental Review of Javascript at its core
1. Javascript is a single threaded single concurrent language
2. Meaning it can handle one task at a time or a piece of code at a time.
3. It has a single call stack which along with other parts like the heap, and queue and all these parts together make up the CONCURRENCY Model (implemented inside of V8).

## Huh?  How can it be single threaded and concurrent at the same time?
JavaScript language is single-threaded and the asynchronous behaviour is not part of the JavaScript language itself, rather they are built on top of the core JavaScript language in the browser

### Call Stack:
It’s a data structure which records the function calls to tell us where we are in the execution. If we call a function to execute , we push a frame (a context for that function) on to the stack, and when we return from a function, we pop off the top of the stack. When it comes to functions calling other functions the last function called into the stack is the first function to pop off the stack.
Who orchestrates the calling, pushing, and popping? The event loop is what navigates and manages the call stack at any given time.  The loop itterations (or rotations) are called ticks.

### Heap
Heap is an unstructured area of memory.  This is where objects and variables are stored.

### Queue
 Its a List of messages to be processed, common messages would be events: "onClick", "onReadyStateChange",
 or built in browser API functions like setTimeout with callbacks.
 The Message Queue is also where user-initiated events like click or keyboard events, or built in browser functions like fetch responses are queued before your code has the opportunity to react to them.

 There are different Queues at play:

 #### Event table and queue
 The event table is where the association of event messages and callbacks are organized.  When an event occurs the table pushes the callback onto the event queue.  The event loop then grabs the callback from the queu once the call stack is empty and pushes them onto the back of the current call stack.

 #### Job Queue (v8/node)
 This is where callbacks for async functions such as promises and now async await are queued

 #### Event Loop
 The event loop is responsible for calling every function in the current call stack on its current itteration.  

*** The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there’s nothing in there, it goes to pick up things in the message queue.


### Breakpoints

#### Why
Stop the execution of the code so that you can interactively inspect the particular context that we’re interested in.
Once the code has stopped at a breakpoint, we can start the debugging process.
In order to debug the most helpful things to look at is getting access to the scope, Viewing and navigating the call stack, and even change the code at runtime (we are not doing this).

1. Open Chrome Dev Tools
2. Select the `Sources` Tab
3. Select the file you want to debug
4. Set your breakpoints

#### Types of breakpoints
We can set breakpoints at various places in our code:

1. At a specific line of execution
2. At various points in the line where values are referenced
3. We can set conditional breakpoints to monitor things dynamically or in loops

### Stepping through our code
We can step through our code instead of setting a breakpoint at each line.
There are different ways to step through your code.

#### 1: Step
5th button from the left.  Allows you to step through your code line by line, based on execution order.
Step has been recently introduced due to a change to Step Into next function call. When debugging asynchronous code, Step will move to the next line chronologically as opposed to Step into next function call.

We can set breakpoints within the statement due (notice the blue markers)

#### 2: Step OVER next function call
2nd button from the left: Allows you to step line-by-line, yet without stepping into function calls. Function calls will be stepped over or skipped and unless a breakpoint has been set within them, the debugger will not navigate inside the function.

#### 3: Step INTO next function call
3rd button from the left Same as stepper except in Chrome 68, new behaviour was added.  The difference is that when stepping into asynchronous code, it will stop in the async code and not on the code that, chronologically, will run.

#### 4: Step OUT OF next function call
4th button from the left.  Usually used in conjunction with step or step into next function call.  You would use this procedurally.  Say you step into a functin whether it be through step or step into next function call and you decide, "I know whatsup here, I don't need to go through this function line by line or debug it", its a shortcut to get out of the function and stop at the next line following the function CALL.

### Store as global variables and eager evaluations
We can right click on any return value in the scope and store it as a global variable.  Variable will be stored as temp<n>
With eager evaluation we can operate on those global variables instantly in the console.

### Watch expressions
You can enter an javascript expression, and as you step your code your expression will be evaluated live as the value changes

Truth be told, console log is still a very useful tool, and is part of the debugging process, but it should not be the only thing you use