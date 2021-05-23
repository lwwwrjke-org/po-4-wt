import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import {Form} from 'semantic-ui-react';


const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();


    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <div>
        <div className='navBar'>Search in GitHub</div>
        <div className='search'>
        <Form onChange= {onChangeHandler}>
        <Form.Group>
            <Form.Input placeholder='Github user' name='github user' />
            <Form.Button content = 'Search' color='blue' onClick = {submitHandler}/>
        </Form.Group>
        </Form>
        </div>
        <DisplayTable data={data} repositories={repositories} />
    </div>
  );
};
export default Profile;