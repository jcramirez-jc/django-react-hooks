import PropTypes from 'prop-types';
import React from "react";
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {


    return(
        <header className="header">
            <h1>{title}</h1>
            <Button color= {showAdd ? "red" : "green"} text= {showAdd ? "Close" : "Add"} onClick={onAdd}/>
        </header>

    );
}

Header.defaultProps ={
    title: "Task tracker"
}
// proptypes going to make your code more robust
Header.propTypes = {
    title: PropTypes.string
}
/* CSS in JS
const HeadingStyles = {
    color: 'red', backgroundColor: "black"
}
*/
export default Header