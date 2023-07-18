
**Backend:** Node, Express, MongoDB Atlas

**Frontend:** React, Material Ui


## Deployment

**Server side:** Render cloud [link](https://h2s-assignment.onrender.com/api/retrive_data)

**Client side:** Netlify [link](https://hack2skill-task-1.onrender.com/)

## Features 
 - Fetching data from two Collections


**NPM Package**
```
 {
     "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.3.4",
    "nodemon": "^3.0.1"
  }
```

**Schema**
```
{
  full_name: String,
  email: String,
  team_name: String,
},
{
  full_name: String,
  email: String,
  number: Number,
  city: String,
  url: String,
}
```

  #### Run Locally
```javascript
  step 1- clone the Repo 
  step 2- Install all dependencies npm install
  step 3- npm run server
```


## API Endpoints
```javascript
GET http://localhost:8088/api/list
```

