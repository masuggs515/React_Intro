const App = () => (
    <div>
        <Tweet username='dogguy' name='DOG' date={new Date().toDateString()} msg='Oh my, Do I love puppies.'/>
        <Tweet username='dukefan45' name='Mike' date={new Date().toDateString()} msg='Go Duke!'/>
        <Tweet username='catguy234' name='Meow' date={new Date().toDateString()} msg='Cats are life, dogguy is wrong.'/>
    </div>
);

ReactDOM.render(<App/>, document.querySelector("#root"));