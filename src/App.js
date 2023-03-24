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
import { SignupWidget } from './SignupWidget';

const SCROLL_THRESH_Y = 0;

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
            <div className="quote">
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
    else if (alt === "signup-widget")
    {
        content = <SignupWidget></SignupWidget>
    }
    else if (alt === "hspacer") {
        content = <span style={{ marginLeft: src, visibility: "hidden" }}></span>
    }
    return content;
}

export function Page({ src, bg, bs, pt }) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(src)
            .then((res) => res.text())
            .then((text) => {
                setContent(text)
            });
    }, [src]);

    return (
        <div className="page box" style={{background: bg, boxShadow: bs, paddingTop: pt}}>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkHeadingId]} components={{ img: ImageRenderer }} />
        </div>
    )
}

// document.getElementsByTagName("h1")[0].scrollIntoView();

function Link({children, href})
{
    return (
        <a className="link" href={href} /*onClick={() => {
            if(window.scrollY <= SCROLL_THRESH_Y)
            {
                window.scrollTo(0, SCROLL_THRESH_Y + 1);
            }
        }}*/>
            <span>{children}</span>
        </a>
    )
}

function App() {

    const [extra, setExtra] = useState("");

    useEffect(() => {
        /*listReactFiles("pages").then((file) => {
          console.log(file);
        });*/

        const handleScroll = () => {
            if (window.scrollY > SCROLL_THRESH_Y) {
                setExtra(" slippin");
            }
            else {
                setExtra("");
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [extra]);

    /*
    <a className="link" href="#events">
                        <span>Events</span>
    </a>
    */


    return (
        <div className="App">
            <header className={"header frame box" + extra}>
                <div className='link-container'>
                    <Link href="#about">Om oss</Link>
                    <Link href="#discord">Discord</Link>
                    <Link href="#signup">Medlemsansökan</Link>
                    <Link href="#merch">Merch</Link>
                    <Link href="#contact">Kontakt</Link>
                </div>
                {extra == "" && <div className="firstpage">
                    <img src="sus-logo.png" className="logo" alt="logo" />
                    <p style={{fontWeight: "bold"}}>Gå med i Svenska Spelutvecklingsällskapet på Discord!</p>
                    <img src="discord-logo-black.png" />
                </div>}
            </header>
            <div className="page-container">
                <Page src="pages/about.md" bs="inset #16161640 0 0 0.45em 0.225em" pt="6em"/>
                <Page src="pages/social.md" bg="#f8f8f8" bs="none"/>
                <Page src="pages/signup.md" bs="inset #16161640 0 0 0.45em 0.225em"/>
                <Page src="pages/merch.md" bg="#f8f8f8" bs="none"/>
                <Page src="pages/contact.md" bs="inset #16161640 0 0 0.45em 0.225em"/>
            </div>
            <div id="top-of-site-pixel-anchor"></div>
        </div>
    );
                /*<Page src="pages/events.md" />*/
}

export default App;
