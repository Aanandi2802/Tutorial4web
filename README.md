# Tutorial 4

* *Date Created*: 14/06/2023
* *Gitlab Repository URL*: <http://example.com/>
* *Hosted URL*: <http://example.com/>

## Author

* [Aanandi Ramnikbhai Pankhania](an936894@dal.ca) - B00930007

## Deployment

Deployment platform: [Netlify](app.netlify.com)
Hosted Link: https://aanandi-assignment1-web.netlify.app/

Steps performed to deploy the applicaion:
* Push code to github
* Create an account on netlify
* Go to "Add new site option"
* Select "Import an existing project" option
* Select "Github" option and choose your project's repository.
* Select site settings
* Deploy your site

## Built With
 
* [React.js](https://react.dev/) - The web framework used
* [npm](https://www.npmjs.com/) - Package manager for node.js
* [nodejs](https://nodejs.org/en) - Runtime used

## Sources Used

### Login.js

*Lines 12 - 31*

```
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://express-t4.onrender.com/api/login",
        {
          username: email,
          password: password,
        }
      );

      if (response.status === 200) {
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
```

The code above was created by adapting the code in https://blog.logrocket.com/how-to-use-axios-post-requests/ as shown below: 

```
Cconst handleSubmit = async () => {
    try {
      const response = await axios.post(url, userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
```

## References
[1] https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/#aa-axios
[2] https://react.dev/
[3] https://reactrouter.com/en/6.13.0/start/tutorial


