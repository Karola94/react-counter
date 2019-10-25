var Counter = React.createClass({
    getDefaultProps: function() {
        return console.log('Metoda getDefaultProps()');
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    componentWillMount: function() {
        console.log('Metoda componentWillMount()');
    },
    componentDidMount: function() {
        console.log('Metoda componentDidMount()');
    },
    componentWillReceiveProps: function(nextProps) {
        console.log('Metoda componentWillReceiveProps()');
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('Metoda shouldComponentUpdate()');        
    },
    componentWillUpdate: function(nextProps, nextState) {
        console.log('Metoda componentWillUpdate()');
    },
    componentDidUpdate: function(prevProps, prevState) {
        console.log('Metoda componentDidUpdate()');
    },
    componentWillUnmounth: function() {
        console.log('componentWillUnmounth');
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {        
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('div', {}, 
                React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
                React.createElement('button', {onClick: this.increment}, 'Dodaj')
            ),
            console.log('Renderowanie widoku komponentu')
        );
    }
});