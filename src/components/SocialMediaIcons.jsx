
function SocialMediaIcons() {

    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/ayush-gupta-b88231260/"
                target="_blank"
                rel="noreferrer">
                <img alt="linkedIn" src="../assets/linkedin.png" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://twitter.com/AyushG3222"
                target="_blank"
                rel="noreferrer">
                <img alt="twitter" src="../assets/twitter.png" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer">
                <img alt="facebook" src="../assets/facebook.png" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer">
                <img alt="instagram" src="../assets/instagram.png" />
            </a>
        </div>
    );
}

export default SocialMediaIcons;