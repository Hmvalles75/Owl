import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import { exportAllDeclaration } from '@babel/types';

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList participants={[
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
        // .create(<ParticipantList key={4} name={'name'} avatar={'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1'}
            // inSession={true} onStage={false}/>)
        .create(<ParticipantList participants={[
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