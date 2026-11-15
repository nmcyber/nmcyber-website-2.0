UI / UX refinement

- Navigation dropdowns with subtle glassmorphism
- Active navbar item underline to be fully straight ( no rounded edges )
- Activate the dots on hover or when active ( Explore a unique approach to the Navbar UI )
- Video handling on Nextjs

-->  <div className="relative h-full group">
                  {/* Handling videos in Nextjs */}
                  <iframe
                    src={WHY_HUMAN_CENTRIC.video.url}
                    title={WHY_HUMAN_CENTRIC.video.title}
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-[20px]"
                  />
                  {/* <div className="absolute inset-0 rounded-[20px] pointer-events-none border-t-2 border-r-2 border-l-2 border-t-transparent border-r-transparent border-l-transparent group-hover:border-t-accent/50 group-hover:border-r-accent/50 group-hover:border-l-accent/50 transition-all duration-300" /> */}
                </div>

-- Carousel navigation


Downloadable resources user-journey

- Sent an email to the user with the links and in turn collect their email address.
- Put a download time limit
- Set a counter after sending the email to send out an email ( eg. after 24hrs ) to the user && also after they download the file 👍🏽

- Create a n8n workflow for email checking and have Yunhui work-on compositing a  POST request to the webhook

- Add a Cloudflare check before email && Email verification in the backend


        CONTACT FORM
- Reusable component


        FOOTER SECTION *** IMPORTANT UPDATES
- Updated office address
- Contact number
- email address
- Check the Logo 
- Add badges for the Awards ( add subtle effects eg. from magic library )




















Downloadable resource user flow

--> Provide email

--> Backend we check whether the email is a dummy email eg. rexod25404@dropeso.com, or unverified domains, email formats using zod

----> If it passess the checks, get a notification to provide valid

---> Sent the links to the verified ~ valid email

--> By clicking on the link, thats also confirmation
