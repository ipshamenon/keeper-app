import React from "react";

const date = new Date();
let currentYear = date.getFullYear();

function Footer() {
    return (
        <footer> 
        <p> Ipsha Menon {currentYear}</p>
        </footer>
    );
}

export default Footer;