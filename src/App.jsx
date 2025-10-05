import { React, useEffect, useRef, useState } from 'react'
import mySong from "./assets/audio/instrumental.mp3"
import musicIcon from "./assets/pics/music.png"
import Haldi from "./assets/pics/Haldi.jpeg"
import Our_Pic from "./assets/pics/Our_Pic.jpg"
import confetti from "canvas-confetti"




const App = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [showAlert,setShowAlert] = useState(false);
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  const [attending, setattending] = useState("")
  const [guests, setguests] = useState("")
  const [phone,setphone] = useState("")
// console.log({ name, email });

  
  

  useEffect(()=>{
    const createFalling = () =>{
      const element = document.createElement("div");

      const isHeart = Math.random() > 0.5;
      element.classList.add(isHeart ? "heart" : "petal");

      element.style.left = Math.random() * 100 + "vw";
      element.style.animationDuration = 3 + Math.random() * 2 + "s";

      document.body.appendChild(element);

      setTimeout(()=> {
        element.remove();
      }, 10000);
    };

    const interval = setInterval(createFalling, 100);
    setTimeout(()=> clearInterval(interval), 20000);
  },[]);

  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // Scroll to a particular image index
  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const images = track.querySelectorAll("img");
    if (!images.length) return;

    if (index < 0) index = 0;
    if (index >= images.length) index = images.length - 1;
    setCurrentIndex(index);

    const img = images[index];
    const imgCenter = img.offsetLeft + img.offsetWidth / 2;
    const trackCenter = track.clientWidth / 2;

    track.scrollTo({
      left: imgCenter - trackCenter,
      behavior: "smooth",
    });

    // Update arrow visibility
    setLeftArrow(index > 0);
    setRightArrow(index < images.length - 1);
  };

  // On mount → scroll to first image center
  useEffect(() => {
    if (trackRef.current) {
      scrollToIndex(0);
    }
    // eslint-disable-next-line
  }, []);

  // const scrollLeft = () => {
  //   const newIndex = currentIndex - 1;
  //   setCurrentIndex(newIndex);
  //   setrightarrow(true);
  //   trackRef.current.scrollLeft -= 300; // kitna slide karna hai

  //   if(newIndex == 0)
  //   {
  //     setleftarrow(false);
  //   }
  // };

  // const scrollRight = () => {
  //   const newIndex = currentIndex + 1;
  //   setCurrentIndex(newIndex);
  //   setleftarrow(true);
  //   trackRef.current.scrollLeft += 300;

  //   if(newIndex == lastIndex)
  //   {
  //     setrightarrow(false);
  //   }
  // };


  const [isPlaying, setIsPlaying]=useState(false)
  const audioRef= useRef(null);

  const handleMusicToggle= ()=> {
    if(isPlaying){
      audioRef.current.pause();
    }
    else{
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  function Submit() {

    

      if(!name.trim() || !email.trim() || !phone.trim() || !attending.trim() || !guests.trim() || !message.trim() ){
          setShowAlert(true)
          setFadeOut(false)
          return;
      }

      if(!name)
      {
        alert("We need your name too")
      }

      if(!email)
      {
        alert("We need your e-mail too")
      }

      if(!phone)
      {
        alert("We need your phone number too")
      }

      if(!attending)
      {
        alert("We need to know if you're attending our marriage or not?")
      }
        else if(attending=="no"){
                  setShowFailure(true)
                  setFadeOut(false)
                }
              

    

      if(!guests)
      {
        alert("Please tell us the number of guests too...")
      }

      if(!message)
      {
        alert("Please write something for us too...")
      }
      

    
    // trigger confetti burst
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });

    // show popup
    setShowSuccess(true);
    setFadeOut(false);
  };

       useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setFadeOut(true); // start fade-out
        setTimeout(() => setShowAlert(false), 500); // hide after animation
      }, 3000); // stay visible 3s
    }

    
    setname("")
      setemail("")
        setphone("")
          setattending("")
            setguests("")
            setmessage("")

    return () => clearTimeout(timer);
     
  }, [showAlert]); 

  useEffect(() => {
    let timer;
    if (showFailure) {
      timer = setTimeout(() => {
        setFadeOut(true); // start fade-out
        setTimeout(() => setShowFailure(false), 500); // hide after animation
      }, 3000); // stay visible 3s
    
                setname("")
                setphone("")
                setemail("")
                setattending("")
                setguests("")
                setmessage("")
        } 
        return () => clearTimeout(timer);
     
  }, [showFailure]); 

  // auto-close with fade-out
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setFadeOut(true); // start fade-out
        setTimeout(() => setShowSuccess(false), 500); // hide after animation
      }, 3000); // stay visible 3s
    }

    
    setname("")
      setemail("")
        setphone("")
          setattending("")
            setguests("")
            setmessage("")

    return () => clearTimeout(timer);
     
  }, [showSuccess]); 

       

  


  

  
   
  return (



    <>
    
          <title> Wedding Site </title>
        


          {/* <div className="ani"> */}



          <div className='container'>




      

        <img className='msc' src={musicIcon} alt="music" onClick={handleMusicToggle} style={{cursor: "pointer"}} />


      

      <audio ref={audioRef} loop>
          
          <source src={mySong} type='mpeg/audio' />
          <source src={mySong} type="audio/ogg" />
  Your browser does not support the audio element.
          
        </audio> 
        

        <div className='hsthg'> 
          
          
          <p> #AAstreaming_forever </p> 
          

        

            <nav id='home'>
              
              <div className='navbar'>

              
              
              

              <a href="#hero"> Home </a>
              <a href="#story"> Our Story </a>
              <a href="#events"> Events </a>
              <a href="#gallery"> Gallery </a>
              <a href="#rsvp"> RSVP </a>

              </div>
            </nav>
            </div>

            <section id='hero'>

              <div className='hero_con'>

              
               <h1> Aditya Jain & Ankita Jain </h1>

               <div className='hero_img'>

               

                  <img src={Our_Pic} alt="" />

                  </div>
              </div>


            </section>
            
            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

            <section id='story'>
               <div className='story_con'>

                { /*<h1> Our Story </h1>
                <span> <img src={Haldi} alt="Our Pic" height={400} width={400} /> </span>
                <span> 
                  <p> Amidst all the chaos and hustle, my heart found its forever 💕 </p>

                     <p> Before we fell in love, we fell into endless brainstorming sessions, case studies, and problem-solving marathons. Somewhere between product roadmaps and late-night debates, we discovered the best idea we’d ever co-create — US❣️ </p>

                     <p> We are getting married on December 2nd, 2025! </p>
                     <p> So block your calendars and get ready for a day full of love, laughter, and dance floors on fire. 💃🕺</p>


                      <p> #AAstreaming_forever </p>
                </span>
              </div> */}

              
  {/* <!-- Row 1 --> */}
  <figure className="story_img story_img--left">
    <img src={Our_Pic} alt="Bride portrait"/>
  </figure>
  <div className="story_text story_text--right">
    <h3>Her side of the story</h3>
      <p> Amidst all the chaos and hustle, my heart found its forever 💕 
                  <br />
                  <br />

                     Before we fell in love, we fell into endless brainstorming sessions, case studies, and problem-solving marathons. Somewhere between product roadmaps and late-night debates, we discovered the best idea we’d ever co-create — US❣️ 

                     <br />
                     <br />

                      We are getting married on December 2nd, 2025! 

                     <br />
                     <br />
                      So block your calendars and get ready for a day full of love, laughter, and dance floors on fire. 💃🕺

                     <br />
                     <br />


                       #AAstreaming_forever </p>
  
  </div>

  {/* <!-- Row 2 --> */}
  <div className="story_text story_text--left">
    <h3>His side of the story</h3>
    <p>
      “She asked for a coffee recommendation… I’ve been recommending
      myself ever since.”
    </p>
  </div>
  <figure className="story_img story_img--right">
    <img src={Our_Pic} alt="Groom portrait"/>
  </figure>
  </div>
</section>


            

            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

            <section id='events'>

              <div className='events_con'>

                <h1> Events </h1>

                {/* <div className="events_gal">

                  

                <img src={Haldi} alt="Image loading..." height={400} width={360} />
                <img src={Haldi} alt="Image loading..." height={400} width={360} />
                <img src={Haldi} alt="Image loading..." height={400} width={360} />
                <img src={Haldi} alt="Image loading..." height={400} width={360} />
              </div> */}
{/* 
              <div class="events-equal">
  <div class="row row--top">
    <div class="event e1">
                  <img src={Haldi} alt="" height={400} width={360} /> </div>
  </div>

  <div class="row row--middle">
    <div class="event e2">
      <img src={Haldi} alt="" height={400} width={360} /></div>
    <div class="event e3"> <img src={Haldi} alt="" height={400} width={360} /> </div>
    <div class="event e4"><img src={Haldi} alt="" height={400} width={360} /> </div>
  </div>

  <div class="row row--bottom">
    <div class="event e5"> <img src={Haldi} alt="" height={400} width={360} /></div>
  </div> */}
 {/* </div> */}

<div className="events-grid">
  
  <div className="event-card">
    <div className="event-img">
      <img src="haldi.jpg" alt=""/>
    </div>
    <p className="event-name">Haldi</p>
    <div className="extra"><p>“Haldi ki roshni, khushiyon ki kahani ✨”</p></div>
  </div>


  <div className="event-card">
    <div className="event-img">
      <img src={Haldi} alt=""/>
    </div>
    <p className="event-name">Mehendi</p>
    <div className="extra"><p>“Mehendi ke rang, pyaar ke sang 💚”</p></div>
  </div>


  <div className="event-card">
    <div className='event-card-wedding'>
    <div className="event-img1">
      <img src={Our_Pic} alt=""/>
    </div>
    <p className="event-name">Wedding</p>
    <div className="extra"><p>“Shaadi ki shaan, dosti aur armaan 💍”</p></div>
  </div>
  </div>

  
  <div className="event-card">
    <div className="event-img">
      <img src="sangeet.jpg" alt=""/>
    </div>
    <p className="event-name">Sangeet</p>
    <div className="extra"><p>“Nach gaana, dil se jamaana 🎶”</p></div>
  </div>

  
  <div className="event-card">
    <div className="event-img">
      <img src="reception.jpg" alt=""/>
    </div>
    <p className="event-name">Reception</p>
    <div className="extra"><p>“Nayi shuruat, pyar ki baat 🌸”</p></div>
  </div>
</div>



              </div> 

            </section>

            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

            <section id='gallery'>

              <div className="gallery1_con">

                

              <div className="carousel">

        <h1> Memories </h1>

      {/* Left Arrow */}

      {leftArrow &&
      <button className="arrow left" onClick={() => scrollToIndex(currentIndex - 1)} 
      style={{
          left: 10,
          opacity: leftArrow ? 1 : 0,
          pointerEvents: leftArrow ? "auto" : "none",
        }}>
        <img src="https://cdn-icons-png.freepik.com/512/271/271220.png" alt="" height={50} />
      </button> }

      {/* Track */}
      <div className="carousel-track" ref={trackRef} id='carouselTrack'
      style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          justifyContent: "center",
          gap: "16px",
          scrollBehavior: "smooth",
        }}>
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..."   style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} />
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} />
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} />
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }}/>
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..."   style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }}/>
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..."   style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} />
      </div>

      {/* Right Arrow */}
      {rightArrow && <button className="arrow right" onClick={() => scrollToIndex(currentIndex + 1)}
         style={{
          right: 10,
          opacity: rightArrow ? 1 : 0.5,
          pointerEvents: rightArrow ? "auto" : "none",
        }}>
        <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" height={50} />
      </button> }
    </div>
    </div>

            </section>

            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

            <section id='rsvp'>

              <div className='rsvp_con'>

                
                
                <h1> We can't wait to celebrate with you  </h1>

                <br />

                <p> Please RSVP below: </p>

                <span className='rsvp_span'> 

                <label htmlFor="name" > Full Name: </label>
                <input type="text" name='name' placeholder="Enter your full name"  value={name} autoComplete='off' onChange={(e)=>{setname(e.target.value)}}/> 

                </span>

                <span className='rsvp_span'>

                <label htmlFor="email"> E-mail: </label>
                <input type="email" name='email' placeholder="Enter your e-mail" value={email} onChange={(e)=>{setemail(e.target.value)}}/>

                </span>

                <span className='rsvp_span'>

                <label htmlFor="phone"> Phone: </label>
                <input type="tel" name='phone' placeholder="Enter your phone number" value={phone} pattern='[0-9] {10}'onChange={(e)=>{setphone(e.target.value)}} />

                </span>

                <span className='rad'>

                  <label htmlFor="option1"> Will you attend? </label>
                  
                  <input type="radio" name="attending" value="yes" checked={attending=="yes"} onChange={(e)=>{setattending(e.target.value)}}/> <label htmlFor="option1"> Yes </label>
                  <input type="radio" name="attending" value="no" checked={attending=="no"} onChange={(e)=>{setattending(e.target.value)}}/> <label htmlFor="option1"> No </label> 
                </span>

                <span className='rsvp_span'>

                  <label htmlFor="guests"> Number of Guests: </label>
                  <input type="tel" name='guests' placeholder="Enter number of Guests" value={guests}  onChange={(e)=>{setguests(e.target.value)}}/>


                </span>

                <span className='rsvp_span'>

                  <label htmlFor="message"> Any Message for us?  </label>
                  <textarea placeholder="Enter your message for us" cols="30" rows="10"  maxLength={1000} value={message} name='message' onChange={(e)=>{setmessage(e.target.value)}}></textarea>
                </span>

                <div className='rsvp_btn1'>

                <button className='rsvp_btn' onClick={Submit}> RSVP Now </button>

                </div>
                

              </div>



            </section>

            {showSuccess && (
        <div className={`success-overlay ${fadeOut ? "fade-out" : ""}`}>
          <div className="success-popup">
            <h2>🎉 RSVP Successful!</h2>
            <p>Thank you for confirming. See you at the wedding... 💕</p>
          </div>
        </div>
      )}

        {showFailure && (
        <div className={`success-overlay ${fadeOut ? "fade-out" : ""}`}>
          <div className="success-popup">
            <h2>🎉 RSVP Successful!</h2>
            <p>But okay 💔. See you around then 💕</p>
          </div>
        </div>
      )}

      {showAlert && (
        <div className={`success-overlay ${fadeOut ? "fade-out" : ""}`}>
          <div className="success-popup">
            <h2>🎉 RSVP Pending....</h2>
            <p> Please enter your Details... 💔</p>
          </div>
        </div>
      )}

            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

            <section>

              <div className='footer'>

                <p>
                  Footer
                </p>

                <a href="#home"> <img src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/up-arrow-icon.png" alt="" height={30} /> </a>

              </div>

            </section>

          </div>
          {/* </div> */}
          {/* </div> */}

        
    </>
  )
}

export default App