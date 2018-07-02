import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Category = ({ category }) => (
  <span className='Category'>{category}</span>
)

const PublicEvent = ({
  title,
  creator,
  beginsAt,
  categories
}) => (
  <Card>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>
        <Icon name='calendar alternate' />
        {new Date(beginsAt).toLocaleString()}
      </Card.Description>
      <br />
      <Card.Meta>
        <Icon name='user' />
        <span>Criado por {creator}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      {categories.map(category => <Category category={category} />)}
    </Card.Content>
  </Card>
)

export default PublicEvent