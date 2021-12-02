# This is another Todo List Application written in Javascript using React

## Design of an application

**This is another uninteresting Todo list project. In this project, I used class-based components for states.**

### Components

There are 8 components in the project:

#### App component

This is the root component where most of the logic is, as well as all the other components.

#### Header component

It contains the title of the application, where the logo and general information about the tasks are located.

#### Panels component

Combining 2 other components, Component "SearchPanel" for finding tasks, and "ItemStatusFilter" component for filtering components for all tasks, active and completed

#### TodoList component

We pass the array of tasks from the **App** component to it, and in it we map the tasks using the component below.

#### TodoListItem component

Used in the **TodoList** component for rendering tasks on the page, it also has buttons for completing a task, deleting and changing the importance of a task.

#### NewTask component

In it, as we understood from the name, new tasks are created, contains an input for entering the name of the component, and a button for adding a task to the list of tasks.

***FUNCTIONAL COMPONENTS BETTER IN 2021!***

### Styles

The project used Css modules, using SCSS.

I wrote the styles from scratch, **without using libraries**, I did not see the need for them in this project. Everything turned out to be adaptive. I attach the screenshots below. The design was done by myself (almost, lol). I made a layout of the application in **Figma**, I am attaching a link to the figma file below.

[Link to figma file](https://www.figma.com/file/D64yblCazHa8wKSvFyHfjt/TODO-LIST)

### Screenshots

![Desktop](https://github.com/luckymvm/react-todo-app/raw/main/screenshots/desktop.PNG)

![Mobile adaptive](https://github.com/luckymvm/react-todo-app/raw/main/screenshots/mobile.jpg)