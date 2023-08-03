import { Button } from "react-bootstrap"
import "../styles/about.css"

function About() {
    return (

        <div className="about">

            <div className="about-container">
                <header className="about-header">Bussiness Types</header>
                <div className="about-content">
                    <div>
                    
                    <p>
                    <img src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/types/a663b69a-330b-436f-99a4-4dac6171641f.webp" width="24px" height="24px" />
                    &nbsp;Some Cool Features of g4 Cafe  
                    </p>

                    <p>
                    <img src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/types/df82ecad-51cb-42fb-842e-cd992a152952.webp" width="24px" height="24px" />
                    &nbsp;Hygienic  
                    </p>

                    <p>
                    <img src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/types/da4041b6-853b-4a32-8273-aeac842f9e55.webp" width="24px" height="24px" />
                    &nbsp;Terrace 
                    </p>

                    <p>
                    <img src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/types/43f53eee-d0a2-44b0-b5a8-e1b5604170fb.webp" width="24px" height="24px" />
                    &nbsp;Garden  
                    </p>

                    <p>
                    <img src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/types/ac56bc84-7f75-41e6-8fc5-a51fa7cae903.webp" width="24px" height="24px" />
                    &nbsp;Wi-Fi
                    </p>

                    <p>
                    <img src="https://images-pardonapp.s3.eu-central-1.amazonaws.com/types/2a44325c-6590-46ab-8ee1-863ea0e4f320.webp" width="24px" height="24px" />
                    &nbsp;Coffee 
                    </p>

                    </div>
                    

                </div>
            </div>

            <div className="about-container">
                <header className="about-header">Working Hours</header>
                <div className="working-hours">
                    <p>Monday &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 10:00 - 23:59</p>
                    <p>Tuesday &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 10:00 - 23:59</p>
                    <p>Wednesday &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; 10:00 - 23:59</p>
                    <p>Thursday &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; 10:00 - 23:59</p>
                    <p>Friday &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; 10:00 - 23:59</p>
                    <p style={{border:"1px solid red",borderRadius:"5px",padding:"5px",marginLeft:"-5px"}}>Saturday &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; 10:00 - 23:59</p>
                    <p>Sunday &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; 10:00 - 23:59</p>
                </div>
            </div>

            <div className="about-container">
                <header className="about-header">Location Information</header>
                <div className="about-content">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991626110943!2d2.291906376988997!3d48.85837007133224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEyfel%20Kulesi!5e0!3m2!1str!2str!4v1691076238685!5m2!1str!2str" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className="about-container">
                <header className="about-header">Language Support</header>
                <div className="about-content">
                    It can probably done by just using another data (which is in another language) + a few text in the code.
                </div>
            </div>

            <div className="about-container">
                <header className="about-header">Download Our App</header>
                <div className="about-content">
                    -Play Store and App Store links of the app- <br></br>
                    It will be possible when I learn React Native.
                </div>
            </div>

            <div className="about-container">
                <header className="about-header">Share Us!</header>
                <div className="about-content" style={{justifyContent:"space-around"}}>
                    <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" variant="success" style={{width:"45%"}}>Whatsapp</Button>
                    <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" style={{width:"45%"}}> Telegram</Button>
                </div>
            </div>

        </div>

    )
}

export default About