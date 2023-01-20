import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { SocialIcon } from 'react-social-icons';
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineCheck, AiFillDollarCircle } from 'react-icons/ai'
import remarkGfm from 'remark-gfm';
import { margin, width } from '@mui/system';

export function ImageRenderer({ src, alt }) {
  var content = <img src={src} alt={alt} />;
  if(alt === "react-icon")
  {
    if(src === "at") { content = <MdAlternateEmail/> }
    else if(src === "check") { content = <AiOutlineCheck/> }
    else if(src === "dollar") { content = <AiFillDollarCircle/> } 
  }
  else if(alt === "social-icon")
  {
    content = <SocialIcon url={src}/>
  }
  else if(alt.startsWith("quote"))
  {
    content = (<>
    <div style={{borderLeft: "0.2em solid magenta", fontWeight: "bold", fontStyle: "italic", paddingLeft: "0.5em"}}>
      <span>
        {alt.substring(alt.indexOf(" ") + 1)}
      </span>
    </div>
    </>)
  }
  else if(alt === "social-handle")
  {
    content = (
      <div className="social-handle">
        <SocialIcon url="https://discord.gg/uvKHeBqF"/>
        <a className="link" href={src} style={{marginLeft: "0.5em"}}>{src}</a>
      </div>
    )
  }
  return content;
}

export function Page({src})
{
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
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} components={{ img: ImageRenderer }}/>
    </div>
  )
}

// document.getElementsByTagName("h1")[0].scrollIntoView();

function App() {

  useEffect(()=>{
    /*listReactFiles("pages").then((file) => {
      console.log(file);
    });*/
  },[]);

  return (
    <div className="App">
      <header className="header frame box">
        <div className='link-container'>
        <a className="link">
          <span>Hem</span>
        </a>
        <a className="link">
          <span>Events</span>
        </a>
        <a className="link">
          <span>Medlemsansökan</span>
        </a>
        <a className="link">
          <span>Kontakt</span>
        </a>
        <img src="sus-logo.png" className="logo" alt="logo" />
        </div>
      </header>
      <div className="page-container">
        <Page src="pages/about.md" />
        <Page src="pages/events.md" />
        <Page src="pages/social.md" />
      </div>
    </div>
  );
}

export default App;
