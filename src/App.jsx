import { React, useEffect, useRef, useState } from 'react'
import mySong from "./assets/audio/instrumental.mp3"
import musicIcon from "./assets/pics/music.png"
import Haldi from "./assets/pics/Haldi.png"
import Engagement from "./assets/pics/Engagement.png"
import Pic_1 from "./assets/pics/Pic_1.jpg"
import Pic_2 from "./assets/pics/Pic_2.jpg"
import Pic_3 from "./assets/pics/Pic_3.jpg"
import Pic_4 from "./assets/pics/Pic_4.jpg"
import Pic_5 from "./assets/pics/Pic_5.jpg"
import Our_Pic from "./assets/pics/Our_Pic.jpg"
import Events_Dress_Code from "./assets/pics/Events_Dress_Code.jpeg"





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
              <a href='#map'> Map </a>

              </div>
            </nav>
            </div>

            <section id='hero'>

              <div className='hero_con'>

              
               <h1> Aditya Jain & Ankita Jain </h1>

               

               <div className='hero_img'>

               

                  <img src={Our_Pic} alt="" loading='eager'/>

                  </div>

                  <p>
                    Amidst all the chaos and hustle, my heart found its forever 💕 
                  <br />
                  <br />

                     Before we fell in love, we fell into endless brainstorming sessions, case studies, and problem-solving marathons. Somewhere between product roadmaps and late-night debates, we discovered the best idea we’d ever co-create — US❣️ 

                     <br />
                     <br />

                     <b> We are getting married on December 2nd, 2025! </b>

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
      {/* <p> Amidst all the chaos and hustle, my heart found its forever 💕 
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
                     <br /> */}

                     <p>If I’m being completely honest… our story didn’t begin like a fairytale. It began with something <b>so random </b> that even today makes me laugh — a bio that said, <b>“Looking for a bride for my son.”</b>
                     <br/>
Weird, right? But something… <b>something </b> in that moment made me accept the request anyway.

<br/>
<br/>

I texted on the given number only to discover it wasn’t Aditya at all — it was his mom.
And oh my God, she was so sweet! She immediately shared his number with me, and that’s how the first real line of our story was written:
<br />
<b>“Aditya, your mother has shared your number with me.”</b>

<br />
<br />

From there, our first call just <b>happened.</b>
<br />
We spoke about work, life, dreams… laughed a bit, teased a bit — nothing serious, just the beginning of something we didn’t yet understand. We thought we’d talk again soon, but life had different plans.

<br />
<br />

We lost touch.
<br />
<br />

For almost a month.

<br />
<br />

Then one random day, his name suddenly popped into my mind. And like any girl who wants some chapar-chapar, I pinged him again — and honestly, <b>that’s when our real story began.</b>

<br />
<br />

We started talking more… A LOT more.

<br />
Calls where I told him every tiny detail of my day, video calls filled with laughter, rants about life and people, and him — patiently listening, laughing, supporting, and taking my side even when I was bitching like a typical girl.
<br />

<b>It felt good.
<br />
It felt easy.
<br />
It felt like home.</b>
<br />
<br />

After weeks of talking, we decided to meet.
<br />
And guess what? That plan also failed.
<br />
Classic us. 😄
<br />
<br />

But when we finally met in April in Hyderabad, everything changed.
<br />
He <b>drove all the way from Bangalore </b> to meet me — and that itself felt unreal.
We spent time together… talking, meeting, sharing deep conversations — and somewhere in those simple unplanned moments, something clicked.
<br />
Not loudly.
<br />
Not dramatically.
<br />
Just naturally.
<br />
<br />

I later visited Bangalore, and we spent more time together — roaming around, exploring places, having the most spontaneous days. And I remember thinking, in one quiet moment:

<br />
<br />

<b>“This is peace.
  <br />
This is what I’ve been looking for all my life.”</b>

<br />
<br />

We didn’t have a dramatic proposal.
<br />
We didn’t have a cinematic confession.
<br />
We just looked at each other one day and knew —
<br />
<b>It’s us. It has always been us.</b>
<br />
<br />

Soon, our parents met… and in India, you know what that means —
<br />
<b>Wedding bells!</b>

<br />
<br />

