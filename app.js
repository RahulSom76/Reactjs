    // Create the React element (The 'Object')
        const heading = React.createElement(
            "div", {id:"Parent"},[
            React.createElement("div", {id:"child"},
               [React.createElement("h1", {}, "h1 text"), React.createElement("h1", {}, "h2 text")]

            ),
        
            React.createElement("div", {id:"child1"},
               [React.createElement("h3", {}, "h1 text"), React.createElement("h4", {}, "h2 text")]

            )]
        );

        // Tell React where the 'root' is in the DOM
        const root = ReactDOM.createRoot(document.getElementById("root"));

        // Render the heading into the root
        root.render(heading);