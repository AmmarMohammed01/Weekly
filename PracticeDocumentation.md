To use VSCode to view .md file in Markdown format, type Command + Shift + v

# Functions:

There are 7 functions

- saveData()
- renderTasks()
- addTask()
- deleteTask()
- completeTask()
- saveAndRender()
- editTitle()

# Functions descriptions:

## saveAndRender()

- Simply calls saveData(), then renderTasks()

### caled at

- clear day button
- clear all button
- renderTask() when editing a task: enter key in input box, and save edit button
- addTask: enter key and click
- completeTask

## saveData()

- Uses localStorage to set an item named 'taskList' and save the taskList object in web storage

## renderTasks()

- Contains the edit task feature
- first empty all task boxes
- then repopulate each task with correct "check/complete" button color
- Add an event listener to each check button to call completeTask()
- Add an event listener to each edit button
- Add an event listener to each delete button

## completeTask()

- Searches entire taskList using forEach
- if the current taskId is equal to the taskId of the one that called the function

1. If task is complete, mark incomplete
2. If task is incomplete, mark complete

- Finally saveAndRender

## editTitle()

- Simply used to edit the week title
- Adds an event listener to edit button
- When edit button clicked: creates a input to enter title, also creates two buttons - a save and cancel
- Three more event listeners are made: one for each new html element
- input: changes title in local storage and displays on screen, otherwise displays empty title upon enter of emtpy string
- save: saves new title and renders
- cancel: keeps old title and renders

## deleteTask()

- Searches taskList using forEach
- if the current taskId matches that to be deleted, remove task using array splicing and save data
- finally use remove task from DOM using docSelector

## addTask()

- Adds a task
