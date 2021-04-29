const App = () => (
    <div>
        <Person age={17} name='Dukefan54' hobbies={['basketball', 'football', 'knitting']} />
        <Person age={27} name='Catguy76' hobbies={['buying cats', 'petting cats', 'feeding cats']} />
        <Person age={19} name='DogBois342' hobbies={['petting dog', 'playing fetch', 'walking dog']} />
    </div>
);

ReactDOM.render(<App/>, document.querySelector("#root"));