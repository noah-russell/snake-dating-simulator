# Snake Dating Simulator Documentation

## Server API Endpoints

  | METHOD | ENDPOINT                     | USAGE                                      | RETURNS                     |
  | ------ | ---------------------------- | ------------------------------------------ | --------------------------- |
  | GET    | `/home`                      | Get current reputation                     | A number                    |
  | POST   | `/home`                      | Send a message to SF                       | Calculations                |


## Post Endpoints

### Get Posts

  Request type and route:<br />
  **GET `/home`**

  Response:

  ```json
  
    {
      "currentRep: 0"
    }
  
  ```

### Add Post

  Request type and route:<br />
  **POST `/home`**

  Request body:

  ```json
  {
    "id": 1,
      "text": "Let me sssssslide in",
      "newRep": 5
  }
  ```

  Response:

  ```json
  {
    "id": 1,
      "currentRep": 10,
      "text": "Let me sssssslide in",
      "newRep": 5
  }
  ```

