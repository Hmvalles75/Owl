import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import stage from './stage';

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<stage participants={[
    {
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
  ]} />, div)
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders the UI as expected', () => {
  const tree = renderer
      .create(<stage participants={[
          {
              id: 1,
              name: 'Koren Templeton',
              avatar:
                  'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
              inSession: true,
              onStage: true
          },
          {
              id: 3,
              name: 'Axe Kubicka',
              avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
              inSession: false,
              onStage: false
          },
      ]} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});



