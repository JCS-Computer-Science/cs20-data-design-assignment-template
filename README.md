# Assignment: Modeling Real-World Data in JavaScript

## Overview

In real software projects, a large amount of complexity comes not from advanced algorithms, but from how data is structured and manipulated.

In this assignment, you will:

- Choose a real-world topic
- Design a data schema using JavaScript objects and arrays
- Write functions to create, read, update, and compute derived data
- Demonstrate your work using a scripted walkthrough in `index.js`
- Show how your code behaves when given invalid input

There is no UI and no database. This assignment focuses on thinking like a developer who designs systems.

---

## Learning Objectives

- Model complex data using arrays and objects
- Represent relationships between pieces of data
- Write functions that safely manipulate shared data
- Distinguish between mutating data and derived (read-only) data
- Handle invalid input intentionally and defensively
- Clearly demonstrate how your code is meant to be used

---

## Part 1: Choose a Topic

Your topic must:

- Include at least two different kinds of entities
- Include repeating data (arrays)
- Include relationships between entities

Examples of acceptable topics:

- Music app (artists, albums, songs, playlists)
- Sports league (teams, players, games)
- RPG game data (characters, items, quests)
- Recipe app (recipes, ingredients, steps)
- Course system (students, courses, enrollments)
- Movie or TV streaming platform

**Not allowed:**

- A single object with lots of strings
- Flat data with no relationships
- Topics that do not meaningfully model real-world data

If your topic can be explained with one array and no relationships, it is too simple.

---

## Part 2: Design Your Data Schema (`data.js`)

Your schema must include:

- One top-level object
- At least two arrays of objects
- Nested objects or arrays
- IDs or keys that relate entities to each other

Example (for illustration only):

    export const data = {
      users: [
        { id: 1, name: "Alex", playlistIds: [101] }
      ],
      playlists: [
        { id: 101, name: "Workout", songIds: [201] }
      ],
      songs: [
        { id: 201, title: "Stronger", duration: 312 }
      ]
    };

Your schema does not need to match this example exactly.

`data.js` should contain a starting state of your data scheme. Include enough items to clearly demonstrate the "shape" of the data and to provide something for your functions (specified below) to actually work with.

---

## Part 3: Write Your Functions (`functions.js`)

You must write at least **eight** functions total, covering all categories below.

### 1\. Creation Functions

Functions that add new data to your system.

    createPlayer(name)
    createRecipe(title)
    addSong(title, duration)

These functions should:

- Generate unique IDs
- Add data to your schema
- Return the created object or ID when appropriate

### 2\. Read / Query Functions

Functions that retrieve raw information from your data.

    getPlayerById(id)
    getRecipesWithIngredient("flour")
    getAllSongsLongerThan(200)

### 3\. Update / Mutation Functions

Functions that modify existing data or relationships.

    addPlayerToTeam(playerId, teamId)
    markTaskComplete(taskId)
    removeInventoryItem(playerId, itemId)

### 4\. Derived / Read-Only Functions

Functions that compute values without modifying the data.

    getTeamAverageScore(teamId)
    getTotalPlaylistDuration(playlistId)

---

## Part 4: Invalid Input & Edge Cases

You must handle at least **two** of the following:

- Invalid IDs
- Wrong argument types
- Missing required arguments
- Duplicate data
- Empty collections

Your functions should either:

- Throw a clear error
- OR return `null` or `undefined` consistently

---

## Part 5: Demonstrate Everything in `index.js`

You will use `index.js` to demonstrate how your system works. Think of this as a walkthrough for another developer.

Your `index.js` must:

- Import your data and all functions
- Log the initial state of your data
- Demonstrate creation, read/query, update, and derived functions
- Clearly show what happens with invalid input
- Log the final state of your data

**Invalid input demonstration is required.**

    try {
      getPlayerById(9999);
    } catch (err) {
      console.error(err.message);
    }

---

## Required Files

- `data.js`
- `functions.js`
- `index.js`

---

## Grading Criteria (High Level)

- Quality and clarity of the data model
- Appropriate use of arrays and objects
- Correct and consistent function behavior
- Clear demonstration in `index.js`
- Intentional handling of invalid input
- Code readability and organization

---

## Final Notes

There is no single correct schema for any given dataset. Focus on clarity, consistency, and intention.
