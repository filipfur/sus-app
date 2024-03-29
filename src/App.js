import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { SocialIcon } from 'react-social-icons';
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineCheck, AiFillDollarCircle } from 'react-icons/ai'
import remarkGfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import { margin, width } from '@mui/system';
import { MerchWidget } from './MerchWidget';

export function ImageRenderer({ src, alt }) {
    var content = <img src={src} alt={alt} />;
    if (alt === "react-icon") {
        if (src === "at") { content = <MdAlternateEmail /> }
        else if (src === "check") { content = <AiOutlineCheck /> }
        else if (src === "dollar") { content = <AiFillDollarCircle /> }
    }
    else if (alt === "social-icon") {
        content = <SocialIcon url={src} />
    }
    else if (alt.startsWith("quote")) {
        content = (<>
            <div style={{ borderLeft: "0.2em solid magenta", fontWeight: "bold", fontStyle: "italic", paddingLeft: "0.5em" }}>
                <span>
                    {alt.substring(alt.indexOf(" ") + 1)}
                </span>
            </div>
        </>)
    }
    else if (alt === "social-handle") {
        content = (
            <div className="social-handle">
                <SocialIcon url="https://discord.gg/uvKHeBqF" />
                <a className="link" href={src} style={{ marginLeft: "0.5em" }}>{src}</a>
            </div>
        )
    }
    else if (alt == "merch-widget")
    {
        content = <MerchWidget></MerchWidget>
    }
    else if (alt === "hspacer") {
        content = <span style={{ marginLeft: src, visibility: "hidden" }}></span>
    }
    return content;
}

export function Page({ src }) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(src)
            .then((res) => res.text())
            .then((text) => {
                setContent(text)
            });
    }, [src]);

    return (
        <div className="page box">
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkHeadingId]} components={{ img: ImageRenderer }} />
        </div>
    )
}

// document.getElementsByTagName("h1")[0].scrollIntoView();

function App() {

    const [extra, setExtra] = useState("");

    useEffect(() => {
        /*listReactFiles("pages").then((file) => {
          console.log(file);
        });*/

        const handleScroll = () => {
            if (window.scrollY > 64) {
                setExtra(" slippin");
            }
            else {
                setExtra("");
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [extra]);


    return (
        <div className="App">
            <header className={"header frame box" + extra}>
                <div className='link-container'>
                    <a className="link" href=".">
                        <span>Om oss</span>
                    </a>
                    <a className="link" href='#discord'>
                        <span>Discord</span>
                    </a>
                    <a className="link" href="#events">
                        <span>Events</span>
                    </a>
                    <a className="link" href="#signup">
                        <span>Medlemsansökan</span>
                    </a>
                    <a className="link" href='#merch'>
                        <span>Merch</span>
                    </a>
                    <a className="link" href="#contact">
                        <span>Kontakt</span>
                    </a>
                </div>
                {extra == "" && <div className="firstpage">
                    <img src="sus-logo.png" className="logo" alt="logo" />
                    <p style={{fontWeight: "bold"}}>Gå med i Svenska Spelutvecklingsällskapet på Discord!</p>
                    <img src="discord-logo-black.png" />
                </div>}
            </header>
            <div className="page-container">
                <Page src="pages/about.md" />
                <Page src="pages/social.md" />
                <Page src="pages/events.md" />
                <Page src="pages/signup.md" />
                <Page src="pages/merch.md" />
                <Page src="pages/contact.md" />
            </div>
            <div id="top-of-site-pixel-anchor"></div>
        </div>
    );
}

export default App;
