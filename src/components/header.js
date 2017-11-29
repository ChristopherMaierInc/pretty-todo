import React from 'react';
import {Progress, Level, Heading, Title, Container} from 'reactbulma';

const Header = ({totalTasks, totalComplete, totalIncomplete, title}) => (<div>
  <Level>
    <Level.Item hasTextCentered="hasTextCentered">
      <div>
        <Heading>Incomplete</Heading>
        <Title>{totalIncomplete}</Title>
      </div>
    </Level.Item>
    <Level.Item hasTextCentered="hasTextCentered">
      <div>
        <Heading>Complete</Heading>
        <Title>{totalComplete}</Title>
      </div>
    </Level.Item>
  </Level>
  <Container fluid="fluid">
    <Progress primary="primary" value={totalComplete} max={totalTasks}></Progress>
  </Container>
</div>)

export default Header;
