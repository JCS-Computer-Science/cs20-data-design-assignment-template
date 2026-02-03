import { data } from "./data.js";
import {} from "./functions";

/*Here is an example of an exemplary output from this file
Your output does not need to match this exactly —
but it must be readable, labeled, and intentional.

====================================
📦 INITIAL DATA STATE
====================================
{
  users: [
    { id: 1, name: "Alex", playlistIds: [101] }
  ],
  playlists: [
    { id: 101, name: "Workout", songIds: [201] },
  ],
  songs: [
    { id: 201, title: "Don't Wallow", duration: 149 }
  ]
}

====================================
➕ CREATING DATA
====================================
Created user:
{ id: 2, name: 'Taylor' }

Created songs:
{ id: 202, title: 'Get Fighted', duration: 185 }
{ id: 203, title: 'BCKYRD', duration: 203 }

Created playlist:
{ id: 102, name: 'Driving Mix', songIds: [] }

====================================
🔗 UPDATING RELATIONSHIPS
====================================
Added song 202 to playlist 101
Added song 203 to playlist 101
Added song 202 to playlist 102
Added playlist 102 to user 1
Added playlist 101 to user 2

====================================
🔍 QUERYING DATA
====================================
Get user by ID (1):
{ id: 1, name: 'Alex', playlistIds: [101, 102] }

Get playlist by ID (101):
{ id: 101, name: 'Workout', songIds: [201, 202, 203] }

====================================
📊 DERIVED DATA (READ-ONLY)
====================================
Total duration of playlist 101:
537 seconds

Number of songs in playlist 101:
3

====================================
⚠️ INVALID INPUT DEMONSTRATIONS
====================================
Attempting to get user with invalid ID (999):
Error: User with ID 999 does not exist

Attempting to add song with missing title:
Error: Song title is required

Attempting to add duplicate song to playlist:
Error: Song 201 is already in playlist 101

====================================
📦 FINAL DATA STATE
====================================
Users:
[
  {
    "id": 1,
    "name": "Alex",
    "playlistIds": [101, 102]
  }
  {
    "id": 2,
    "name": "Taylor",
    "playlistIds": [101]
  }
]

Playlists:
[
  {
    "id": 101,
    "name": "Workout",
    "songIds": [201, 202, 203]
  },
  {
    "id": 102,
    "name": "Driving Mix",
    "songIds": [202]
  }
]

Songs:
[
  {
    "id": 201,
    "title": "Don't Wallow",
    "duration": 149
  },
  { 
    "id": 202,
    "title": 'Get Fighted',
    "duration": 185
  },
  { 
    "id": 203,
    "title": 'BCKYRD',
    "duration": 203
  }
]

====================================
✅ DEMO COMPLETE
====================================
*/
