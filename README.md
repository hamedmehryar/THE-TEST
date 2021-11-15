# T.H.E Test APP
  ## Summary
- In this mini REST API, I have implemented basic endpoints for retrieveing the institutes and submission records. 
- The data is stored in MongoDB Atlas on cloud.
- I have used Supertest and Chai to write the Integration Tests (API endpoint tests).
- I have denormalised the data (submissions - Subjects) to imrove the efficiency of the read operations. This is because in this particular use-case, the submissions (update and insert) happen around once a year, while the amount of reads is increases linearly as the traffic and usage of the app grows. 
- **As a small new feature**, in addition to essential endpoints, I added another handy API endpoint that returns the change of student sastisfaction of uni subjects accross years. This can be usefull to include small trend lines (micro line charts) in the list of subject cards in the front-end app.
- <img src="https://docs.microsoft.com/en-us/power-platform-release-plan/2021wave2/power-bi/media/sparklines.png" alt="drawing" width="200"/>
- **As a potential feature in future**, we can implement a reliable online student/staff/applicant review and rating system - that can possibly verify the authenticity of reviews in various ways such as work/student email address verification, approvals, and etc. This can both increase the user engagement through encouraging competetion and also enable the collection of valuable data in long run.

## Limitations
- Due to time limitation, the underlying DB connection logic mixed with models in a traditional and minimalistic way. Ideally, it would be better to have proper db repository implementations isolated from the business and model logic using interfaces and dependency injection.
- To be able to automatically have access to the same DB that is hosted on cloud (MongoDB Atlas free), I have hardcoded some configurations in Config.ts file which is included in the repo. Normally, this is a very bad practice. :)
-  Test cases for each API endpoint are very brief and limited. Normally, each API end point should have as many integration test cases as possible. 
- Again, due to time limitations and small scope of the app, unit tests are skipped and only integration tests (Supertest) are written. 
- To show the data presentation possibilities, I needed to build a front-end app for which the time was very limited. 

## Test
`npm run`

## Development
`npm run dev`

## Build 
`npm run build`

## Start Without Debug (after build)
`npm start`
