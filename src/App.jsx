import { React, useEffect, useRef, useState } from 'react'
import mySong from "./assets/audio/instrumental.mp3"
import musicIcon from "./assets/pics/music.png"
import Pic_1 from "./assets/pics/Pic_1.jpg"
import Pic_2 from "./assets/pics/Pic_2.jpg"
import Pic_3 from "./assets/pics/Pic_3.jpg"
import Pic_4 from "./assets/pics/Pic_4.jpg"
import Pic_5 from "./assets/pics/Pic_5.jpg"
import Our_Pic from "./assets/pics/Our_Pic.jpg"





const App = () => {

  


  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // Scroll to a particular image index
  // Scroll to a particular image index
const scrollToIndex = (index) => {
  const track = trackRef.current;
  if (!track) return;

  const images = track.querySelectorAll("img");
  if (!images.length) return;

  // limit index
  const newIndex = Math.max(0, Math.min(index, images.length - 1));
  setCurrentIndex(newIndex);

  const img = images[newIndex];
  const imgCenter = img.offsetLeft + img.offsetWidth / 2;
  const trackCenter = track.clientWidth / 2;

  track.scrollTo({
    left: Math.max(0, imgCenter - trackCenter - 40),
    behavior: "smooth",  // ✅ smooth scroll
  });

  setLeftArrow(newIndex > 0);
  setRightArrow(newIndex < images.length - 1);
};

// arrow click
const handleLeft = () => scrollToIndex(currentIndex - 1);
const handleRight = () => scrollToIndex(currentIndex + 1);


 


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

   
  return (



    <>
    
          <title> Wedding Site </title>
        


        



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

              </div>
            </nav>
            </div>

            <section id='hero'>

              <div className='hero_con'>

              
               <h1> Aditya Jain & Ankita Jain </h1>

               

               <div className='hero_img'>

               

                  <img src={Our_Pic} alt="" />

                  </div>

                  <p>
                    Amidst all the chaos and hustle, my heart found its forever 💕 
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


                       #AAstreaming_forever
                  </p>

                  
              </div>


            </section>
            


   <div class="doodle-wrap">
  <svg class="doodle-svg" viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15 Q50 5, 100 15 T195 15 T295 15 T395 15"
          stroke="#b96ebf"
          stroke-width="3"
          fill="transparent"
          stroke-linecap="round"/>
  </svg>
  <span class="sparkle sparkle-left">✦</span>
  <span class="sparkle sparkle-right">✦</span>
</div>

            <section id='story'>
               <div className='story_con'>

                <h1> How It All Began... </h1>

                <div class="story_heading_divider"></div>

                
                

              
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
      Amidst all the chaos and hustle, my heart found its forever 💕 
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


                       #AAstreaming_forever
    </p>
  </div>
  <figure className="story_img story_img--right">
    <img src={Our_Pic} alt="Groom portrait"/>
  </figure>
  </div>
</section>


            

   <div class="doodle-wrap">
  <svg class="doodle-svg" viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15 Q50 5, 100 15 T195 15 T295 15 T395 15"
          stroke="#b96ebf"
          stroke-width="3"
          fill="transparent"
          stroke-linecap="round"/>
  </svg>
  <span class="sparkle sparkle-left">✦</span>
  <span class="sparkle sparkle-right">✦</span>
</div>

            <section id='events'>

              <div className='events_con'>

                <h1> Events </h1>

           

<div className="events-grid">
  
  <div className="event-card">
    <div className="event-img">
      <img src="https://www.shutterstock.com/image-illustration/haldi-couples-wedding-goal-ceremony-260nw-2349308419.jpg" alt=""/>
    </div>
    <p className="event-name">Haldi</p>
    <div className="extra"><p>“Haldi ki roshni, khushiyon ki kahani ✨”</p></div>
  </div>


  <div className="event-card">
    <div className="event-img">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT438N6ThcITa6chh4HwcR100AoPkDpN5Drdw&s" alt=""/>
    </div>
    <p className="event-name">Mehendi</p>
    <div className="extra"><p>“Mehendi ke rang, pyaar ke sang 💚”</p></div>
  </div>


  <div className="event-card">
    <div className='event-card-wedding'>
    <div className="event-img1">
      <img src="https://static.vecteezy.com/system/resources/previews/055/004/590/non_2x/indian-wedding-icon-illustration-free-vector.jpg" alt=""/>
    </div>
    <p className="event-name">Wedding</p>
    <div className="extra"><p>“Shaadi ki shaan, dosti aur armaan 💍”</p></div>
  </div>
  </div>

  
  <div className="event-card">
    <div className="event-img">
      <img src="https://thumbs.dreamstime.com/b/bride-groom-indian-traditional-wedding-attire-323874213.jpg" alt=""/>
    </div>
    <p className="event-name">Sangeet</p>
    <div className="extra"><p>“Nach gaana, dil se jamaana 🎶”</p></div>
  </div>

  
  <div className="event-card">
    <div className="event-img">
      <img src="https://cdn4.vectorstock.com/i/1000x1000/80/08/wedding-reception-rgb-color-icon-vector-35758008.jpg" alt=""/>
    </div>
    <p className="event-name">Reception</p>
    <div className="extra"><p>“Nayi shuruat, pyar ki baat 🌸”</p></div>
  </div>
</div>



              </div> 

            </section>

    <div class="doodle-wrap">
  <svg class="doodle-svg" viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15 Q50 5, 100 15 T195 15 T295 15 T395 15"
          stroke="#b96ebf"
          stroke-width="3"
          fill="transparent"
          stroke-linecap="round"/>
  </svg>
  <span class="sparkle sparkle-left">✦</span>
  <span class="sparkle sparkle-right">✦</span>
</div>

            <section id='gallery'>

              <div className="gallery1_con">

                

              <div className="carousel">

        <h1> Memories </h1>

      {/* Left Arrow */}

      
      <button className="arrow left" onClick={handleLeft}
      style={{
          left: 10,
          opacity: leftArrow ? 1 : 0,
          pointerEvents: leftArrow ? "auto" : "none",
        }}>
        <img src="https://cdn-icons-png.freepik.com/512/271/271220.png" alt="" height={50} />
      </button> 

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
      <img src={Pic_1} alt="Image loading..."   style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} />
      <img src={Pic_2} alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} />
      <img src={Pic_5} alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} />
      <img src={Pic_4} alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }}/>
      <img src={Pic_3} alt="Image loading..."   style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }}/>
      
      </div>

      {/* Right Arrow */}
      <button className="arrow right" onClick={handleRight}
         style={{
          right: 10,
          opacity: rightArrow ? 1 : 0.5,
          pointerEvents: rightArrow ? "auto" : "none",
        }}>
        <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" height={50} />
      </button> 
    </div>
    </div>

            </section>

    <div class="doodle-wrap">
  <svg class="doodle-svg" viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15 Q50 5, 100 15 T195 15 T295 15 T395 15"
          stroke="#b96ebf"
          stroke-width="3"
          fill="transparent"
          stroke-linecap="round"/>
  </svg>
  <span class="sparkle sparkle-left">✦</span>
  <span class="sparkle sparkle-right">✦</span>
</div>

           




            <section>

              <div className='footer'>

                <h2>
                  Together is our favorite place to be... forever.
                </h2>

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