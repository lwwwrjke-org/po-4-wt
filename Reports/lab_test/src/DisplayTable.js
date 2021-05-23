import React from "react";
import {Card, Image, Icon} from 'semantic-ui-react';
import './index'

const DisplayTable = ({ data, repositories }) => {
  return (
    <div>
        <div className = 'card'>
            <Card>
            <Image src = {data.avatar_url} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{data.name}</Card.Header>
                <Card.Header>{data.username}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='bullhorn'/>
                    {data.followers} Followers
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='user'/>
                {data.following} Following
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='thumbtack'/>
                {data.bio} 
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                <Icon name='map marker alternate'/>
                {data.location} 
                </a>
            </Card.Content>
            </Card>
            
        </div>
        <div className='repos'>
            <p>Repositories:</p>
            {repositories.map(repo => (
              <Card className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
    </div>
    
       
    
  );
};

export default DisplayTable;