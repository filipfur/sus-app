import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { SocialIcon } from 'react-social-icons';
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineCheck, AiFillDollarCircle } from 'react-icons/ai'
import remarkGfm from 'remark-gfm';

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
    content = <span style={{borderLeft: "2px solid magenta", fontWeight: "bold", fontStyle: "italic", paddingLeft: "1em"}}>{alt.substring(alt.indexOf(" ") + 1)}</span>
  }
  else if(alt === "social-handle")
  {
    content = (
      <div className="social-handle">
        <SocialIcon url="https://discord.gg/uvKHeBqF"/>
        <a className="App-link" href={src} style={{marginLeft: "0.5em"}}>{src}</a>
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
    <div className="App-page">
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} components={{ img: ImageRenderer }}/>
    </div>
  )
}

function App() {

  useEffect(()=>{
    /*listReactFiles("pages").then((file) => {
      console.log(file);
    });*/
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src="sus-logo.png" className="App-logo" alt="logo" />
        <p>
          Svenska Spelutvecklingssällskapet
        </p>
        <span style={{fontSize: "75%", marginBottom: "2em"}}><i>
          "Med syfte att främja spelutvecklingen i Sverige."
        </i></span>
        <a className="App-link" onClick={()=>{
          console.log("hello wolrds!");
          document.getElementsByTagName("h1")[0].scrollIntoView();
        }}>
          Läs mer
        </a>
      </header>
      <div className="App-body">
        <Page src="pages/about.md" />
        <Page src="pages/events.md" />
      </div>
    </div>
  );
}

export default App;
