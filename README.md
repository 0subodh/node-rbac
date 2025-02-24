# Express Role-Based Access Control (RBAC)

This is a simple Express.js backend implementing Role-Based Access Control (RBAC). It restricts access to certain routes based on user roles.

## Features
- Middleware to authorize users based on roles.
- Protect specific routes by defining allowed roles.
- Returns a `403 Forbidden` response if access is denied.


## Installation

### Clone the repository:
```sh
git clone https://github.com/0subodh/node-rbac.git
cd node-rbac
```

### Install dependencies:
```sh
npm install
```

## Usage

### Implementing Role-Based Authorization

The `roleMiddleware` middleware restricts access to routes based on user roles.

```javascript
export default function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "You are not authorized" });
    }
    next();
  };
}
```

### Applying Middleware to Routes

```javascript
import express from 'express';
import roleMiddleware from '../middleware/authorizeRoles.js';

const router = express.Router();

router.get('/admin', roleMiddleware('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

router.get('/user', roleMiddleware('user', 'admin'), (req, res) => {
  res.json({ message: 'Welcome User!' });
});

export default router;
```

### Running the Server

Start the Express server:
```sh
node index.js
```

## License
This project is licensed under the MIT License.

