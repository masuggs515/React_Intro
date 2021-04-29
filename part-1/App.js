const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Jon Snow" />
    </div>
);

ReactDOM.render(<App/>, document.querySelector("#root"));