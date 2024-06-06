import React from 'react';
import HomeOnlyNav from '../HomeOnlyNav/HomeOnlyNav';
import './TermsOfService.css'
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <div>
            <HomeOnlyNav/>
            <div class="terms">
                <h1>Terms of Service</h1>

                <h2>1. Introduction</h2>
                <p>Welcome to thomaskalman.com. These terms and conditions outline the rules and regulations for the use of this Website, located at thomaskalman.com.</p>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use thomaskalman.com if you do not agree to all of the terms and conditions stated on this page.</p>

                <h2>2. Cookies</h2>
                <p>We employ the use of cookies. By accessing thomaskalman.com, you agreed to use cookies in agreement with the Privacy Policy.</p>
                <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

                <h2>3. License</h2>
                <p>Unless otherwise stated, thomaskalman.com and/or its licensors own the intellectual property rights for all material on thomaskalman.com. All intellectual property rights are reserved. You may access this from thomaskalman.com for your own personal use subjected to restrictions set in these terms and conditions.</p>
                <p>You must not:</p>
                <div class="list">
                    <p>Republish material from thomaskalman.com</p>
                    <p>Sell, rent or sub-license material from thomaskalman.com</p>
                    <p>Reproduce, duplicate or copy material from thomaskalman.com</p>
                    <p>Redistribute content from thomaskalman.com</p>
                </div>

                <h2>5. Hyperlinking to our Content</h2>
                <p>The following organizations may link to our Website without prior written approval:</p>
                <div class="list">
                    <p>Government agencies;</p>
                    <p>Search engines;</p>
                    <p>News organizations;</p>
                    <p>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</p>
                    <p>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</p>
                </div>
                <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

                <h2>6. iFrames</h2>
                <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                <h2>7. Content Liability</h2>
                <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

                <h2>8. Your Privacy</h2>
                <p>Please read <Link to="/privacy-policy">Privacy Policy.</Link></p>

                <h2>9. Reservation of Rights</h2>
                <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

                <h2>10. Removal of links from our website</h2>
                <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

            </div>
        </div>
    )
}

export default TermsOfService