Life since then has been a beautiful mix of laughter, learning, arguments, comfort, and the softest kind of love.
<br />
We’ve travelled together — Bangalore, Goa, Banaras, Rishikesh — and every place felt special only because he was there.
<br />
Whether it’s a room, a crowded street, a long drive, or a pani-puri date, I feel the same thing every time:
<br />
<br />

<b>With him, I am safe.
  <br />
With him, I am home.
<br />
With him, I am me.</b>

<br />
<br />

We’ve seen ups and downs, fears and fights, joy and madness — but we navigated it all together. I know I panic a lot, but he has been my calm in every storm.

<br />
<br />

And today, after all those tiny twists and turns,
<br />
<b>here we are — getting married on 2nd December.</b>
<br />
<br />

I am grateful.
<br />
I am blessed.
<br />
I am in love — deeply, honestly, endlessly.
<br />
<br />

Here’s to us — our peace, our chaos, our story.
<br />
I love you, Cutuu. Always
<br /></p>
  
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
      {/* <img src="https://www.shutterstock.com/image-illustration/haldi-couples-wedding-goal-ceremony-260nw-2349308419.jpg" alt=""/> */}

      <img src={Haldi} alt="" />
    </div>
    <p className="event-name">Haldi</p>
    <div className="extra"><p> <b> Monday </b> <br /> <b> 1<sup>st </sup> December, 2025 </b> <br /> <b>Time :- </b> 12:00 pm <br /> <b> Venue :- </b> Orchha Club & Resort <br /> (Pool Side)   </p></div>
  </div>


  <div className="event-card">
    <div className="event-img">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT438N6ThcITa6chh4HwcR100AoPkDpN5Drdw&s" alt=""/>
    </div>
    <p className="event-name">Mehendi</p>
    {/* <div className="extra"><p>“Mehendi ke rang, pyaar ke sang 💚”</p></div> */}
  </div>


  <div className="event-card">
    <div className='event-card-wedding'>
    <div className="event-img1">
      <img src="https://static.vecteezy.com/system/resources/previews/055/004/590/non_2x/indian-wedding-icon-illustration-free-vector.jpg" alt=""/>
    </div>
    <p className="event-name">Wedding</p>
    <div className="extra"><p> <b> Tuesday </b> <br /> <b> 2<sup>nd </sup> December, 2025 </b> <br /> <b>Time :- </b> 1:00 pm onwards <br /> <b> Venue :- </b> Orchha Club & Resort </p></div>
  </div>
  </div>

  
  <div className="event-card">
    <div className="event-img">
      {/* <img src="https://thumbs.dreamstime.com/b/bride-groom-indian-traditional-wedding-attire-323874213.jpg" alt=""/> */}

      <img src={Engagement} alt="" />
    </div>
    <p className="event-name">Engagement</p>
    <div className="extra"><p><b> Monday </b> <br /> <b> 1<sup>st </sup> December, 2025 </b> <br /> <b>Time :- </b> 5:00 pm onwards <br /> <b> Venue :- </b> Orchha Club & Resort</p></div>
  </div>

  
  <div className="event-card">
    <div className="event-img">
      <img src="https://cdn4.vectorstock.com/i/1000x1000/80/08/wedding-reception-rgb-color-icon-vector-35758008.jpg" alt=""/>
    </div>
    <p className="event-name">Reception</p>
    {/* <div className="extra"><p>“Nayi shuruat, pyar ki baat 🌸”</p></div> */}
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
      <img src={Pic_1} alt="Image loading..."   style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} loading='eager' />
      <img src={Pic_2} alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} loading='eager' />
      <img src={Pic_5} alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} loading='eager'/>
      <img src={Pic_4} alt="Image loading..."  style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} loading='eager'/>
      <img src={Pic_3} alt="Image loading..."   style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} loading='eager'/>
      <img src={Events_Dress_Code} alt='Image Loading...' style={{ width: "clamp(180px, 70vw, 250px)", borderRadius: "10px" }} loading='eager'/>
      
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

<section id='map'>


<div class="map-wrap">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.9735629293386!2d78.6432116!3d25.372202499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397778925c83b2b7%3A0x5be8c874e7ad8e79!2sOrchha%20Club%20%26%20Resort%20-%20OCR!5e0!3m2!1sen!2sin!4v1763907827433!5m2!1sen!2sin" width="100%" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
</div>



</section>

           




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