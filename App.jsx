import React from 'react';

class App extends React.Component {
   render(){
       return(
               <div>
                   <h1>{this.props.propArray}</h1>
                   <h1>{this.props.propBool ? "true" : "false"}</h1>
                   <h1>{this.props.propString}</h1>
                   <h1>{this.props.propNumber}</h1>
                   <h1>{this.props.propObject.name}</h1>
                   <h1>{this.props.propObject.age}</h1>
				   <h1>{this.props.propFunction("hello fun")}</h1>
               </div>
       );
   }
}

App.propTypes = {
    propArray : React.PropTypes.array.isRequired,
    propBool : React.PropTypes.bool.isRequired,
    propString : React.PropTypes.string,
    propNumber: React.PropTypes.number,
    propObject : React.PropTypes.object,
	propFunction : React.PropTypes.func
}

App.defaultProps = {
    propArray: [1,2,3,4],
    propBool: true,
    propString: "hello world",
    propNumber: 1,
    propObject : {
        name:"ezhil",
        age:21
    },
	propFunction: function(e){return e}
}

export default App;