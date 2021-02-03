# classPractice
Please see different versions in branches above.

#### version-0
The loop was missing a curly brace. This version just fixes that syntax error.

#### version-1
Here we use a loop and pass event data as in the solution shown by Mrs. Adams.

#### version-2
We use a wrapper element, allowing the click event to bubble up, and slice the question number from `event.target`.

#### version-3
We have a listener on the questions, and use an action on the `.next` sibling, which is the associated answer.