# Creatory Game Web

## Live [Demo](https://creatorygame.vercel.app/)

https://creatorygame.vercel.app/

## Related link 

- [Api Implementation](https://github.com/bryantobing12/creatorygame-api)

## Installation

```sh
  package.json scripts
  
   "scripts": {
     "start": "tsc && vite build && vite preview",
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview"
   },
```

## Create ENV File (Required)

`touch .env.local` or `touch .env`

Env file

```sh
  VITE_API_URL=(API_URL)
``` 
  e.g 
```sh
  VITE_API_URL=http://localhost:3000
```


```

  # to install all dependencies
  yarn install
  
  # run dev environment
  yarn dev
  
  # build apps and run apps
  yarn start
  
  # run build preview
  yarn preview
```

## Simple Demo

![Creatory apps demo](https://media.giphy.com/media/wUkpbXFXDhmkkY2z8q/giphy.gif)

## Mobile Responsive demo

![Mobile Responsive Demo creatory apps](https://res.cloudinary.com/itdel/image/upload/v1640534016/Screen_Shot_2021-12-26_at_22.53.24_epsha9.png)



## Future Improvement
- [ ] Validation schema & form seperation of concern
- [ ] Add animation & transition effect
- [ ] Improve error handler
- [ ] Delete functinoality
