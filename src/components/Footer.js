import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome() {
  return (
    <>
        <footer className=" bg-md">
            <h2>Contact</h2>
            <hr/>
            <address className="flex-row-even" id="contact-info">
                <table>
                    <tr>
                        <td><a href="mailto:njconklin1987@gmail.com">njconklin1987@gmail.com</a></td>
                    </tr>
                    <tr>
                        <td>
                            <a href="tel:+13257251909">(325) 725-1909</a>
                        </td>
                    </tr>
                    <tr id="icons">
                        <td>
                            <a href="mailto:njconklin1987@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                            <a href="tel:+13257251909"><i className="fa-solid fa-square-phone"></i></a>
                            <a href="https://github.com/RelentlessNC"><i className="fa-brands fa-github" target="new"></i></a>
                            <a href="https://www.linkedin.com/in/nicholas-conklin/" target="new"><i className="fa-brands fa-linkedin"></i></a>
                        </td>
                    </tr>
                </table>
            </address>
        </footer>
    </>
  );
}
